
/*
 * Practice > Algorithms > Sorting > Quicksort 1 - Partition
 * https://www.hackerrank.com/challenges/quicksort1/problem
 */

function quickSort (arr) {
    let left = []
    let right = []
    let equal = [arr[0]]
    for (let i = 1, l = arr.length; i < l; i++) {
        if (arr[i] < arr[0]) {
            left.push(arr[i])
        } else if (arr[i] > arr[0]) {
            right.push(arr[i])
        } else {
            equal.push(arr[i])
        }
    }
    return [...left, ...equal, ...right]
}
