const haveCommonItems = (firstArray, secondArray) => {
  const obj = {};
  for (let i = 0; i < firstArray.length; i++) {
    obj[firstArray[i]] = true;
  }
  for (let j = 0; j < secondArray.length; j++) {
    if (obj[secondArray[j]]) {
      return true;
    }
  }
  return false;
};

let a1 = [1, 3, 5];
let a2 = [2, 4, 5, 8];
console.log(haveCommonItems(a1, a2));

a1 = [1, 3, 5];
a2 = [2, 4, 6, 8];
console.log(haveCommonItems(a1, a2));
