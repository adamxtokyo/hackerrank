
/*
 * Practice > Algorithms > Implementation > Forming a Magic Square
 * https://www.hackerrank.com/challenges/magic-square-forming/problem
 */

function formingMagicSquare (m) {
    let a = [...m[0], ...m[1], ...m[2]]
    let s = [
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4]
    ]

    return s.reduce((min_cost, row) => {
        let cost = row.reduce((acc, val, id) => acc + Math.abs(val - a[id]), 0)
        return cost < min_cost ? cost : min_cost
    }, 45)
}
