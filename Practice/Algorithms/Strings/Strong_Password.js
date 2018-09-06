
/*
 * Practice > Algorithms > Strings > Strong Password
 * https://www.hackerrank.com/challenges/strong-password/problem
 */

function minimumNumber (n, password) {

    let r = 0

    if (!/\d/.test(password)) r++
    if (!/[A-Z]/.test(password)) r++
    if (!/[a-z]/.test(password)) r++
    if (!/[!@#$%^&*()\-+]/.test(password)) r++

    return Math.max(r, 6 - n)
}
