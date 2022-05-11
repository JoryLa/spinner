
const spinArray = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
let numOfSeconds = 200;
for (let symbs of spinArray) {
  setTimeout(() => {
    process.stdout.write(symbs);
  }, numOfSeconds);
  numOfSeconds += 500;
};


