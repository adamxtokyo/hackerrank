
/*
 * Practice > Algorithms > Warmup > Compare the Triplets
 * https://www.hackerrank.com/challenges/compare-the-triplets/problem
 */

const solve = (a0, a1, a2, b0, b1, b2) => {
    let a_score = 0;
    let b_score = 0;

    const give_points = (a, b) => {
        if (a > b) a_score++;
        if (a < b) b_score++;
    }

    give_points(a0, b0);
    give_points(a1, b1);
    give_points(a2, b2);

    return [a_score, b_score];
}
