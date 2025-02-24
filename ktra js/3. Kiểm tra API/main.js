const buttons = document.querySelectorAll('button');
const dataList = document.createElement('ul');
document.body.appendChild(dataList);

function fetchData(type) {
  fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then((response) => response.json())
    .then((data) => {
      dataList.innerHTML = '';
      data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.title || item.name;
        dataList.appendChild(li);
      });

      buttons.forEach((btn) => btn.classList.remove('active'));
      document.getElementById(type).classList.add('active');
    })
    .catch((error) => console.error('Error:', error));
}

fetchData('posts');

buttons.forEach((button) => {
  button.addEventListener('click', () => fetchData(button.id));
});
