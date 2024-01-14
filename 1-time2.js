function summation2(n) {
    return (n*(n+1))/2;
}

n=300_000_000
console.time()
summation2(n)
console.timeEnd()