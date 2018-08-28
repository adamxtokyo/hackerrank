
/*
 * Practice > Algorithms > Implementation > Circular Array Rotation
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */

function circularArrayRotation (a, k, q) {
    let l = a.length
    let r = k % l
    let new_arr = [...a.slice(l-r), ...a.slice(0, l-r)]
    return q.map(id => new_arr[id])
}
