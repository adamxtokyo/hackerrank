
/*
 * Practice > Algorithms > Implementation > Beautiful Triplets
 * https://www.hackerrank.com/challenges/beautiful-triplets/problem
 */

const beautifulTriplets = (d, arr) => arr.reduce( (acc, x) => acc += arr.indexOf(x+d) > -1 && arr.indexOf(x+d+d) > -1 ? 1 : 0, 0 )
