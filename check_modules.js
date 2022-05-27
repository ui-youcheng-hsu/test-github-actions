import fs from "fs";

try {
  console.log(fs.readdirSync("./node_modules"));
} catch {
  console.log("no such dir");
}
