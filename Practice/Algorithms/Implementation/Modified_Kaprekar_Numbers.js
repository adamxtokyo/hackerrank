
/*
 * Practice > Algorithms > Implementation > Modified Kaprekar Numbers
 * https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */

function kaprekarNumbers (p, q) {
    let r = []
    while (p <= q) {
        let sq = (p*p).toString(10)
        let l = sq.length
        let k = Number(sq.slice(0, Math.floor(l/2))) + Number(sq.slice(Math.floor(l/2)))
        if (p === k) r.push(p)
        p++
    }
    return console.log(r.length > 0 ? r.join(' ') : 'INVALID RANGE')
}
