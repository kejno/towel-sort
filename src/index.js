
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  let arr1 = []
  for (let i = 0; i < matrix.length; i++) {
    i % 2 == 0 ? arr1.push(...matrix[i]) : arr1.push(...(matrix[i].reverse()))
  }
  return arr1
}
