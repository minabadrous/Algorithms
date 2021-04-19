const stringifyNumbers = obj => {
    let result = {};

    const extractValue = (obj, key) => {
        let value = obj[key];

        return typeof value === 'object' && value !== null && !Array.isArray(value)
        ? stringifyNumbers(value)
        : typeof value === 'number'
        ? value.toString()
        : value
    }

    Object.keys(obj).forEach((key, index)=> result[key] = extractValue(obj, key))
    return result;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj))

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/