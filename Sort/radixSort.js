const radixSort = arr => {

    let list = {};
    let loops = 0;
    let max = Math.max(...arr).toString().length;

    while(loops < max){
        for(let i=0; i<arr.length; i++){
            let lastNum = arr[i].toString().padStart(max, "0").slice(max - 1 - loops, max - loops)

            list[lastNum]
            ? list[lastNum].push( arr[i] )
            : list[lastNum] = [arr[i]];
        }

        arr = Object.values( list ).reduce((acc, val) => acc.concat(val), []);
        list = {};
        loops++;
    }

    return arr;
}

console.log( radixSort([4, 48, 2133, 1, 256, 8797, 88, 2791, 33]) );