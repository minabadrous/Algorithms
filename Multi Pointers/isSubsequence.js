function isSubsequence(firstWord, secondWord) {
    // two pointers, one for each string
    let firstPointer = 0;
    let secondPointer = 0;

    // loop over the first string
    while(firstPointer < firstWord.length){
        let leftChar = firstWord[firstPointer];
        let rightChar = secondWord[secondPointer];

        if(firstWord.length-firstPointer+1 > secondWord.length-secondPointer+1) return false;

        if(leftChar === rightChar){
            if(firstPointer == firstWord.length-1) return true;
            else{
                firstPointer++;
            }
        }
        secondPointer++;
    }
    
    return false;
}

// isSubsequence('hello', 'hello world')
isSubsequence('sing','stinkkkg');