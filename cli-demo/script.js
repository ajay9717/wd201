// const args = process.argv;
// const num1 = parseInt(args[2]);
// const num2 = parseInt(args[3]);
// console.log(`The sum is: ${num1 + num2}`);

// console.log('args[0]:', args[0]);
// console.log('args[1]:', args[1]);
// console.log('args[2]:', args[2]);
// console.log('args[3]:', args[3]);

// const args = process.argv;
// const operation = args[2];
// const num1 = parseInt(args[3]);
// const num2 = parseInt(args[4]);

// if (operation === 'add') {
//   console.log(`The result is: ${num1 + num2}`);
// } else if (operation === 'subtract') {
//   console.log(`The result is: ${num1 - num2}`);
// } else if (operation === 'multiply') {
//   console.log(`The result is: ${num1 * num2}`);
// } else {
//   console.log('Unknown operation');
// }

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

// Now we can access our arguments by name
const num1 = parseInt(args.num1);
const num2 = parseInt(args.num2);
const operation = args.operation;

if (operation === 'add') {
  console.log(`The result is: ${num1 + num2}`);
} else if (operation === 'subtract') {
  console.log(`The result is: ${num1 - num2}`);
} else if (operation === 'multiply') {
  console.log(`The result is: ${num1 * num2}`);
} else {
  console.log('Unknown operation');
}