const quickSort = arr => {
    if( arr.length === 1 ) return arr[0];
    else if(arr.length === 0) return [];

    let pivot = 0;
    let nbi = 1;
    let compared = 1;

    while( compared < arr.length ){

        if( arr[0] > arr[compared] ){
            [arr[nbi], arr[compared]] = [arr[compared], arr[nbi]];
            nbi++;
        }

        compared++;
    }

    [arr[nbi-1], arr[pivot]] = [arr[pivot], arr[nbi-1]];

    let left = quickSort(arr.slice(0, nbi-1));
    let right = quickSort(arr.slice(nbi));

    return [left , arr[nbi - 1], right].reduce((acc, val) => acc.concat(val), []);
}

console.log('\nresult:', quickSort([3, 4, 1, 5, 6, 4, 2, 7, 9]));