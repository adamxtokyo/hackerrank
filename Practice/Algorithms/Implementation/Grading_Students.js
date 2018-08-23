
/*
 * Practice > Algorithms > Implementation > Grading Students
 * https://www.hackerrank.com/challenges/grading/problem
 */

const gradingStudents = grades => grades.map( x => x < 38 || x % 5 < 3 ? x : x + 5 - (x % 5) )
