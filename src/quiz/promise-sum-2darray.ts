/**
 * Computes the sum of the numbers in a single row.
 */
function sumRow(row: number[]): Promise<number> {
    return new Promise((resolve) => {
      let rowSum = 0;
      for (let i = 0; i < row.length; i++) {
        rowSum += row[i];
      }
      resolve(rowSum);
    });
  }
  
  /**
   * Computes the total sum of all numbers in a 2D array concurrently.
   */
  async function sum2DArrayConcurrent(arr: number[][]): Promise<number> {
    const rowPromises = arr.map(sumRow);
    
    const rowSums = await Promise.all(rowPromises);
    
    return rowSums.reduce((prev, curr) => prev + curr, 0);
  }
  
  // Example usage:
  const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  sum2DArrayConcurrent(array2D_1)
    .then(totalSum => console.log("Sum:", totalSum))
    .catch(err => console.error("Error:", err));
  