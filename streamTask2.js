  const fs = require("fs");


const writeStream = fs.createWriteStream("output.txt");


for (let i = 1; i <= 1000; i++) {
  writeStream.write(`This is line number ${i}\n`);
}

writeStream.end();


writeStream.on("finish", () => {
  console.log("Writing completed successfully.");
});


writeStream.on("error", (err) => {
  console.error("An error occurred:", err.message);
});