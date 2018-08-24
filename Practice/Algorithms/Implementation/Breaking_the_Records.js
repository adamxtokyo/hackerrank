
/*
 * Practice > Algorithms > Implementation > Breaking the Records
 * https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
 */

function breakingRecords (scores) {
    let records = [scores[0], scores[0]]
    let result = [0, 0]
    for (let i = 1, l = scores.length; i < l; i++) {
        if (scores[i] > records[0]) ++result[0], records[0] = scores[i]
        if (scores[i] < records[1]) ++result[1], records[1] = scores[i]
    }
    return result
}
