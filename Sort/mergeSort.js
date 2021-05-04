const mergeSort = arr => {
    const merge = (first, second) => {
        let i = 0;
        let j = 0;
        let merged = [];
        while(merged.length < first.length + second.length){
            if(first[i] < second[j]){
                merged.push(first[i]);
                if(i < first.length - 1) i++;
                else merged = merged.concat(second.slice(j));
            }
            
            else{
                merged.push(second[j]);
                if(j < second.length - 1) j++;
                else merged = merged.concat(first.slice(i));
            }
        }
        return merged;
    }

    if(arr.length <= 1) return arr;
    let mid = Math.round(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

let data = Array.from({length: 100000}, () => Math.floor(Math.random() * 40));

console.log(mergeSort(data))