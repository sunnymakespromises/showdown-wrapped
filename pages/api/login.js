import { hash } from '../../../lib/server/hash'
import * as WebSocket from 'websocket'
import {Protocol} from '@pkmn/protocol'

export default async function handler(req, res) {
    const server = 'sim.smogon.com'
    const serverport = 8000
    const ws = new WebSocket(`ws://${server}:${serverport}/showdown/websocket`)
    let challstr = ''
    
    let response = {
        statuses: {
            username: {
                status: null,
                message: null
            },
            password: {
                status: null,
                message: null
            }
        },
        user: null
    }
    // let users = await getTable('Users')
    // let user = users.find((user) => user.username === username)
    let user
    if (user) { // user with that username exists
        // user = users.find((user) => user.username === username && user.password === password)
        if (user) { // login was successful
            response.statuses.username.status = true
            response.statuses.password.status = true
            response.user = user
        }
        else { // login failed
            response.statuses.password.status = false
            response.statuses.password.message = 'Password is incorrect.'
        }
    }
    else { // user with that username does not exist
        response.statuses.username.status = false
        response.statuses.username.message = 'Username does not exist.'
    }
    res.status(200).json({response: response})
}