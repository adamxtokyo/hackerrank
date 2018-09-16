
/*
 * Practice > Algorithms > Sorting > Closest Numbers
 * https://www.hackerrank.com/challenges/closest-numbers/problem
 */

function closestNumbers (arr) {

    arr.sort((a,b) => a-b)

    let result = []
    let diff
    let min_diff = Infinity

    for (let i = 0, l = arr.length-1; i < l; i++) {
        diff = arr[i+1] - arr[i]
        if (diff < min_diff) {
            min_diff = diff
            result = [arr[i], arr[i+1]]
        } else if (diff === min_diff) {
            result.push(arr[i], arr[i+1])
        }
    }

    return result
}
