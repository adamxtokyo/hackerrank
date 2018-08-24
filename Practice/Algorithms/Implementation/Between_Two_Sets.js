
/*
 * Practice > Algorithms > Implementation > Between Two Sets
 * https://www.hackerrank.com/challenges/between-two-sets/problem
 */

function getTotalX (a, b) {
    let result = []
    for (let i = Math.min(...a), j = Math.min(...b); i <= j; i++) {
        if (a.every(x => i % x === 0)) result.push(i)
    }
    return result.filter(x => b.every(y => y % x === 0)).length
}
