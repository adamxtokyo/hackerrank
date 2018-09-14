
/*
 * Practice > Algorithms > Sorting > The Full Counting Sort
 * https://www.hackerrank.com/challenges/countingsort4/problem
 */

function countSort (arr) {
    let l = arr.length
    let h = Math.floor(l / 2)
    let sorted = new Array(l).fill('')
    for (let i = 0; i < h; i++) sorted[arr[i][0]] += '- '
    for (let i = h; i < l; i++) sorted[arr[i][0]] += arr[i][1] + ' '
    console.log(sorted.join(''))
    return sorted
}
