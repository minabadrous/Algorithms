const selectionSort = toSort => {
    let sorted = toSort;

    for(let i=0; i<sorted.length; i++){
        let min = i;
        for(let j=i; j<sorted.length; j++){
            if(sorted[j] < sorted[min]){
                min = j;
            }
        }
        [sorted[min], sorted[i]] = [sorted[i], sorted[min]];
    }

    return sorted;
}

console.log(selectionSort([5,7,2,9,4,3]))