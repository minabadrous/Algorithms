function plusMinus(arr) {
    // Write your code here
    let pos = 0, neg = 0, zero = 0;
    
    for(let i=0; i<arr.length; i++){
        let val = arr[i];
        
        if(val > 0) pos++;
        else if(val < 0) neg++;
        else zero++;
    }
    
    let res = `${pos/arr.length}\n${neg/arr.length}\n${zero/arr.length}\n`;
    console.log(res)
}

// Given an array of integers, calculate the ratios of its elements that are positive, 
// negative, and zero.