
/*
 * Practice > Algorithms > Implementation > Non-Divisible Subset
 * https://www.hackerrank.com/challenges/non-divisible-subset/problem
 */

function nonDivisibleSubset (k, arr) {

    let remainders = new Array(k).fill(0)
    arr.forEach(x => remainders[x % k]++)

    let count = 0
    for (let i = 1; i <= k / 2; i++) {
        count += i === (k - i) ? 1 : Math.max(remainders[i], remainders[k - i])
    }

    if (remainders[0] > 0) count++

    return count
}
