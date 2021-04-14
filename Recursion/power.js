function power(base, exponent){
    return exponent === 0
    ? 1
    : base * power(base, exponent-1);
}

power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16