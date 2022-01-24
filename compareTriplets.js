/**
 * Descripción problem: 
Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
 */

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
/**
 * Función que compara los tripletes de la suma de Bob y Alice
 * @param {array} a Puntaje de Alice
 * @param {array} b Puntaje de Bob
 * @returns {array} Puntajes de Alice y Bob sumados en un array
 */
function compareTriplets(a, b) {
  // Write your code here
  let pA = 0,
    pB = 0;

  for (let i = 0; i < a.length; i++) {
    const elementA = a[i],
      elementB = b[i];

    if (elementA > elementB) {
      pA += 1;
    } else if (elementA < elementB) {
      pB += 1;
    }
  }

  return [pA, pB];
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
