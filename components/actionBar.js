'use client'

import ActionIcon from './actionIcon'
import { useHomeContext } from '../contexts/home'
import { MdLogout, MdOutlineIosShare, MdRefresh } from 'react-icons/md'
import { useHover } from '../hooks/useHover'
import { useState } from 'react'

/* /components/actionBar.js */
export default function ActionBar() {
    const [hoverRef, isHovered] = useHover()
    const { onLogout } = useHomeContext()
    const actions = [
        {
            icon: MdRefresh,
            color: 'secondary',
            function: () => {}
        },
        {
            icon: MdOutlineIosShare,
            color: 'tertiary',
            function: () => {}
        },
        {
            icon: MdLogout,
            color: 'quaternary',
            function: onLogout
        }
    ]
    
    return (
        <div id = 'action-bar' ref = {hoverRef} className = 'transitional-all ease-in-out absolute top-4 right-0 w-min h-min flex flex-col items-end gap-1'>
            {actions.map((action, index) => {
                return <ActionIcon key = {index} fn = {action.function} Icon = {action.icon} color = {action.color} isHovered = {isHovered}/>
            })}
        </div>
    )
}