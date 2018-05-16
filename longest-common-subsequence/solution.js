function longestCommonSubsequence(str1, str2) {
  const matrix = new Array(str1.length+1);
  //build a matrix with str1.length + 1 rows and str2.length + 1 columns
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(str2.length+1);
    //fill col 1 with ""
    matrix[i][0] = "";
  }

  for (let j = 0; j <= str2.length+1; j++) {
    //fill row 1 with ""
    matrix[0][j] = "";
  }

  //for each row i
  for (let i = 1; i <= str1.length; i++) {
    //run through all the columns j
    for (let j = 1; j <= str2.length; j++) {
      console.log(str1[i - 1], str2[j - 1])
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i-1][j-1] + str1[i-1];
      }
      else {
        matrix[i][j] = (matrix[i-1][j]).length > (matrix[i][j-1]).length ? matrix[i-1][j] : matrix[i][j-1];
      }
    }
  }
  return matrix[str1.length][str2.length].split('');
}
