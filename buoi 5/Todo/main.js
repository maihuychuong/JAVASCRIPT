const input = document.getElementById('input-todo');
const btn = document.getElementById('btn-add');
const ul = document.querySelector('ul');
let todos = [
  { id: 1, name: 'Đi chơi', status: true },
  { id: 2, name: 'Làm bài tập', status: false },
  { id: 3, name: 'Đá bóng', status: true },
];

const renderToDo = (todos) => {
  if (todos.length === 0) {
    ul.innerHTML = <li>Danh sách công việc trống</li>;
    return;
  }

  let html = '';
  todos.forEach((todo) => {
    html += `
      <li>
        <input type="checkbox" />
        <span class=$(todo.status)>$(todo.name)</span>
        <button>Edit</button>
        <button>Delete</button>
      </li>
    `;
  });
  ul.innerHTML = html;
};
