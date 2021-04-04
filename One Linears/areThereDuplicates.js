function areThereDuplicates(...args) {
    return new Set(args).size !== args.length;
  }
  
  
  areThereDuplicates(5,2,1,1);