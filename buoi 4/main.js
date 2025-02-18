// C1: HTML-attribute
const sayHello = () => {
  alert('Xin chào các bạn 1');
};

// C2: DOM property
const btn2 = document.getElementById('btn2');
// btn2.onclick = () => {
//   alert('Xin chào các bạn 2');
// };

const sayHello2 = () => {
  alert('Xin chào các bạn 2');
};
btn2.onclick = sayHello2;

// C3: addEventListener
const btn3 = document.getElementById('btn3');
// btn3.addEventListener('click', () => {
//   alert('Xin chào các bạn 3');
// });

const sayHello3 = () => {
  alert('Xin chào các bạn 3');
};
btn3.addEventListener('click', sayHello3);

// Yêu cầu 1: Thay đổi nội dung khi nhấn nút "Change content"
function changeContent() {
  const quotes = [
    'Hãy sống như thể bạn chỉ còn một ngày để sống.',
    'Không có gì là không thể, chính từ đó đã nói lên điều đó.',
    'Thành công là khi bạn đứng lên nhiều hơn số lần vấp ngã.',
    'Mỗi ngày là một cơ hội để thay đổi cuộc đời bạn.',
    'Sự kiên trì chính là chìa khóa của thành công.',
  ];
  document.getElementById('text').innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('btn-1').setAttribute('onclick', 'changeContent()');

// Yêu cầu 2: Thay đổi màu chữ khi nhấn nút "Change color"
function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.getElementById('btn-2').onclick = function () {
  document.getElementById('text').style.color = getRandomHexColor();
};

// Yêu cầu 3: Thay đổi màu nền khi nhấn nút "Change background"
function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('btn-3').addEventListener('click', function () {
  document.getElementById('text').style.backgroundColor = getRandomRgbColor();
});
