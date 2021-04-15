const someRecursive = (arr, test) =>
    arr.length === 0 || test(arr[0])
    ? arr.length !== 0
    : someRecursive(arr.slice(1), test);

    
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false