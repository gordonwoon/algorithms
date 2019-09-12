const testCapicity = arrayOfNumbers => {
  let total = 0;
  let segmentSum = 0;
  let segmentHigh = 0;
  arrayOfNumbers.forEach(n => {
    if (segmentHigh <= n) {
      segmentHigh = n;
      total += segmentSum;
      segmentSum = 0;
    }
    else if (n == 0) {
      segmentHigh = 0;
      segmentSum = 0;
    }
    else {
      segmentSum += (segmentHigh - n);
    }
  })

  return total;
}