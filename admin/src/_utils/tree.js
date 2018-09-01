export const convert = (arr) => {
    return arr.map(item => {
        const { title: name, subtitle: link, children: dropdown, ...rest } = item
        if(dropdown) convert(dropdown)
        return { name, link, dropdown, ...rest }
    })
}

export const reverseConvert = (arr) => {
    return arr.map(item => {
        const { name: title, link: subtitle, dropdown: children, ...rest } = item
        if(children) reverseConvert(children)
        return { title, subtitle, children, ...rest }
    })
}