// console.log(process.argv) <- This is used to print all arguments passed to the program via the console
const sum = process.argv.slice(2, process.argv.length).map(num => +num).reduce((sum, num) => sum + num);

console.log(sum);