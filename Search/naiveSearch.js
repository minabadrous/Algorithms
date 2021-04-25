const naiveSearch = (str, pat) => {
    let patIndex = 0;
    let strIndex = 0;
    let count = 0;


    while( strIndex < pat.length - 1 ){
        if( str[strIndex] === pat[patIndex] ){
            if(patIndex === pat.length-1){
                count++;
                patIndex = 0;
                patIndex = patIndex - strIndex + 1;
            }
            patIndex++;
            strIndex++;
        }

        else{
            patIndex = patIndex - strIndex + 1;
        }
    }
}

naiveSearch('loohalolo', 'ha')