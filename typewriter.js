const sentence = "hello there from lighthouse labs";
const delay = 500;
let delaySum = 1000

for (const char of sentence) {
  // use process.stdout.write to remove any formatting from console.log
  setTimeout(() => {
    // print the char here
    process.stdout.write(char)
    
  }, delaySum) // <= 1s delay to make it noticeable.
  delaySum += delay;
}