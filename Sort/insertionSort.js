const insertionSort = arr => {
    let sorted = arr;

    for(let i=1; i<sorted.length; i++){
        for(let j=i-1; j>=0; j--){
            if(j === 0 && sorted[i] < sorted[j]){
                sorted.splice(j, 0, sorted[i])
                sorted.splice(i+1, 1);
                break;
            }

            else if(sorted[i] > sorted[j] && sorted[i] < sorted[j + 1]){
                sorted.splice(j+1, 0, sorted[i])
                sorted.splice(i+1, 1);
                break;
            }
        }
    }
    return sorted;
}
    
console.log(insertionSort([4,9,1,7,2,5]))

