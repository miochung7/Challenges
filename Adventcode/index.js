/*
--- Day 1: Not Quite Lisp ---
Santa was hoping for a white Christmas, but his weather machine's "snow" function is powered by stars, and he's fresh out! To save Christmas, he needs you to collect fifty stars by December 25th.

Collect stars by helping Santa solve puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Here's an easy puzzle to warm you up.

Santa is trying to deliver presents in a large apartment building, but he can't find the right floor - the directions he got are a little confusing. He starts on the ground floor (floor 0) and then follows the instructions one character at a time.

An opening parenthesis, (, means he should go up one floor, and a closing parenthesis, ), means he should go down one floor.

The apartment building is very tall, and the basement is very deep; he will never find the top or bottom floors.

For example:

(()) and ()() both result in floor 0.
((( and (()(()( both result in floor 3.
))((((( also results in floor 3.
()) and ))( both result in floor -1 (the first basement level).
))) and )())()) both result in floor -3.
To what floor do the instructions take Santa?

Your puzzle answer was 74.

--- Part Two ---
Now, given the same instructions, find the position of the first character that causes him to enter the basement (floor -1). The first character in the instructions has position 1, the second character has position 2, and so on.

For example:

) causes him to enter the basement at character position 1.
()()) causes him to enter the basement at character position 5.
What is the position of the character that causes Santa to first enter the basement?

Your puzzle answer was 1795.

*/




// OPTION 1 - question 1

const fs = require('fs');

const INPUT = fs.readFileSync('./input.text', 'utf-8').split('');

// const floorNumber = INPUT.reduce((floor, currVal) => {
// 	return currVal === '(' ? ++floor : --floor;
// }, 0);
// console.log('Destination floor', floorNumber);

// OPTION 1 - question 2
let floor = 0;
let position = 0;

const findPosition = INPUT.map((currentValue) => {
	if (currentValue === '(') {
		floor += 1;
	} else if (currentValue === ')') {
		floor -= 1;
	}
	return floor;
});

const answer = (number) => number < 0;

console.log(findPosition.findIndex(answer));

// OPTION 2 Question 1 - faster load 1.2 secs

// const floor = () => {
//     fs.readFile('./input.text', (err, data) => {
//         console.time('santa-time');
//         const directions = data.toString();
//         const directionsArray = directions.split('');
//         const answer = directionsArray.reduce((accumulator, currVal) => {
//             if (currVal === '(') {
//                 return accumulator += 1;
//             } else if (currVal === ')') {
//                 return accumulator -= 1;
//             }
//         }, 0);
//         console.timeEnd('santa-time');
//         console.log(answer);
//     })
// }

// floor();

// OPTION 2 - Question 2

// const question2 = () => {
// 	fs.readFile('./input.text', (err, data) => {
// 		const directions = data.toString();
// 		const directionsArray = directions.split('');

// 		let accumulator = 0;
// 		let counter = 0;
// 		const answer = directionsArray.some((currentItem) => {
// 			if (currentItem === '(') {
// 				accumulator += 1;
// 			} else if (currentItem === ')') {
// 				accumulator -= 1;
// 			}
// 			counter++;
// 			return accumulator < 0;
// 		});
// 		console.log(counter);
// 	});
// };

// question2();