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
