function countUniqueValues(arr){

    if(arr.length === 0) return 0;
    let i = 0;
    
    // loop array with with
    for(let j=1; j<arr.length; j++){
        if(arr[j] != arr[i]) {
            arr[i+1] = arr[j];
            i++;
        }
    }
    
    // return index
    return i+1;
  }
  
  countUniqueValues([3])