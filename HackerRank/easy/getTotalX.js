function getTotalX(a, b) {
    let index = 0;    
    let num = a[0];
    let result = 0;
    let first;

    const compare = () => {
        return first
        ? num % a[index]  === 0
        : b[index] % num === 0;
    }


    const loopArr = arr => {
        index = 0;

        while( index < arr.length ){
            if( compare() ) {
                index++;
            }
            else return false;
        }

        return true;
    }

    while( num <= b[ b.length - 1 ] ) {
        first = true;

        if( loopArr(a)) {
            first = false;

            if ( loopArr(b) ) {
                result++;
            }

        } 
        
        num++;
    }

    return result;
}

console.log( getTotalX([1], [100]) )


/*
There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

1- The elements of the first array are all factors of the integer being considered
2- The integer being considered is a factor of all elements of the second array

These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
*/