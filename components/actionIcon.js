// FaShare

'use client'

import Button from './button'
import { useHomeContext } from '../contexts/home'
import { useEffect, useState } from 'react'

/* /components/actionIcon.js */
export default function ActionIcon({fn, Icon, color}) {
    const { isLoggedIn } = useHomeContext()
    const [animated, setAnimated] = useState()
    const animations = {
        original: 'translate-x-2',
        new: 'translate-x-14',
        hover: 'hover:translate-x-0'
    }

    useEffect(() => {
        setAnimated(animations.original)
        if (isLoggedIn) {
            const timer = setTimeout(() => {
                setAnimated(animations.new)
            }, 2000)
            return () => clearTimeout(timer)
        }
    }, [isLoggedIn])

    const colors = 'bg-' + color + '-0 hover:bg-' + color + '-100'

    return (
        <Button style = 'actionIcon' classNames = {(isLoggedIn ? '' : 'translate-x-[100%]') + ' w-min ' + animated + ' ' + (isLoggedIn ? animations.hover : '') + ' ' + colors} onClick = {isLoggedIn ? () => fn() : () => {}}>
            <Icon size = {36}/>
        </Button>
    )
}