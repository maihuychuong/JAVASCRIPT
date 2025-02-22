const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

// Vừa load trang phải gọi API để render danh sách breed
// API : https://dog.ceo/api/breeds/list/all
async function getBreedList() {
  try {
    let res = await axios.get('https://dog.ceo/api/breeds/list/all');
    renderBreed(res.data.message);
  } catch (error) {
    console.error('Lỗi khi lấy danh sách giống chó:', error);
  }
}

// Cách 1: Sử dụng for ... in
function renderBreed(breeds) {
  for (let breed in breeds) {
    let option = document.createElement('option');
    option.value = breed;
    option.textContent = breed;
    select.appendChild(option);
  }
}

// // Cách 2 : Lấy ra danh sách keys của objec (Object.keys) => Duyệt mảng
// function renderBreed(breeds) {
//   let breedNames = Object.keys(breeds); // Lấy danh sách tên giống chó
//   breedNames.forEach((breed) => {
//     let option = document.createElement('option');
//     option.value = breed;
//     option.textContent = breed;
//     select.appendChild(option);
//   });
// }

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

getBreedList();

btn.addEventListener('click', fetchImage);
