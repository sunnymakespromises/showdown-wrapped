'use client'

import ActionIcon from './actionIcon'
import { useHomeContext } from '../contexts/home'
import { MdOutlineLogout, MdOutlineIosShare, MdRefresh } from 'react-icons/md'

/* /components/actionBar.js */
export default function ActionBar() {
    const { onLogout } = useHomeContext()
    return (
        <div className = 'absolute right-0 top-4 w-min h-min flex flex-col items-end gap-2'>
            <ActionIcon fn = {() => {}} Icon = {MdRefresh} color = 'secondary'/>
            <ActionIcon fn = {() => {}} Icon = {MdOutlineIosShare} color = 'tertiary'/>
            <ActionIcon fn = {onLogout} Icon = {MdOutlineLogout} color = 'quarternary'/>
        </div>
    )
}