
/*
 * Practice > Interview Preparation Kit > Arrays > New Year Chaos
 * https://www.hackerrank.com/challenges/new-year-chaos/problem
 */

function minimumBribes (q) {
    let bribes = 0

    for (let i = q.length - 1; i >= 0; i--) {
        if (q[i] - i - 1 > 2) return 'Too chaotic'

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) bribes++
        }
    }

    return bribes
}
