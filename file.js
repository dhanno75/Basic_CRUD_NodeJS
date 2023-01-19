const fs = require("fs");

// const quote = "I love this world";

// fs.writeFile("./someFile.html", quote, (err) => {
//   console.log("Completed writing");
// });

const quote2 = "Live more, worry less";
// const [, , n] = process.argv;
// for (let i = 1; i <= n; i++) {
//   fs.writeFile(`./backup/text-${i}`, quote2, (err) => {
//     console.log("Completed writing");
//   });
// }

// Reading
// fs.readFile("./cool373552.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(`❌ ${err}`);
//   }

//   console.log(data);
// });

const quote3 = "Some quote";

// Appending
// fs.appendFile("cool.txt", quote3 + "\n", (err) => {
//   console.log("Completed appending");
// });

// Deleting

fs.unlink("./delete.txt", (err) => {
  console.log("Deleted successfully");
});
