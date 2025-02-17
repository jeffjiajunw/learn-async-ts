const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

/**
 * Checks a row for any negative numbers.
 * Returns a promise that resolves when the check is complete.
 */
function checkNegatives(row: number[]): Promise<void> {
    return new Promise((resolve) => {
      // Simulate asynchronous processing using setTimeout
      setTimeout(() => {
        if (row.some(num => num < 0)) {
          console.log('Row with negative:', row);
        }
        resolve();
      }, 0);
    });
  }
  
  const checkPromises: Promise<void>[] = [];

  for (const row of array2D_3) {
    checkPromises.push(checkNegatives(row));
  }  
  Promise.all(checkPromises)
    .then(() => console.log('Finished.'));
  