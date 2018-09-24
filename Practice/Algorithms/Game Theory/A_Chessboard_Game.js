
/*
 * Practice > Algorithms > Game Theory > A Chessboard Game
 * https://www.hackerrank.com/challenges/a-chessboard-game-1/problem
 */

function chessboardGame (x, y) {
    let [ax, ay] = [x % 4, y % 4]
    if (0 < ax && ax < 3 && 0 < ay && ay < 3 ) return 'Second'
    return 'First'
}
