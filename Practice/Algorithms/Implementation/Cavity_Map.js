
/*
 * Practice > Algorithms > Implementation > Cavity Map
 * https://www.hackerrank.com/challenges/cavity-map/problem
 */

function cavityMap (g) {

    let c = g.slice()

    for (let y = 1, ly = g.length-1; y < ly; y++) {
        for (let x = 1, lx = g[y].length-1; x < lx; x++) {
            if ([g[y-1][x], g[y][x+1], g[y+1][x], g[y][x-1]].every(t => c[y][x] > t)) {
                c[y] = c[y].slice(0, x)+'X'+c[y].slice(x+1)
            }
        }
    }

    return c
}
