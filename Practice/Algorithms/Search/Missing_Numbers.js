
/*
 * Practice > Algorithms > Search > Missing Numbers
 * https://www.hackerrank.com/challenges/missing-numbers/problem
 */

function missingNumbers (arr, brr) {
    arr.forEach(x => brr.indexOf(x) > -1 ? brr.splice(brr.indexOf(x), 1) : 0)
    return [...new Set(brr)].sort((a,b) => a-b)
}
