'use client'

import Text from '../components/text'
import Button from '../components/button'
import Image from '../components/image'

/* /components/loginButton.js */
export default function LoginButton() {
    function login() {
        console.log('login!')
    }

    return (
        <Button onClick = {login} id = 'home-page-login-button' style = 'main' classNames = 'flex flex-row items-center'>
            <Text style = 'mainButton'>
                Sign in
            </Text>
            {/* <Image path = 'logo-showdown.png' classNames = 'h-[1em] text-4xl aspect-square'/> */}
        </Button>
    )
}