const capitalizeFirst = arr =>
    arr.length === 0
    ? []
    : [arr[0][0].toUpperCase().concat(arr[0].slice(1))].concat(capitalizeFirst(arr.slice(1)))

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']

// [].push[function()]

