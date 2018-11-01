
/*
 * Practice > Algorithms > Search > Ice Cream Parlor
 * https://www.hackerrank.com/challenges/icecream-parlor/problem
 */

function icecreamParlor (m, arr) {
    for (let i = 0, l = arr.length; i < l; i += 1) {
        for (let j = i + 1; j < l; j += 1) {
            if (arr[i] + arr[j] === m) return [i + 1, j + 1]
        }
    }
    return null
}
