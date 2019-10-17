const findDuplicates = (arr1, arr2) => {
  const result = [];
  while (arr1.lenght !== 0 && arr2.length !== 0) {
    if (arr1[0] < arr2[0]) arr1.shift();
    else if (arr2[0] < arr1[0]) arr2.shift();
    else {
      result.push(arr1.shift());
      arr2.shift();
    }
  }
  return result;
};
