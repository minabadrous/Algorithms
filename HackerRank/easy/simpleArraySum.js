const simpleArraySum = ar =>
    ar.length === 1
    ? ar[0]
    : ar[0] + simpleArraySum(ar.slice(1));

// Given an array of integers, find the sum of its elements.

