export const convert = (arr) => {
    return arr.map(item => {
        const { title: name, subtitle: link, children: dropdown, ...rest } = item
        const newArr = { name, link, dropdown, ...rest }
        if(dropdown) newArr.dropdown = convert(dropdown)
        return newArr
    })
}

export const reverseConvert = (arr) => {
    return arr.map(item => {
        const { name: title, link: subtitle, dropdown: children, ...rest } = item
        const newArr = { title, subtitle, children, ...rest }
        if(children) newArr.children = reverseConvert(children)
        return newArr
    })
}