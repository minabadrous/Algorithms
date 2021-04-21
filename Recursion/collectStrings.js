const collectStrings = obj => {
    let arr = [];

    const loopObj = currObj => {
        Object.values(currObj)
        .map(value => {
            if(typeof value === 'string'){
                arr.push(value);
            } 
            else if(typeof value === 'object') loopObj(value)
        })
    }

    loopObj(obj)
    return arr;
}



const obj = {
    stuff: "foo",
    aaaa: 'aaa',
    wqeqwr: 'rqrw',
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