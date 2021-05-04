function miniMaxSum(arr) {
    arr.sort((a,b) => a - b);
    let min = arr.slice(0,4).reduce((sum, val) => sum += val);
    let max = min + arr[4] - arr[0];
    console.log(min, max);
}


// Given five positive integers, find the minimum and maximum values that can be calculated by 
// summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.