// Function to check if numbers are odd or even using rest parameters
function checkOddEven(...numbers) {
    return numbers.map(num => (num % 2 === 0 ? 'even' : 'odd'));
}
console.log(checkOddEven(1, 2, 3, 4, 5));  // Output: ['odd', 'even', 'odd', 'even', 'odd']