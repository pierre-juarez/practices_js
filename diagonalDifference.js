/***
 * Description of the problem:
 
  Given a square matrix, calculate the absolute difference between the sums of its diagonals.

  For example, the square matrix  is shown below:

  1 2 3
  4 5 6
  9 8 9  
  The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

  Function description

  Complete the  function in the editor below.

  diagonalDifference takes the following parameter:

  int arr[n][m]: an array of integers
  Return

  int: the absolute diagonal difference
  Input Format

  The first line contains a single integer, , the number of rows and columns in the square matrix .
  Each of the next  lines describes a row, , and consists of  space-separated integers .

  Constraints

  Output Format

  Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

  Sample Input

  3
  11 2 4
  4 5 6
  10 8 -12
  Sample Output

  15
 
 */

/**
 * Función que retorna la diferencia absoluta de la matriz enviada.
 * @param  {...any} arr Matriz de elementos
 * @returns Diferencia absoluta de las diagonales 1 y 2, respectivamente.
 */
function diagonalDifference(...arr) {
  /** Con el símbolo spreedOperator espera recibir "n" argumentos */
  let d1 = 0,
    d2 = 0;
  for (let i = 0; i < arr.length; i++) {
    d1 += arr[i][i];
    d2 += arr[arr.length - i - 1][i];
  }
  return Math.abs(d1 - d2);
}

console.log(diagonalDifference([11, 2, 4], [4, 5, 6], [10, 8, -12]));
