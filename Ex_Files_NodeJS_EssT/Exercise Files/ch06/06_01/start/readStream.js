const fs = require("fs");

const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

console.log("type something...");
process.stdin.on("data", data => {
  console.log(`I read ${data.length - 1} characters of text`);
});

readStream.once("data", data =>{
  console.log(data);
});
