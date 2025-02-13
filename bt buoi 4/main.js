// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 5 ký tự trong đoạn văn (background = “yellow”)
const p = document.querySelector('p');
const words = p.innerHTML.split(/\s+/);
const highlightedText = words
  .map((word) =>
    word.length >= 5
      ? `<span style="background-color: yellow">${word}</span>`
      : word
  )
  .join(' ');
p.innerHTML = highlightedText;

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
const a = document.createElement('a');
a.href = 'https://www.facebook.com/';
a.innerHTML = 'Facebook';
document.body.appendChild(a);

// Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const div = document.createElement('div');
div.textContent = `Số từ trong đoạn văn: ${words.length}`;
document.body.appendChild(div);

// Thay thế ký hiệu (, - dấu phẩy) => 🤔 và (. - dấu chấm) => 😲
const newp = document.createElement('p');
newp.innerHTML = p.innerHTML.replace(/,/g, '🤔').replace(/\./g, '😲');
p.parentNode.replaceChild(newp, p);
