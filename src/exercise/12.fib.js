/**
 * Calculates the nth Fibonacci number using memoized recursion.
 * @param {number} n - The position in the Fibonacci sequence (must be non-negative integer)
 * @param {Object} memo - Cache object for storing previously calculated values
 * @returns {number} The nth Fibonacci number
 * @throws {Error} If n is negative or not an integer
 */
function fibonacci(n, memo = {}) { // ES6

    // if (!memo) {
    //     memo = {}; // Dictionary
    // }
    // Input validation
    if (!Number.isInteger(n)) {
        throw new Error('Input must be an integer');
    }
    if (n < 0) {
        throw new Error('Input must be non-negative');
    }
    if (n > 1000) {
        return fibonacciIterative(n); // Use iterative approach for very large numbers
    }

    if (n < 2) {
        return n;
    }

    if (memo[n] !== undefined) {
        return memo[n];
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

/**
 * Calculates the nth Fibonacci number using an iterative approach.
 * This is more efficient for very large numbers as it avoids stack overflow.
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} The nth Fibonacci number
 */
function fibonacciIterative(n) {
    if (n < 2) return n;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        const next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}


// Test cases
console.log('F(0):', fibonacci(0));  // Should be 0
console.log('F(1):', fibonacci(1));  // Should be 1
console.log('F(5):', fibonacci(5));  // Should be 5
console.log('F(10):', fibonacci(10)); // Should be 55
console.log('F(50):', fibonacci(100)); // Should be 12586269025
// console.log('F(1000):', fibonacci(1000)); // Should work without stack overflow 