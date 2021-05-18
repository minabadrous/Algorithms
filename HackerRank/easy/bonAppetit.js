function bonAppetit(bill, k, b) {
    let res = (bill.reduce((acc, val) => acc + val) - bill[k])/2;
    console.log(b === res
    ? 'Bon Appetit'
    : b - res);
}

console.log( bonAppetit([3, 10, 2, 9], 1, 7) )

// If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference