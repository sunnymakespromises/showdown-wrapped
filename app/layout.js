'use client'

import './globals.css';
import Footer from '../components/footer'
import { HomeProvider as Provider } from '../contexts/home'
import localFont from '@next/font/local'

const mainThin = localFont({
    src: '../public/fonts/thin.ttf',
    variable: '--font-main-thin',
    display: 'swap'
})

const mainThinItalic = localFont({
    src: '../public/fonts/thin-italic.ttf',
    variable: '--font-main-thin-italic',
    display: 'swap'
})

const mainExtraLight = localFont({
    src: '../public/fonts/extra-light.ttf',
    variable: '--font-main-extra-light',
    display: 'swap'
})

const mainExtraLightItalic = localFont({
    src: '../public/fonts/extra-light-italic.ttf',
    variable: '--font-main-extra-light-italic',
    display: 'swap'
})

const mainLight = localFont({
    src: '../public/fonts/light.ttf',
    variable: '--font-main-light',
    display: 'swap'
})

const mainLightItalic = localFont({
    src: '../public/fonts/light-italic.ttf',
    variable: '--font-main-light-italic',
    display: 'swap'
})

const mainRegular = localFont({
    src: '../public/fonts/regular.ttf',
    variable: '--font-main-regular',
    display: 'swap'
})

const mainRegularItalic = localFont({
    src: '../public/fonts/regular-italic.ttf',
    variable: '--font-main-regular-italic',
    display: 'swap'
})

const main = localFont({
    src: '../public/fonts/medium.ttf',
    variable: '--font-main',
    display: 'swap'
})

const mainItalic = localFont({
    src: '../public/fonts/medium-italic.ttf',
    variable: '--font-main-italic',
    display: 'swap'
})

const mainBold = localFont({
    src: '../public/fonts/bold.ttf',
    variable: '--font-main-bold',
    display: 'swap'
})

const mainBoldItalic = localFont({
    src: '../public/fonts/bold-italic.ttf',
    variable: '--font-main-bold-italic',
    display: 'swap'
})

const mainBlack = localFont({
    src: '../public/fonts/black.ttf',
    variable: '--font-main-black',
    display: 'swap'
})

const mainBlackItalic = localFont({
    src: '../public/fonts/black-italic.ttf',
    variable: '--font-main-black-italic',
    display: 'swap'
})

/* /app/layout.js */
export default function HomeLayout({ children }) {
    const context = {}
    return (
        <html lang='en' className = {'w-screen h-screen overflow-hidden overscroll-none ' + mainThin.variable + ' ' + mainThinItalic.variable + ' ' + mainExtraLight.variable + ' ' + mainExtraLightItalic.variable + ' ' + mainLight.variable + ' ' + mainLightItalic.variable + ' ' + mainRegular.variable + ' ' + mainRegularItalic.variable + ' ' + main.variable + ' ' + mainItalic.variable + ' ' + mainBold.variable + ' ' + mainBoldItalic.variable + ' ' + mainBlack.variable + ' ' + mainBlackItalic.variable} style={{scrollBehavior: 'smooth'}}>
            <head />
            <body id = 'main' className = 'w-full h-full bg-base-0 dark:bg-reverse-0 flex flex-col justify-center items-center'>
                <Provider value = {context}>
                    {children}
                    <Footer/>
                </Provider>
            </body>
        </html>
    )
}

