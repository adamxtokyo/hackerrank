
/*
 * Practice > Algorithms > Sorting > Insertion Sort - Part 2
 * https://www.hackerrank.com/challenges/insertionsort2/problem
 */

function insertionSort2 (n, arr) {

    let storage
    for (let i = 1; i < n; i++) {
        storage = arr.splice(i, 1)[0]

        for (let j = i; j >= 0; j--) {
            if (storage > arr[j-1] || j === 0) {
                arr.splice(j, 0, storage)
                break
            }
        }

        console.log(arr.join(' '))
    }
}
