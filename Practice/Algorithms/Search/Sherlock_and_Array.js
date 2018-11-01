
/*
 * Practice > Algorithms > Search > Sherlock and Array
 * https://www.hackerrank.com/challenges/sherlock-and-array/problem
 */

function balancedSums (arr) {
    let s1 = 0
    let s2 = arr.slice(1).reduce((acc, v) => acc + v, 0)
    for (let i = 0, l = arr.length; i < l; i += 1) {
        if (s1 === s2) return 'YES'
        s2 -= arr[i + 1]
        s1 += arr[i]
    }
    return 'NO'
}
