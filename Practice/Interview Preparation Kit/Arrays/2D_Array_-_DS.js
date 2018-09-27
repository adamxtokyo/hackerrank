
/*
 * Practice > Interview Preparation Kit > Arrays > 2D Array - DS
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

function hourglassSum (a) {
    let sums = []
    for (let r = 2; r < 6; r++) {
        for (let c = 2; c < 6; c++) {
            sums.push(a[r-2][c-2] + a[r-2][c-1] + a[r-2][c] + a[r-1][c-1] + a[r][c-2] + a[r][c-1] + a[r][c])
        }
    }
    return Math.max(...sums)
}
