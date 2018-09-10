
/*
 * Practice > Algorithms > Implementation > ACM ICPC Team
 * https://www.hackerrank.com/challenges/acm-icpc-team/problem
 */

function acmTeam (topic) {

    let max = 0
    let count = new Array(topic[0].length+1).fill(0)

    for (let i = 0, l = topic.length; i < l; i++) {
        for (let j = i+1; j < l; j++) {
            let x = topic[i].split('').reduce( (acc, val, id) => acc += val | topic[j][id], 0 )
            max = Math.max(x, max)
            count[x]++
        }
    }

    return [max, count[max]]
}
