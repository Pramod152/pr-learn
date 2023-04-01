const { timeLog } = require("console");
const fs = require("fs").promises;
const http = require("http");
const { Readline } = require("node:readline/promises");
const sum = require("./sum");

// console.log(sum(2, 3));
// console.log(sum(2, 7));
/*
const temp = fs.readFileSync(`${__dirname}/templates/index.html`, "utf-8");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/pramod") {
    res.writeHead(200, { "Content-type": "text/html" });
    // res.write("hey");
    res.end(temp);
  } else {
    res.end("This page is not available");
  }
});

server.listen(8000, "127.0.0.1", (err) => {
  console.log("The server is listening to port 3000");
});

//Async Practice

async function readFile() {
  try {
    const data = await fs.readFile("./data/newFile.txt", "utf-8");
    console.log(data);
  } catch (err) {
    // console.log(err);
    throw err;
  }
}
readFile();

console.log("hehe i think i am getting used to async");

(() => {
  // console.log("hey");
})();

const data = setTimeout(() => {
  console.log("hey this is set timeout function");
}, 1000);

async function pramod() {
  const data = await fs.readFile();
}
*/
