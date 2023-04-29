'use client'

import Text from '../components/text'
import { useHomeContext } from '../contexts/home'
import Input from '../components/input'
import Button from '../components/button'
import { useState } from 'react'

/* /components/page.js */
export default function Login() {
    const { onLogin, statuses } = useHomeContext()
    const [inputs, setInputs] = useState({ username: '', password: '' }) // The username and password from the login inputs

    return (
        <div id = 'login-form' className = 'w-min flex flex-col items-center gap-4'>
            <div id = 'login-form-inputs' className = 'flex flex-col gap-2'>
                <Input id = 'login-username-input' style = 'main' status = {statuses.login.username.status} value = {inputs.username} type = 'text' placeholder = 'Username' onChange = {(e) => onInputChange('username', e.target.value)} autoComplete = 'off'/>
                <Input id = 'login-password-input' style = 'main' status = {statuses.login.password.status} value = {inputs.password} type = 'password' placeholder = 'Password' onChange = {(e) => onInputChange('password', e.target.value)} autoComplete = 'off'/>
            </div>
            <Button isListener onClick = {() => {if (inputs.username !== '' && inputs.password !== '') {onLogin(inputs.username, inputs.password)}}} id = 'home-page-login-button' style = 'main' classNames = 'w-min'>
                <Text style = 'mainButton'>
                    Sign in
                </Text>
            </Button>
        </div>
    )

    
    /**
     * @param {string} category - The category of the input to be changed.
     * @param {string} value - The value of the input to be changed.
     * 
     * Updates input. Runs whenever an input's text gets changed.
     */
    function onInputChange(category, value) {
        let newInputs = inputs
        newInputs[category] = value
        setInputs({...newInputs})
    }
}