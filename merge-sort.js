const merge = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  return sort(merge(arr.slice(0, arr.length/2)), merge(arr.slice(arr.length/2, arr.length)))
}

const sort = (leftArr, rightArr) => {
  let result = [];
  while (leftArr.length !== 0 && rightArr.length !== 0) {
    if (leftArr[0] < rightArr[0]) {
      result.push(leftArr.shift());
    }
    else {
      result.push(rightArr.shift());
    }
  }
  return result.concat(leftArr, rightArr);
}
