
/*
 * Practice > Algorithms > Implementation > Viral Advertising
 * https://www.hackerrank.com/challenges/strange-advertising/problem
 */

const viralAdvertising = (n, p = 5, l = 0) => n === 0 ? l : viralAdvertising(--n, Math.floor(p / 2) * 3, l += Math.floor(p / 2))
