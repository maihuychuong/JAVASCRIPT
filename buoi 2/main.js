// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = 'Bùi Hiên';
number[2] = true;

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, 'Nguyễn Văn A'];
console.log(myArr);

for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// value = myArr[i]
myArr.forEach((value, index) => {
  if (index === 3) return;
  console.log(value, index);
});

// value = myArr[i]
for (const value of myArr) {
  console.log(value);
}

// Bài 1: Viết function tìm số lớn nhất trong mảng
function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Bài 2: Viết function tìm số nhỏ nhất trong mảng
function findMin(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

// Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function getRemainders(array) {
  let remainders = [];
  for (let i = 0; i < array.length; i++) {
    remainders[i] = array[i] % 2;
  }
  return remainders;
}

// Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
function repeatString(str) {
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += str;
  }
  return result;
}

const srt = 'a';
console.log(repeatString(srt));

// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
function repeatStringWithDash(str) {
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += str;
    if (i < 9) {
      result += '-';
    }
  }
  return result;
}
