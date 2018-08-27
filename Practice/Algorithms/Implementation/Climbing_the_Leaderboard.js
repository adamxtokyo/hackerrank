
/*
 * Practice > Algorithms > Implementation > Climbing the Leaderboard
 * https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
 */

function climbingLeaderboard (scores, alice) {
    scores = [...new Set(scores)]
    let l = scores.length - 1
    return alice.map(alice_score => {
        for (0; l >= 0; l--) {
            if (scores[l] > alice_score) return l + 2
        }
        return 1
    })
}
