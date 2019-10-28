function quick(arr) {
  if (arr.length <= 1) return arr;
  let pivot = parseInt(arr.length/2);
  let leftArr = [];
  let rightArr = [];
  arr.forEach((n, i) => {
    if (i === pivot) return;
    if (n <= arr[pivot]) {
      leftArr.push(n);
    } else {
      rightArr.push(n);
    }
  })
  return [].concat(quick(leftArr), arr[pivot], quick(rightArr));
}