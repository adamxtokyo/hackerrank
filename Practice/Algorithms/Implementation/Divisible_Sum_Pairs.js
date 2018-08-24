
/*
 * Practice > Algorithms > Implementation > Divisible Sum Pairs
 * https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
 */

function divisibleSumPairs (n, k, arr) {
    let result = 0
    for (let i = 0, l = arr.length; i < l; i++) {
        for (let j = i + 1; j < l; j++) {
            if ((arr[i] + arr[j]) % k === 0) ++result
        }
    }
    return result
}
