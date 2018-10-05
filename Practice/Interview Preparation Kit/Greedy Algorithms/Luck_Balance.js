
/*
 * Practice > Interview Preparation Kit > Greedy Algorithms > Luck Balance
 * https://www.hackerrank.com/challenges/luck-balance/problem
 */

function luckBalance (k, contests) {

    let max_luck = 0

    let important = contests.reduce( (arr, contest) => {
        let [luck, important] = [...contest]
        if (important) return [...arr, luck]
        max_luck += luck
        return arr
    }, []).sort((a,b) => b-a)

    max_luck += important.slice(0, k).reduce((total,luck) => total+luck, 0)
    max_luck -= important.slice(k).reduce((total,luck) => total+luck, 0)

    return max_luck
}
