/* /components/text.js */
export default function Text({ style, styles, classNames, children, ...extras }) {
    let options = [
        { 
            title: 'main', 
            classNames: 'font-main text-xl md:text-4xl text-center text-reverse dark:text-base-0'
        },
        { 
            title: 'mainButton', 
            classNames: 'font-main text-4xl md:text-4xl text-reverse-0'
        },
        { 
            title: 'title', 
            classNames: 'font-bold text-7xl md:text-8xl text-center text-reverse dark:text-base-0'
        },
        { 
            title: 'logo', 
            classNames: 'whitespace-nowrap font-main text-3xl text-reverse dark:text-base-0'
        },
    ]

    /* getOption
     * 
     * Gets the option given by the style parameter.
     * - Searches through optioins and returns the option whose title matches the 
     *   style parameter.
     */
    const getOption = () => {
        return options.find((option) => { // searches through options
            return option.title === style // returns option whose title matches the style parameter
        })
    }

    return (
        <p className = {getOption()?.classNames + (classNames ? ' ' + classNames : '')} style = {styles} {...extras}>{children}</p>
    )
}