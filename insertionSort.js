const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const temp = array[i];
    let j;
    for (j = i - 1; array[j] > temp && j > -1; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
};

console.log(insertionSort([5, 2, 1, 3]));
console.log(insertionSort([2, 1]));
console.log(insertionSort([1]));