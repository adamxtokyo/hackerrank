
/*
 * Practice > Algorithms > Warmup > A Very Big Sum
 * https://www.hackerrank.com/challenges/a-very-big-sum/problem
 */

function aVeryBigSum(n, ar) {
    let sum = 0;
    ar.forEach( (e, i) => sum += e);
    return sum;
}
