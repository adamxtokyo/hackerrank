
/*
 * Practice > Algorithms > Strings > Two Characters
 * https://www.hackerrank.com/challenges/two-characters/problem
 */

function alternate (s) {

    s = s.split('')
    let u = [...new Set(s)]
    let r = 0

    for (let i = 0, l1 = u.length; i < l1; i++) {
        for (let j = i+1; j < l1; j++) {

            let p = s.filter(c => c === u[i] || c === u[j])
            for (let k = 0, l2 = p.length; k < l2; k++) {
                if (p[k] === p[k+1]) break
                if (!p[k+1]) r = r < l2 ? l2 : r
            }

        }
    }

    return r
}
