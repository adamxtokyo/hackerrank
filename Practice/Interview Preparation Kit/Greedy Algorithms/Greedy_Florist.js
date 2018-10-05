
/*
 * Practice > Interview Preparation Kit > Greedy Algorithms > Greedy Florist
 * https://www.hackerrank.com/challenges/greedy-florist/problem
 */

function getMinimumCost (k, c) {

    // Create a 2D array holding purchase order for each friend
    let purchases = new Array(k).fill(0).map(x => [])

    // Sort flowers from most expensive to cheapest
    c.sort((a,b) => b-a)

    // Distribute purchases evenly between friends
    for (let i = 0, l = c.length; i < l; i++) purchases[i%k].push(c[i])

    // Calculate and return sum of all purchases
    return purchases.reduce( (total_cost, friend_total) => {
        return total_cost + friend_total.reduce( (total, cost, i) => {
            return total + (i + 1) * cost
        }, 0)
    }, 0)
}
