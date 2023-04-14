let arr = [];
let str = "";

while (true) {
  let a = prompt("Enter any number");

  if (a === null) {
    break;
  }

  for (let i = 1; i <= a; i++) {
    if (i % 15 === 0) {
      arr.push("fizzbuzz");
    } 
    else if (i % 3 === 0) {
      arr.push("fizz");
    } 
    else if (i % 5 === 0 ) {
      arr.push("buzz");
    } 
    else {
      arr.push(i);
    }
  }

  str = arr.join(", ");

  console.log(str);

  arr = [];
  str = "";
}