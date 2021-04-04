function areThereDuplicates() {
    // declare object lookup
    let lookup = {};
    
    // loop the arguments
    for(let i in arguments){
        let val = arguments[i];
        
        // store and monitor duplicates
        if(lookup[val]) return true;
        lookup[val] = 1;
    }

    // return boolean
    return false;
}