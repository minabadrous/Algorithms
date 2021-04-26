const insertionSort = arr => {
    for(let i=0; i<arr.length; i++){
        let val = arr[i];
        for(let j=i-1; j>=0 && arr[j] > val; j--){
            arr[j+1] = arr[j];
            arr[j] = val;
        }
    }
    return arr;
}
    
console.log(insertionSort([4,9,1,7,2,5]))