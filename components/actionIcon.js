// FaShare

'use client'

import Button from './button'
import { useEffect, useState } from 'react'

/* /components/actionIcon.js */
export default function ActionIcon({fn, Icon, color}) {
    const [animated, setAnimated] = useState()
    const animations = {
        original: 'translate-x-2',
        new: 'translate-x-14',
        hover: 'hover:translate-x-0'
    }

    useEffect(() => {
        setAnimated(animations.original)
        const timer = setTimeout(() => {
            setAnimated(animations.new)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    const colors = 'bg-' + color + '-0 hover:bg-' + color + '-100'

    return (
        <Button style = 'actionIcon' classNames = {'right-0 w-min ' + animated + ' ' + animations.hover + ' ' + colors} onClick = {() => fn()}>
            <Icon size = {36}/>
        </Button>
    )
}