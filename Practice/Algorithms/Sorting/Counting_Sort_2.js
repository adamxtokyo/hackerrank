
/*
 * Practice > Algorithms > Sorting > Counting Sort 2
 * https://www.hackerrank.com/challenges/countingsort2/problem
 */

function countingSort (arr) {
    let count = new Array(100).fill(0)
    arr.forEach(i => count[i]++)
    return count.reduce( (sorted, v, i) => [...sorted, ...new Array(v).fill(i)], [] )
}
