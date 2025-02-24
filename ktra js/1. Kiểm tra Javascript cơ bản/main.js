// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function stringWithMaxLength(arr) {
  let maxLength = 0;
  let result = [];

  for (let str of arr) {
    if (str.length > maxLength) {
      maxLength = str.length;
      result = [str];
    } else if (str.length === maxLength) {
      result.push(str);
    }
  }

  return result;
}

// Bài 2:
const users = [
  { name: 'Bùi Công Sơn', age: 30, isStatus: true },
  { name: 'Nguyễn Thu Hằng', age: 27, isStatus: false },
  { name: 'Phạm Văn Dũng', age: 20, isStatus: false },
];

// Lọc user có tuổi > 25 và isStatus = true
function filterUser(arr) {
  return arr.filter((user) => user.age > 25 && user.isStatus);
}

// Sắp xếp user theo tuổi tăng dần
function sortByAge(arr) {
  return arr.slice().sort((a, b) => a.age - b.age);
}

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function count(arr) {
  let result = {};

  for (let item of arr) {
    result[item] = (result[item] || 0) + 1;
  }

  return result;
}
