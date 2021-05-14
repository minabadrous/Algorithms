function kangaroo(x1, v1, x2, v2) {
    return x1 > x2 || (x1 < x2 && v1 <= v2)
    ? 'NO'
    : x1 === x2
    ? 'YES'
    : kangaroo(x1+v1, v1, x2+v2, v2)
}


/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * 
  You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. 
  If it is possible, return YES, otherwise return NO.
 */