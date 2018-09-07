
/*
 * Practice > Algorithms > Strings > Caesar Cipher
 * https://www.hackerrank.com/challenges/caesar-cipher-1/problem
 */

function caesarCipher (s, k) {
    return s.split('').map( l => {
        let c = l.charCodeAt(0)
        if (65 <= c && c <= 90 ) l = String.fromCharCode( (c+k-65) % 26 + 65)
        if (97 <= c && c <= 122 ) l = String.fromCharCode( (c+k-97) % 26 + 97)
        return l
    }).join('')
}
