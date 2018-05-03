
/*
 * Practice > Algorithms > Warmup > Diagonal Difference
 * https://www.hackerrank.com/challenges/diagonal-difference/problem
 */

function diagonalDifference(matrix) {
    let a = 0;
    let b = 0;
    for(let i = 0, l = (matrix.length - 1); i <= l; i++){
        a += matrix[i][i];
        b += matrix[i][l-i];
    }
    return Math.abs(a - b);
}
