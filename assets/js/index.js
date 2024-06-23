const countPeople = document.getElementById('count-people');
const addBtn = document.getElementById('add-btn');

let count = 0;
addBtn.addEventListener('click', () => {
  count += 1;
  countPeople.innerText = count;
});
