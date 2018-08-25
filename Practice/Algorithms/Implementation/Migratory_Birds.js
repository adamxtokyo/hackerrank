
/*
 * Practice > Algorithms > Implementation > Migratory Birds
 * https://www.hackerrank.com/challenges/migratory-birds/problem
 */

function migratoryBirds (arr) {
    let count = [0]
    let result = 0
    arr.forEach(x => {
        count[x] = count[x] ? ++count[x] : 1
        result = count[x] > count[result] || (count[result] === count[x] && x < result) ? x : result
    })
    return result
}
