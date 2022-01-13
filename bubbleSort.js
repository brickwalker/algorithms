
const selectionSort = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j + 1] < array[j]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(selectionSort([5, 2, 1, 3]));
console.log(selectionSort([2, 1]));
console.log(selectionSort([1]));