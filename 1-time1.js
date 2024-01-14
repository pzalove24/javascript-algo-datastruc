function summation1(n) {
    total = 0;
    for (i=1; i<=n; i++) {
        total += i;
    }
    return total;
}

n=300_000_000
console.time()
summation1(n)
console.timeEnd()