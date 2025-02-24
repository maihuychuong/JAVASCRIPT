const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

// Gọi API để lấy danh sách giống loài ngay khi tải trang
async function getBreedList() {
  try {
    let res = await axios.get('https://dog.ceo/api/breeds/list/all');
    renderBreed(res.data.message);
  } catch (error) {
    console.error('Lỗi khi lấy danh sách giống chó:', error);
  }
}

// Hiển thị danh sách giống chó lên giao diện
function renderBreed(breeds) {
  for (let breed in breeds) {
    // Duyệt qua object bằng for...in
    let option = document.createElement('option');
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  }
  //   breedNames.forEach((breed) => {
  //     let option = document.createElement('option');
  //     option.value = breed;
  //     option.textContent = breed;
  //     select.appendChild(option);
  //   });
}

// Gọi API để lấy ảnh của giống chó được chọn
async function fetchImage() {
  let breed = select.value;
  if (!breed) return;

  try {
    let res = await axios.get(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
    image.src = res.data.message;
  } catch (error) {
    console.error('Lỗi khi lấy ảnh chó:', error);
  }
}

// Gọi API để lấy danh sách breed khi tải trang
getBreedList();

// Bắt sự kiện khi nhấn nút Fetch
btn.addEventListener('click', fetchImage);
