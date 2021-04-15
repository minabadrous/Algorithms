const flatten = arr =>
    arr.length === 0
    ? []
    : Array.isArray(arr[0])
    ? flatten(arr[0]).concat(flatten(arr.splice(1)))
    : [arr[0]].concat(flatten(arr.slice(1)));



// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]