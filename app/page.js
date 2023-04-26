'use client'

import Text from '../components/text'
import { TypeAnimation } from 'react-type-animation'
import Button from '../components/button'
import Image from '../components/image'
import LoginButton from '../components/loginButton'

/* /app/page.js */
export default function Home() {
    return (
        <div id = 'home-page' className = 'w-full h-full flex flex-col justify-center items-center gap-4 px-8 md:px-24'>
            <Text style = 'title'>
                PS Sketch
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
            <LoginButton/>
        </div>
    )
}