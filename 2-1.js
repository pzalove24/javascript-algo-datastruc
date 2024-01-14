function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

console.log(fibonacci(20))
// O(2^n)