
/*
 * Practice > Algorithms > Strings > Palindrome Index
 * https://www.hackerrank.com/challenges/palindrome-index/problem
 */

function palindromeIndex (s) {
    if (s === s.split('').reverse().join('')) return -1

    for (let i = 0, l = s.length, m = Math.floor(s.length / 2); i < m; i++) {
        if (s[i] !== s[l-i-1]) {
            let s1 = s.slice(i+1, l-i)
            let s2 = s.slice(i, l-i-1)
            if (s1 === s1.split('').reverse().join('')) return i
            if (s2 === s2.split('').reverse().join('')) return l-i-1
            return -1
        }
    }
}
