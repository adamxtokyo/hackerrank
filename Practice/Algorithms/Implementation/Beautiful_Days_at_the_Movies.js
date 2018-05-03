
/*
 * Practice > Algorithms > Implementation > Beautiful Days at the Movies
 * https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
 */

function beautifulDays(i, j, k) {
    let beautifulDays = 0;
    while (i <= j) {
        if ((i - reverse(i)) % k === 0) beautifulDays++;
        i++;
    }
    return beautifulDays;
}
