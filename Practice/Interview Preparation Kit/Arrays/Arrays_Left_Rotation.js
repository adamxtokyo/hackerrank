
/*
 * Practice > Interview Preparation Kit > Arrays > Arrays: Left Rotation
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem
 */

const rotLeft = (a, d) => [...a.slice(d), ...a.slice(0, d)]
