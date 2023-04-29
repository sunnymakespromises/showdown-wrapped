'use client'

import './globals.css';
import _ from 'lodash'
import { HomeProvider as Provider } from '../contexts/home'
import { useStorage } from '../hooks/useStorage'
import { fontString } from '../res/fonts'
import { useEffect, useState } from 'react'
import { Protocol } from '@pkmn/protocol'
import { Actions } from '@pkmn/login'

const BYPASS_CORS = 'https://corsproxy.io/?'

/* /app/layout.js */
export default function HomeLayout({ children }) {
    const [connection, setConnection] = useState() // Connection to smogon servers.
    const [currentUser, setCurrentUser] = useState({
        challstr: '',
        username: '',
        password: ''
    })
    const [isLoggedIn, setIsLoggedIn] = useState(null)
    const { getItem, setItem, removeItem } = useStorage() // Utilities for dealing with localStorage
    const [statuses, setStatuses] = useState({ // Information about different processes throughout the site
        login: { 
            username: {
                status: null,
                message: null
            },
            password: {
                status: null,
                message: null
            }
        }
    })

    /**
     * Runs the first time the component gets rendered.
     */
    useEffect(() => {
        setConnection(new Connection())
    }, [])

    /**
     * Runs after connection to smogon server is created (in the above useEffect).
     */
    useEffect(() => {
        if (connection) { 
            connect() 
            checkLogin()
        }
    }, [connection])

    const context = { currentUser, isLoggedIn, onLogout, onLogin, statuses }

    return (
        <html lang='en' className = {'w-screen h-screen overflow-hidden overscroll-none ' + fontString} style={{scrollBehavior: 'smooth'}}>
            <head />
            <body id = 'main' className = 'w-full h-full bg-base-0 dark:bg-reverse-0 flex flex-col justify-center items-center'>
                <Provider value = {context}>
                    {children}
                </Provider>
            </body>
        </html>
    )

    /**
     * Connects to the smogon server and returns the challstr for use in the login process.
     */
    function connect() {
        connection.open(async data => {
            for (const {args} of Protocol.parse(data)) {
                switch (args[0]) {
                    case 'challstr': {
                        setCurrentUser({...currentUser, challstr: args[1]})
                        break
                    }
                }
            }
        })
    }


    /**
     * Checks if the client is already logged into Showdown via localStorage.
     */
    function checkLogin() {
        const currentUserInStorage = getItem('currentuser') // Reads localStorage for the key 'currentuser'
        if (currentUserInStorage) { // If a value exists in localStorage
            setCurrentUser(currentUserInStorage)
            setIsLoggedIn(true)
        }
        else {
            setIsLoggedIn(false)
        }
    }


    /**
     * @param {string} username - The plaintext username of the user to be logged in.
     * @param {string} password - The plaintext password of the user to be logged in.
     * 
     * Attempts to log the user in with the given username and password.
     */
    async function onLogin(username, password) {
        const data = {
            username: username,
            password: password,
            challstr: currentUser.challstr
        }
        const action = Actions.login(data)
        const response = await (await fetch(BYPASS_CORS + action.url, {
            method: action.method,
            headers: action.headers,
            body: action.data,
        })).text()
        try {
            const cmd = action.onResponse(response)
            if (cmd) {
                connection.send(cmd.substring(1))
                setItem('currentuser', JSON.stringify(data))
                setCurrentUser(data)
                setIsLoggedIn(true)
            }
        }
        catch(e) {
            console.log(e)
            if (e.message == 'Wrong password.') {
                updateStatus(['login', 'password'], false, 'Password is incorrect', 5000)
            }
        }
    }


    /**
     * Logs the client out.
     */
    async function onLogout() {
        const action = Actions.logout(currentUser)
        const response = await (await fetch(BYPASS_CORS + action.url, {
            method: action.method,
            headers: action.headers,
            body: action.data,
        })).text()
        const cmd = action.onResponse(response)
        if (cmd) {
            connection.send(cmd)
            setCurrentUser({...currentUser, username: '', password: ''}) // Sets currentUser to null
            removeItem('currentuser') // Removes the key 'currentuser' from localStorage
            setIsLoggedIn(false)
        }
    }
    
    
    /**
     * @param {[string]} keys - An array containing the keys of the specific status to be updated.
     * @param {boolean} status - A boolean representing the status of the status to be updated.
     * @param {string} message - The message of the status to be updated.
     * @param {number} duration - The number of milliseconds to wait before resetting the status.
     * @param {string} defaultMessage - The default message to display for a status that becomes reset after time.
     * 
     * Updates status.
     */ 
    function updateStatus(keys, status, message, duration = null, defaultMessage = null) {
        let newStatuses = statuses // A copy of the current statuses
        let currentObject = newStatuses // The current object that is being updated
        for (let i = 0; i < keys.length; i++) { // Loops through all of the keys
            if (i < (keys.length - 1)) { // If the current key is not the last
                currentObject = currentObject[keys[i]] // Update currentObject to the nested object denoted by the current key
            }
            else { // If the current key is the last
                currentObject[keys[i]] = {status: status, message: message} // Update the value of the current key to the given value
            }
        }
        setStatuses({...newStatuses}) // Sets the statuses to newStatuses

        if (duration) { // If duration is given
            const timer = setTimeout(() => {  // Waits for duration seconds, and then clears the status
                updateStatus(keys, null, defaultMessage, null)
            }, duration)
            return () => clearTimeout(timer) // Clears the timer
        }
    }
}

class Connection {
    open(fn) {
        this.ws = new WebSocket(`ws://sim.smogon.com:8000/showdown/websocket`)
        this.ws.onmessage = ({ data }) => {
            fn(data)
        }
        this.ws.onopen = () => {
            console.log(`Connected to ${this.ws.url}`)
        }
        this.ws.onclose = e => {
            const clean = e.wasClean ? ' cleanly ' : ' '
            const reason = e.reason ? `: ${e.reason}` : ''
            console.log(`Disconnected${clean}from ${this.ws.url} with ${e.code}${reason}`)
        }
        this.ws.onerror = e => {
            const msg = e.message
            if (msg === 'TIMEOUT') return
            console.error(`Connection error${e.message ? `: ${e.message}` : ''}`)
        };
    }

    close() {
        this.ws.close()
    }

    send(message) {
        this.ws.send(message)
    }
}