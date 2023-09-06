// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]

const { number } = require("yargs");

function sortReverse(arrayNum) {
  for (let i = 0; i < arrayNum.length; i++) {
    for (let j = 0; j < arrayNum.length - i - 1; j++) {
      if (arrayNum[j] < arrayNum[j + 1]) {
        let temp = arrayNum[j];
        arrayNum[j] = arrayNum[j + 1];
        arrayNum[j + 1] = temp;
      }
    }
  }
  return arrayNum;
}

// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1

function maxSubarray(arrayNum, maxLen) {
  let result = null;
  let temp = null;

  for (let i = 0; i < arrayNum.length; i++) {
    if (i < maxLen) {
      temp += arrayNum[i];
      continue;
    }

    if (result === null) {
      result = temp;
    }

    temp = temp - arrayNum[i - maxLen] + arrayNum[i];
    result = Math.max(result, temp);
  }

  return result;
}

// 3. Buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek
// Input :
// {
//   outer: 2,
//   obj: {
//     inner: 2,
//     otherObj: {
//       superInner: 2,
//       notANumber: true,
//       alsoNotANumber: "yup"
//     }
//   }
// }
// Output: 6

// Input:
// {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 4}, ee: 'car'}
// };
// Output: 12

function sumNested(obj) {
  let result = 0;
  for (let key in obj) {
    const value = obj[key];

    if (typeof value === "number" && value % 2 === 0) {
      result += value;
      continue;
    }

    if (typeof value === "object") {
      result += sumNested(value);
    }
  }
  return result;
}

module.exports = { sortReverse, maxSubarray, sumNested };
