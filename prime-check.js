function isPrime(n) {
  let count = 1;
  while(++count <= Math.sqrt(n)) {
    console.log('count', count);
    if (n%count === 0) {
      return false;
    }
  }
  return true;
}