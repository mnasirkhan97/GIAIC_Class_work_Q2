//====> Momoization 

const memo = {};

function fibonacci(n) {
    if (n <= 1) return n; // Base case
    if (memo[n]) return memo[n]; // Check if already calculated
    memo[n] = fibonacci(n - 1) + fibonacci(n - 2); // Calculate and store
    return memo[n];
}


//====> Data fetching 
    
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();
