// FaShare

'use client'

import Button from './button'
import { useHomeContext } from '../contexts/home'
import { useBreakpoints } from '../hooks/useBreakpoints'
import { useEffect, useState } from 'react'

/* /components/actionIcon.js */
export default function ActionIcon({fn, Icon, color, isHovered}) {
    const { isLoggedIn } = useHomeContext()
    const [sm, md, lg] = useBreakpoints()
    const colors = {
        base: 'bg-base-0 hover:bg-base-100',
        reverse: 'bg-reverse-0 hover:bg-reverse-100',
        primary: 'bg-primary-0 hover:bg-primary-100',
        secondary: 'bg-secondary-0 hover:bg-secondary-100',
        tertiary: 'bg-tertiary-0 hover:bg-tertiary-100',
        quaternary: 'bg-quaternary-0 hover:bg-quaternary-100',
    }
    const [animated, setAnimated] = useState()
    const animations = {
        original: 'translate-x-2',
        new: 'md:translate-x-14 translate-x-12',
        hover: '!translate-x-0'
    }

    useEffect(() => {
        setAnimated(animations.original)
        if (isLoggedIn) {
            const timer = setTimeout(() => {
                setAnimated(animations.new)
            }, 3000)
            return () => clearTimeout(timer)
        }
    }, [isLoggedIn])

    return (
        <Button style = 'actionIcon' classNames = {'action-icon ' + (isLoggedIn ? '' : 'translate-x-[100%]') + ' w-min ' + animated + ' ' + (isLoggedIn ? isHovered ? animations.hover : '' : '') + ' ' + colors[color]} onClick = {isLoggedIn ? () => fn() : () => {}}>
            <Icon size = {!sm ? 36 : 28}/>
        </Button>
    )
}