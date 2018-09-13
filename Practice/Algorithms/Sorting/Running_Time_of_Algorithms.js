
/*
 * Practice > Algorithms > Sorting > Running Time of Algorithms
 * https://www.hackerrank.com/challenges/runningtime/problem
 */

function runningTime (arr, l = arr.length) {

    let shifts = 0
    let storage
    for (let i = 1; i < l; i++) {

        storage = arr[i]
        for (let j = i-1; j >= 0; j--) {
            // If sorted - break current loop
            if (storage >= arr[j]) break

            // Else, swap elements
            storage = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = storage
            storage = arr[j]

            // Count shifts in array
            shifts++
        }
    }

    return shifts
}
