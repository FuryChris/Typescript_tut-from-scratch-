function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// function types!!
let combineValues: (a: number, b: number) => number;
combineValues = add;

console.log(combineValues(16, 16));

addAndHandle(10, 20, (result) => {
  console.log("callbac..." + result);
});
