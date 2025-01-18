console.log('Hello world');

document.write('Hello world');

let name;
console.log(typeof name);
name = 'Chương';
console.log(typeof name);
name = 12;
console.log(typeof name);

let age = 22;

// Template string
let fullname = 'Chương';
let year = 2003;

console.log(
  `Xin chào các bạn, mình tên là ${fullname}. Năm nay ${2025 - year} tuổi`
);

// Function
// C1: Regular function
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));

// C2: Function expression
const sum1 = function (a, b) {
  return a + b;
};
console.log(sum1(3, 6));

// C3: Arrow function (ES6)
// Default parameter
const sum2 = (a = 100, b = 200) => {
  console.log(a, b);
  return a + b;
};

// const sum2 = (a, b) => a + b;
console.log(sum2(50));
