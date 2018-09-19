
/*
 * Practice > Algorithms > Greedy > Beautiful Pairs
 * https://www.hackerrank.com/challenges/beautiful-pairs/problem
 */

function beautifulPairs (a, b) {

    let ac = new Array(Math.max(...a)+1).fill(0)
    let bc = new Array(Math.max(...a)+1).fill(0)
    for (let i = 0, l = a.length; i < l; i++) {
        ac[a[i]]++
        bc[b[i]]++
    }

    let pairs = 0
    for (let i = 1, l = ac.length; i < l; i++) pairs += Math.min(ac[i], bc[i])

    return pairs === a.length ? --pairs : ++pairs
}
