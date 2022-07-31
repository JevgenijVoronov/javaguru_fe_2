
const myTasks = document.getElementById('myTasks');
const textTask = document.getElementById('textTask');
const addBtnTask = document.getElementById('addBtnTask');

let taskList = [];

const addTask = () => {

    const task = {
        textTask: textTask.value
    }

    taskList.push(task);
    saveToLocalStorage();
    renderTask();
}

const renderTask = () => {

    // myTasks.innerHTML = textTask.value;

    // let taskToRender = [];

    // непоняттно как вывести

    // taskToRender.push(taskList);
    // myTasks.innerHTML = localStorage.getItem('taskList', JSON.parse(taskToRender));

}

const saveToLocalStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

addBtnTask.addEventListener('click', addTask);
