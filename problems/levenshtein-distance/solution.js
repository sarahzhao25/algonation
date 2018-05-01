function levenshteinDistance(str1, str2) {
  // Write your code here.
  //you want to create a matrix with your two strings
  //with the strings, you want to create your base case
  //then you want to add on - if it's the same, then you take its diagonal b.c it's as though neither of them are there. if it's different, then you take the minimum + 1 because you now have a substitution.
  let arr = new Array(str2.length + 1).fill(0);
  let matrix = [];
  for (let i = 0; i <= str1.length; i++) {
    //create a matrix of str2 + 1 columns and str1 + 1 rows
    matrix.push(arr.slice());
  }

  //create the matrix base case for each column
  for (let i = 0; i <= str2.length; i++) {
    matrix[0][i] = i;
  }
  // create the matrix base case for each row
  for (let i = 0; i <= str1.length; i++) {
    matrix[i][0] = i;
  }

  //perform the check; i is the column, j is the row
  for (let j = 1; j <= str1.length; j++) {
    for (let i = 1; i <= str2.length; i++) {
      if (str2[i - 1] === str1[j - 1]) matrix[j][i] = matrix[j - 1][i - 1];
      else matrix[j][i] = Math.min(matrix[j - 1][i - 1], matrix[j][i - 1], matrix[j - 1][i]) + 1;
    }
  }
  return matrix[str1.length][str2.length];
}
