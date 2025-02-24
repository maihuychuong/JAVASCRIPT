/*
1. API là gì
API (Application Programming Interface)
Thành phần trung gian dùng để giao tiếp giữa những ứng dụng hoặc các dịch vụ trong ứng dụng

Khách hàng: Client - Gửi yếu cầu
Nhân viên: Trung gian, gửi yêu câu, nhận keeys quả (API)
Nhà bếp: Server - Xử lý yêu cầu

2. Cấu tạo của 1 API gồm những gì
API URL: Đường dẫn API
Http method: Hành động tác động lên tài nguyên (resourse): GET, POST, PUT, PATCH, DELETE - CURD
http status code: Trạng thái response: 1x, 2x, 3x, 4x, 5x
Request: Chứa các thông tin yêu cầu
    - Headers: Thông tin về request
    - Body: Thông tin gửi kèm theo
Response: Chứa các thông tin trả về
    - Headers: Thông tin về response
    - Body: Thông tin trả về
*/

// https://dog.ceo/api/breeds/image/random
const btn = document.getElementById('btn');
const image = document.getElementById('image');

// C1: Sử dụng build-in fetch trong js
// C1.1: Sử dụng promise
btn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
    console.log(response);
    return response.json();
  });
});

// C1.2: Sử dụng Asyns await
