
/*
 * Practice > Algorithms > Greedy > Jim and the Orders
 * https://www.hackerrank.com/challenges/jim-and-the-orders/problem
 */

const jimOrders = orders => orders.map((o,i) => [o[0]+o[1], i+1]).sort((a,b) => a[0]-b[0]).map(o => o[1])
