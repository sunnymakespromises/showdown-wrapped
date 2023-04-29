'use client'

import Text from '../components/text'
import Login from '../components/login'
import ActionBar from '../components/actionBar'
import { TypeAnimation } from 'react-type-animation'
import { useHomeContext } from '../contexts/home'

/* /app/page.js */
export default function Home() {
    const { isLoggedIn } = useHomeContext()
    const body = isLoggedIn === null ? null : isLoggedIn ? null : <Login/>
    return (
        <div id = 'home-page' className = 'w-full h-full flex flex-col items-center gap-4 py-8 px-8 md:px-24 md:py-12'>
            <div id = 'login-text' className = 'flex flex-col items-center gap-4'>
                <Text style = 'title'>
                    PSketch!
                </Text>
                <Text style = 'main'>
                    <span>&nbsp;</span>
                    <TypeAnimation
                        sequence={[
                            "Your past year in Pokémon's #1 competitive battle simulator."
                        ]}
                        cursor={true}
                        speed={80}
                    />
                </Text>
                <ActionBar/>
                {body}
            </div>
        </div>
    )
}