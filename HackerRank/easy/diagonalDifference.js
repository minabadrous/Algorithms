function diagonalDifference(arr) {
    let first = 0, second = 0;
    
    for(let i=0; i<arr.length; i++){
        first += arr[i][i];
        second += arr[arr.length - i - 1][i];        
    }
    
    return Math.abs( first - second )
}