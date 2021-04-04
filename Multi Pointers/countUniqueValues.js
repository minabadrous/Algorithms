function countUniqueValues(arr){
    //check length
    if(arr.length < 2){ 
        return arr.length;
    }
    
    // declare pointers
    let sum = 1;
    let ahead = 1;
    let behinde = 0;

    // start a loop while no pointer is more than length
    while(ahead < arr.length){
        let fresh = arr[ahead];
        let old = arr[behinde];

        if(fresh != old){
            sum++;
        }
        
        ahead++;
        behinde++;
    }

    return sum;
}

countUniqueValues([5,3,2,2,2,6]);