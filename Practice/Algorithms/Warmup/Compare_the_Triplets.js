
/*
 * Practice > Algorithms > Warmup > Compare the Triplets
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

function compareTriplets (a, b) {
    let result = [0, 0]

    for (let i = 0, len = a.length; i < len; i++) {
        if (a[i] === b[i]) continue
        if (a[i] > b[i]) {
            result[0]++
        } else {
            result[1]++
        }
    }

    return result
}
