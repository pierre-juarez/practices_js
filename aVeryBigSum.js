/**
 * Description of the problem:
 In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.

  Function Description

  Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

  aVeryBigSum has the following parameter(s):

  int ar[n]: an array of integers .
  Return

  long: the sum of all array elements
  Input Format

  The first line of the input consists of an integer .
  The next line contains  space-separated integers contained in the array.

  Output Format

  Return the integer sum of the elements in the array.
 */

/**
 * Función que suma los elementos de un array y la retorna
 * @param {array} arr Array de números a sumar
 * @returns La suma de los elementos del array
 */
function aVeryBigSum(arr) {
  let sum = 0;
  for (const e of arr) {
    sum += e;
  }

  return sum;
}

console.log(
  aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
);
