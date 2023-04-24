//Create two arrays of numbers called numbers1 and numbers2

const numbers1 = [1, 2, 3, 4]
const numbers2 = [5, 6, 7, 8]

//Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.

let numbers = [...numbers1, ...numbers2];
//console.log(numbers)

//Define an arrow function called square that accepts a number as an argument and returns the square of the number.

let square = x => x * x;
//console.log(square(5))

//Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.

let squares = numbers.map(square) ;
//console.log (squares)

/*Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even,
 otherwise false.*/

 let isEven = x => x % 2 === 0;
 //console.log (isEven(2))

 //Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.

 let evenSquares = squares.filter (x => x % 2 === 0);
 //console.log (evenSquares)

/*Use destructuring assignment to extract the first and second elements of the evenSquares array into constants 
firstEvenSquare and secondEvenSquare.*/

const  [firstEvenSquare , secondEvenSquare] = evenSquares
//console.log (firstEvenSquare,secondEvenSquare)

//Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.

console.log (`The Numbers array is ${numbers}`);
console.log (`The Squares array is ${squares}`);
console.log (`The EvenSquares array is ${evenSquares}`);
console.log (`The Extracted squares array is ${firstEvenSquare}, ${secondEvenSquare}`);