function divisibleSumPairs(n, k, ar) {
    let index = 0;
    let result = 0;
    
    while(index < ar.length){
        for(let j=index+1; j<ar.length; j++){
            if((ar[index] + ar[j]) % k === 0) result++;
        }
        
        index++;
    }
    return result;
}

console.log( divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]) )

/*
Given an array of integers and a positive integer k, 
- determine the number of (i, j) pairs where i < j 
- and ar[i] + ar[j] is divisible by k.
*/