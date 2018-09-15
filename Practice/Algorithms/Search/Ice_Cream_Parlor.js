
/*
 * Practice > Algorithms > Search > Ice Cream Parlor
 * https://www.hackerrank.com/challenges/icecream-parlor/problem
 */

function icecreamParlor (m, arr) {
    for (let i = 0, l = arr.length; i < l; i++) {
        for (let j = i+1; j < l; j++) {
            if (arr[i] + arr[j] === m) return [i+1, j+1]
        }
    }
}
