import './style.css';

// declear global variable
const todoTask = [
  { description: 'First, wake-up', completed: false, index: 0 },
  { description: 'Second, do exercise', completed: false, index: 1 },
  { description: 'Third, say a prayer', completed: false, index: 2 },
  { description: 'Fourth, bath yourself', completed: false, index: 3 },
  { description: 'Fifth, wear a cloth', completed: false, index: 4 },
];

const divBox = document.createElement('div');
const list = document.querySelector('#list');

for (let i = 0; i < todoTask.length; i += 1) {
  divBox.innerHTML += `
      <li class="activity" completed = ${todoTask[i].completed} index = ${todoTask[i].index}>
        <input type="checkbox" class="checkbox">
        <p class= 'toDo' contenteditable="true">${todoTask[i].description}</p>
        <a class="move">
          <span class="material-icons-outlined">more_vert</span>
        </a>
        <a class="delete hide">
          <span class="material-icons-outlined">delete</span>
        </a>
      </li>
    `;
  list.appendChild(divBox);
}
