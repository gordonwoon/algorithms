const search = (arr, value) => {
  if (arr.length < 1) {
    return -1
  }
  let middle = Math.floor(arr.length/2);
  if (arr[middle] === value) {
    return middle;
  }
  else if (arr[middle] < value) {
    return search(arr.slice(middle+1), value);
  }
  else {
    return search(arr.slice(0, middle), value);
  }
}
