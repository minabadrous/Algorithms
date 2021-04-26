const collectStrings = obj =>
    
    [].concat(Object.values(obj)
    .map(value => {
        return typeof value === 'string'
        ? value
        : collectStrings(value)
    }))
    .reduce((acc, val) => acc.concat(val), []);



const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}



console.log(collectStrings(obj)) // ["foo", "bar", "baz"])