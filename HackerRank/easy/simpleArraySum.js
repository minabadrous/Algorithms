const simpleArraySum = ar =>
    ar.length === 1
    ? ar[0]
    : ar[0] + simpleArraySum(ar.slice(1));