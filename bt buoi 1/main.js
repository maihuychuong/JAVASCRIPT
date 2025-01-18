// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
function calculateFactorial(n) {
  if (n < 0) return 'Số phải là số nguyên dương';
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(calculateFactorial(5));

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('maihuychuong'));

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
function translate(countryCode) {
  let message;
  switch (countryCode.toUpperCase()) {
    case 'VN':
      message = 'Xin chào';
      break;
    case 'EN':
      message = 'Hello';
      break;
    case 'FR':
      message = 'Bonjour';
      break;
    case 'ES':
      message = 'Hola';
      break;
    case 'JP':
      message = 'こんにちは (Konnichiwa)';
      break;
    case 'KR':
      message = '안녕하세요 (Annyeonghaseyo)';
      break;
    default:
      message = 'Mã quốc gia không hợp lệ.';
  }
  return message;
}

console.log(translate('VN'));
console.log(translate('EN'));
console.log(translate('JP'));
console.log(translate('KR'));

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
function subString(str) {
  if (str.length <= 15) {
    return 'Độ dài của chuỗi phải nhiều hơn 15 ký tự';
  }
  return str.slice(0, 10) + '...';
}

const result = subString('dfgdfgfdeegfdgd3');
console.log(result);
