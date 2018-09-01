
/*
 * Practice > Algorithms > Implementation > Taum and B'day
 * https://www.hackerrank.com/challenges/taum-and-bday/problem
 */

// Add big number support for JS
const BigNumber = require('bignumber.js')

function taumBday (b, w, bc, wc, z) {
    [b, w, bc, wc, z] = [...arguments].map(x => new BigNumber(x))
    let tbc = BigNumber.min( b.times(bc), b.times(wc).plus(b.times(z)) )
    let twc = BigNumber.min( w.times(wc), w.times(bc).plus(w.times(z)) )
    return tbc.plus(twc).toFixed()
}
