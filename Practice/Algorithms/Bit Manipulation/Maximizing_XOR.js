
/*
 * Practice > Algorithms > Bit Manipulation > Maximizing XOR
 * https://www.hackerrank.com/challenges/lonely-integer/problem
 */

function maximizingXor (l, r) {
    let set = new Set()
    for (let i = l; i <= r; i++) {
        for (let j = i; j <= r; j++) set.add(i^j)
    }
    return Math.max(...set)
}
