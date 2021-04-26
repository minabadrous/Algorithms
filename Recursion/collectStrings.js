const collectStrings = obj => {

    Object.keys(obj).forEach((key, index)=> {
        let value = obj[key];
        let arr = [];

        if(typeof value === 'object' && value !== null && !Array.isArray(value)){
            return collectStrings(value)
        }

        else if(typeof value === 'string'){
            arr.push(value)
            console.log(value, arr)
        }

        return arr;
    })

    return [].concat(collectStrings(obj))
}


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