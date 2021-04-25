const bubbleSort = arr => {
    let sorted = arr;
    let stillSorting = false;

    for(let i=sorted.length-1; i>=0; i--){
        for(let j=0; j<i; j++){
            if(sorted[j] > sorted[j+1]){
                if(j > 0) stillSorting = true;
                [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
            }
        }
        if(!stillSorting) return sorted
        else stillSorting = false;
    }

    return sorted;
}

console.log(bubbleSort([10,2,17,8,0,2]))