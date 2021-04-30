const bubbleSort = arr => {
    let sorted = true;

    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                sorted = false;
            }
        }
        if(sorted) break;
        else sorted = true;
    }

    return arr;
}

console.log(bubbleSort([10,2,17,8,0,2]))