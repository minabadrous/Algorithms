const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right){
        let middle = Math.round((left + right) / 2);
        let curr = arr[middle];
        
        if(curr === val) return middle;
        
        else if(curr > val) right = middle-1;
        else if(curr < val) left = middle+1;
    }
    
    return -1;
};
 
console.log(binarySearch([1,4,8,9,15,78], 15))
     