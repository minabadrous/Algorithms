
function factorial(num){
    return num === 0
    ? 1
    : num * factorial(num - 1);
}

factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
 