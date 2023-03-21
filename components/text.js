/* /components/text.js */
export default function Text({ style, styles, classNames, children, ...extras }) {
    let options = [
        { 
            title: 'main', 
            classNames: 'whitespace-nowrap font-main text-xl text-primary-900 dark:text-primary-50'
        }
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