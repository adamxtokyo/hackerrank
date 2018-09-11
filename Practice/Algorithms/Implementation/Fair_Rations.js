
/*
 * Practice > Algorithms > Implementation > Fair Rations
 * https://www.hackerrank.com/challenges/fair-rations/problem
 */

function fairRations (b) {
    let c = 0
    for (let i = 0, l = b.length-1; i < l; i++) {
        if (b[i] % 2 > 0) {
            b[i]++
            b[i+1]++
            c += 2
        }
    }
    return b.every(v => v % 2 === 0) ? c : 'NO'
}
