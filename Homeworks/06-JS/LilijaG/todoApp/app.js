const taskAdder = document.querySelector('.taskAdder');
const myTasks = document.querySelector('.myTasks');
const tasks = JSON.parse(localStorage.getItem('taskList')) || []; // массив задач

taskAdder.addEventListener('submit', addTask);
myTasks.addEventListener('click', toggleDone);

renderTask();

function addTask(e) {
    e.preventDefault();                                                // приостанавливаем дефолтное действие броузера
    const textTask = this.querySelector('[name=task]').value;              // необходимо получить значение из нашего инпута, сохраняем в textTask
    const task = {                                                         // объект, сохраняет задачу и его начальное состояние
        textTask,
        done: false
    }
    tasks.push(task);                                                      // добавляем задачу к задачам
    saveToLocalStorage();                                                  // сохранить в локальном хранилище
    renderTask();                                                          // вывести на экран 

    this.reset();                                                          // устанавливает дефолтное состояние textTask 
                                                                           // (this.querySelector('[name=task]').value = '';)
}

function renderTask() {                                                    // проходит по всем данным и выводит на экран
    let html = tasks.map(function (data, i) {                              // map пробегает по всем элементам массива
                                                                           // можно заменить: let html = tasks.map(renderItem(item));

        let myClass = data.done ? 'done' : '';                             // аналогично:      = i < 0 ? true : false (true=done,false='')
                                                                           // if (data.done === "done") {             
                                                                           //   myClass = 'done'
                                                                           // } else {
                                                                           //   myClass = ''
                                                                           // }

        return `<li data-index='${i}'>                                
                    <div class="${myClass}">
                        ${data.textTask}<span class="remove">❌</span>
                    </div>
                </li>`;
    })
    myTasks.innerHTML = html.join('');                                      // join указывает на последовательность, друг за другом
}

function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(tasks));
}

function toggleDone(e) {
    const myEl = e.target;                                              // target - получаем сам элемент, на который мы нажали
    const mySel = myEl.parentElement;                                       // <li data-index='${i}'>
    if (myEl.className === 'remove') {                                      // проверяем, удаленный элемент
        let index = mySel.parentElement.dataset.index;
        let temp = tasks.splice(index, 1);                                  // функция splice по индексу удаляет элемент массива                     
        console.log(temp);
    } else {
        myEl.classList.toggle('done');                                      // или выполненный
        tasks[mySel.dataset.index].done = !tasks[mySel.dataset.index].done; // ! - меняет значение на противоположное
    }
    saveToLocalStorage();
    renderTask();
}