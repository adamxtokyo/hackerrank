
/*
 * Practice > Algorithms > Sorting > Insertion Sort - Part 1
 * https://www.hackerrank.com/challenges/insertionsort1/problem
 */

function insertionSort1 (n, arr) {
    let storage = arr[n-1]
    for (let i = n-1; i >= 0; i--) {
        if (arr[i-1] > storage) {
            arr[i] = arr[i-1]
            console.log(arr.join(' '))
            continue
        }
        arr[i] = storage
        console.log(arr.join(' '))
        break
    }
}
