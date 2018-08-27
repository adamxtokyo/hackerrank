
/*
 * Practice > Algorithms > Implementation > Designer PDF Viewer
 * https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
 */

const designerPdfViewer = (h, word) => word.length * Math.max(...word.split('').map(l => h[l.charCodeAt(0) - 97]))
