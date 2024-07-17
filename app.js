

// Berilgan foydalanuvchi ismlari massividan eng uzun ismni toping..



function longestName(arr) {
    arr.sort((a, b) => b.length - a.length);
   return arr[0];
}

const longestName2 = (arr)=> arr.sort((a, b) => b.length - a.length)[0]; 
// console.log(longestName2(["Alice", "Bob", "Christina", "David"])); // "Christina"
// console.log(longestName(["Alice", "Bob", "Christina", "David"])); // "Christina"


// Berilgan qator ichidagi bir xil belgilarni olib tashlab, yangi qator hosil qiling.

function removeConsecutiveDuplicates(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

const removeConsecutiveDuplicates2 = (str) => str.split('').filter((item, index, arr) => item !== arr[index + 1]).join('');
// console.log(removeConsecutiveDuplicates2("aabbcc")); // "abc"
// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"

// Berilgan massivning elementlarini k qadamga o'ngga ko'chiring.

function rotateArray(arr, k) {
  let result = [];
    for (let i = 0; i < arr.length; i++) {
        result[(i + k) % arr.length] = arr[i];
    }
    return result;
}

const rotateArray2 = (arr, k) => arr.slice(k).concat(arr.slice(0, k));
// console.log(rotateArray2([1, 2, 3, 4, 5], 1)); // [5, 1, 2, 3, 4]

// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]


// Berilgan ikki o'lchamli massivni bitta tekis qatorga aylantiring.



function flattenArray(arr) {
    return arr.flat();
}
const flattenArray2 = (arr) => arr.flat();
// console.log(flattenArray2([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
// console.log(flattenArray([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]



// Berilgan son n uchun n x n ko'paytirish jadvali yaratish.


function multiplicationTable(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        let row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        result.push(row);
    }
    return result;
}

const multiplicationTable2 = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i + 1) * (j + 1)));
// console.log(multiplicationTable2(3));

// console.log(multiplicationTable(3));
// [
//   [1, 2, 3],
//   [2, 4, 6],
//   [3, 6, 9]
// ]



// Berilgan massivni ikkita teng qismga ajrating. Agar massivning uzunligi toq bo'lsa, markaziy elementni ikkinchi qismga qo'shing.



function splitArrayInHalf(arr) {
    let mid = Math.floor(arr.length / 2);
    let firs = arr.slice(0, mid);
    let secon = arr.slice(mid);
    return [firs, secon];
}


// console.log(splitArrayInHalf([1, 2, 3, 4, 5])); // [[1, 2, 3], [4, 5]]
// console.log(splitArrayInHalf([1, 2, 3, 4]));    // [[1, 2], [3, 4]]\



// Berilgan kvadrat matritsaning asosiy va yordamchi diagonallarini almashtiring.



function swapDiagonals(matrix) {
    let n = matrix.length;
    for (let i = 0; i < n; i++) {
        let temp = matrix[i][i];
        matrix[i][i] = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = temp;
    }
    return matrix;
 }

 
//  console.log(swapDiagonals([[1, 2, 3],[4, 5, 6],[7, 8, 9]]));
 // [
 //   [3, 2, 1],
 //   [4, 5, 6],
 //   [9, 8, 7]
 // ]


//  Berilgan massivdagi barcha elementlarning eng katta umumiy bo'luvchisini toping.


function findGCD(arr) {
    let gcd = arr[0];
    for (let i = 1; i < arr.length; i++) {
        while (arr[i] % gcd !== 0) {
            gcd = arr[i] % gcd;
        }
    }
    return gcd;
}
const findGCD2 = (arr) => arr.reduce((a, b) => (b === 0 ? a : findGCD2([b, a % b])));
// console.log(findGCD2([24, 36, 48])); // 12
// console.log(findGCD([24, 36, 48])); // 12
// console.log(findGCD([7, 14, 21]));  // 7