const readline = require("readline");

const fs = require("fs");
const { isUtf8 } = require("buffer");
const { connect } = require("http2");

// to read input from command line

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Please enter your name: ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close(); // Close the readline interface
// });

// rl.on("close", () => {
//   console.log("interface closed");
//   process.exit(0);
// });

// reading files synchrously
// const inputText = fs.readFileSync("./files/input.txt", "utf-8");
// console.log(inputText);
// // witing content on files
// let content = `This is the content from input file: ${inputText}\n,created at ${new Date()}`;
// fs.writeFileSync("./files/output.txt", content);

// reading files asyncrousnly
// using call backs
fs.readFile("./files/input.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("Rading file...");
