
/*
 * Practice > Algorithms > Implementation > Cut the sticks
 * https://www.hackerrank.com/challenges/cut-the-sticks/problem
 */

function cutTheSticks (arr, r = []) {
    let s = Math.min(...arr)
    r.push(arr.length)
    return s === Math.max(...arr) ? r : cutTheSticks(arr.map(x => x - s).filter(x => x > 0), r)
}
