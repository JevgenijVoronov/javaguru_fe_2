// let tasks = ["item1", "item2", "item3"];
// function displayTasks() {
//     let item = document.createElement("div")
//     item.textContent = "item1"
//     let container = document.getElementById("myText")
//     container.appendChild(item)
// }

// var x
let tasks = [];
function displayItems() {
    var display = document.getElementById("main")
    display.innerHTML = ""
    for (let i = 0; i < tasks.length; i++) {
        //   display.innerHTML = tasks.name[i]
        console.log(tasks[i].name)
        let a = document.createElement("div")
        a.innerHTML = tasks[i].name;
        display.appendChild(a);

    }
}


function newTask() {
    var input = document.getElementById("myText");
    // инпут 
    console.log("newTask", input);
    if (input.value !== "") {
        const task = {
            name: input.value,
            done: false,
        }
        tasks.push(task);
        console.log("tasks", tasks);
        input.value = ""
        tasks[0]
        displayItems()
    }
}

