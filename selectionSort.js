const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};

console.log(selectionSort([5, 2, 1, 3]));
console.log(selectionSort([2, 1]));
console.log(selectionSort([1]));
