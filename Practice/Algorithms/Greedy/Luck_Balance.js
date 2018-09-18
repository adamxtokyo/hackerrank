
/*
 * Practice > Algorithms > Greedy > Luck Balance
 * https://www.hackerrank.com/challenges/luck-balance/problem
 */

function luckBalance (k, contests) {
    let luck = 0
    let important = contests.reduce( (arr, c) => {
        if (c[1]) return [...arr, c[0]]
        luck += c[0]
        return arr
    }, []).sort((a,b) => b-a)
    luck += important.slice(0, k).reduce((acc,v) => acc+v, 0)
    luck -= important.slice(k).reduce((acc,v) => acc+v, 0)
    return luck
}
