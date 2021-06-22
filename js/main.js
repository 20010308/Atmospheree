

// Clock
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();

if(min < 10) min = '0'+ min;
if(hour < 10) hour = '0'+ hour;
document.getElementById('hour').innerHTML = hour;
document.getElementById('minut').innerHTML = min;



// Задачи на день
let todolist = [];

function drawpage(){
    let result = "";
    for(let i = 0; i < todolist.length; i++){
        result += "<div class='tasks'> <div><input type='checkbox' > <span>"+ todolist[i] +"</span></div> <div class='task-close' onclick='deleteTask("+ i +")'>&times;</div></div>"
    }
    document.getElementById("todolist").innerHTML = result;
}

function AddTodo(){
    let task = document.getElementById('todolist_input').value;
    if(task.length > 0)
    todolist.push(task);
    document.getElementById('todolist_input').value = '';
    drawpage();
}

function deleteTask(index) {
    todolist.splice(index, 1);
    drawpage();
}



// События

let byTimeToDo = [];

function drawByTime(){
    let result1 = "";
    let starting = document.getElementById('start-time');
    let ending = document.getElementById('end-time');
    for(let i = 0; i < byTimeToDo.length; i++){
        result1 += "<div class='tasks'> <div> <span>" + starting.value + ' ' + ending.value + ' ' + byTimeToDo[i] +"</span></div> <div class='task-close' onclick='deleteByTimeTask("+ i +")'>&times;</div></div>"
    }
    
        document.getElementById("todolist-date").innerHTML = result1 ;
  
starting.value = '';
ending.value = '';
}

function AddByTimeList(){
    let task = document.getElementById('bytime').value;
    if(task.length > 0)
    byTimeToDo.push(task);
    document.getElementById('bytime').value = '';
    drawByTime();
}

function deleteByTimeTask(index) {
    console.log(index);
    byTimeToDo.splice(index, 1);
    drawByTime();
}
