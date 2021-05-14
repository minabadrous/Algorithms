const quickSort = arr => {
    if( arr.length <= 1 ) return arr;

    let nbi = 1;
    let compared = 1;

    while( compared < arr.length ){

        if( arr[0] > arr[compared] ){
            [arr[nbi], arr[compared]] = [arr[compared], arr[nbi]];
            nbi++;
        }

        compared++;
    }

    [arr[nbi-1], arr[0]] = [arr[0], arr[nbi-1]];

    let left = arr.slice(0, nbi-1);
    let right = arr.slice(nbi);
    return quickSort(left).concat(arr[nbi - 1]).concat(quickSort(right));
}

console.log( quickSort([3, 4, 1, 5, 6, 20, 2, 7, 9]) );