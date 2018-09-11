
/*
 * Practice > Algorithms > Implementation > Happy Ladybugs
 * https://www.hackerrank.com/challenges/happy-ladybugs/problem
 */

function happyLadybugs (b) {
    let c = new Array(26).fill(0)
    let u = 0
    let _ = 0
    for (let i = 0, l = b.length; i < l; i++) {
        if (b[i] === '_' && ++_) continue
        if (b[i] !== b[i-1] && b[i] !== b[i+1]) u++
        c[b[i].charCodeAt(0)-65]++
    }
    if (u === 0 || (c.every(x => x === 0 || x > 1) && _)) return 'YES'
    return 'NO'
}
