const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  let swapIndex = pivotIndex;
  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }
  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

const quickSort = (array, startIndex = 0, endIndex = array.length - 1) => {
  if (startIndex < endIndex) {
    const myPivot = pivot(array, startIndex, endIndex);
    quickSort(array, startIndex, myPivot - 1);
    quickSort(array, myPivot + 1, endIndex);
  }
  return array;
};

const ar = [5, 6, 7, 4, 3];
console.log(quickSort(ar));
