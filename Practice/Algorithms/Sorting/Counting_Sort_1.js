
/*
 * Practice > Algorithms > Sorting > Counting Sort 1
 * https://www.hackerrank.com/challenges/countingsort1/problem
 */

function countingSort (arr) {
    let count = new Array(100).fill(0)
    arr.forEach(i => count[i]++)
    return count
}
