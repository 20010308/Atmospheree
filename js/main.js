AOS.init();

// Clock
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();

if (min < 10) min = '0' + min;
if (hour < 10) hour = '0' + hour;
document.getElementById('hour').innerHTML = hour;
document.getElementById('minut').innerHTML = min;



// Задачи на день
let todolist = [];

function drawpage() {
    let result = "";
    for (let i = 0; i < todolist.length; i++) {
        result += "<div class='tasks'> <div><input type='checkbox' > <span>" + todolist[i] + "</span></div> <div class='task-close' onclick='deleteTask(" + i + ")'>&times;</div></div>"
    }
    document.getElementById("todolist").innerHTML = result;
}

function AddTodo() {
    let task = document.getElementById('todolist_input').value;
    if (task.length > 0)
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

function drawByTime() {
    let result1 = "";
    let starting = document.getElementById('start-time');
    let ending = document.getElementById('end-time');
    for (let i = 0; i < byTimeToDo.length; i++) {
        result1 += "<div class='tasks'> <div> <span>" + starting.value + ' ' + ending.value + ' ' + byTimeToDo[i] + "</span></div> <div class='task-close' onclick='deleteByTimeTask(" + i + ")'>&times;</div></div>"
    }

    document.getElementById("todolist-date").innerHTML = result1;

    starting.value = '';
    ending.value = '';
}

function AddByTimeList() {
    let task = document.getElementById('bytime').value;
    if (task.length > 0)
        byTimeToDo.push(task);
    document.getElementById('bytime').value = '';
    drawByTime();
}

function deleteByTimeTask(index) {
    console.log(index)
    byTimeToDo.splice(index, 1);
    drawByTime();
}


let workarea_card = [];
function workListFunction() {
    let newCard = {
        cardList: []
    }

    workarea_card.push(newCard);
    addWorkArea();
}
function addWorkArea() {
    let card_area = "";
    for (let i = 0; i < workarea_card.length; i++) {
        let card_area_list = "";
        for (let j = 0; j < workarea_card[i].cardList.length; j++) {
            card_area_list +=
                "<div class='contact__member mt-3'>" +
                "<span class='fas fa-user-circle text-secondary'></span>" +
                "<i class='liner'></i>" +
                "<input type='text' id='contact-" + i + "' placeholder='Имя контакта, телефон или e-mail'>" +
                "<span class='fas fa-search text-secondary'></span>" +
                "</div>"
        }
        card_area +=
            "<div class='workarea__card' id='workarea-card-" + i + "'>" +
            "<div class='workarea__card__header'>" +
            "<span class='workarea__title'>Название</span>" +
            "<span class='title__count font-weight-normal'>0</span>" +
            "<i class='top__transparent blue'></i>" +
            "<div class='plus_area font-weight-bold'>+</div>" +
            "</div>" +
            "<p class='font-opensans-regular'><span>0</span> руб.</p>" +
            "<button class='main' data-toggle='collapse'  onclick='consolelog(" + i + ")'><i class='fas fa-plus'></i></button>" +
            "<form method='GET' class='card__form '>" +

            "<span class='font-opensans-semibold'>Клиент</span>" +
            "<div class='card__form__body'>" +
            "<label for='contact' class='font-opensans-semibold'>Контакт</label>" +       
            "<div>" + card_area_list + "</div>"+
            "<p class='font-opensans-semibold' onclick='addContact(" + i + ")'><i class='fas fa-plus'></i> Добавить участника</p>" +
            "<label for='company' class='font-opensans-semibold'>Компания</label>" +
            "<div class='contact__member'>" +
            "<span class='fas fa-building text-secondary'></span>" +
            "<i class='liner'></i>" +
            "<input type='text' id='company' placeholder='Имя контакта, телефон или e-mail'>" +
            "<span class='fas fa-search text-secondary'></span>" +
            "</div>" +
            "</div>" +
            "<div class='card__form__footer'>" +
            "<label for='name' class='font-opensans-semibold'>Название</label>" +
            "<input type='text' id='name' placeholder='Сделка #'>" +
            "<label for='timer' class='font-opensans-semibold'>Сумма и валюта</label>" +
            "<div class='d-flex time__bg'>" +
            "<input type='text' id='timer' value='0.00'>" +
            "<select>" +
            "<option value='1'>Российский рубль</option>" +
            "<option value='2'>Доллар США</option>" +
            "<option value='3'>Евро</option>" +
            "<option value='4'>Гривна</option>" +
            "<option value='5'>Белорусский рубль</option>" +
            "</select>" +
            "</div>" +
            "<span class='select__pole font-opensans-semibold'>Выбрать поле</span>" +
            "</div>" +
            "<div class='submit__card d-flex'>" +
            "<button>Сохранить</button>" +
            "<button>Отменить</button>" +
            "</div>" +
            "</form>" +
            "</div>"
    }
    document.getElementById('main-workarea').innerHTML = card_area;
}

function addContact(index) {
    let task = '';
    workarea_card[index].cardList.push(task);
    addWorkArea();
}


