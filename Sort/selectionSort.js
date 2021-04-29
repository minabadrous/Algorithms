const selectionSort = arr => {
    for(let i=0; i<arr.length; i++){
        let min = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]) min = j;
        }

        [arr[i], arr[min]] = [arr[min], arr[i]];

    }

    return arr;
}

console.log(selectionSort([5,7,2,9,4,3]));