
$(document).ready(function(){
    
$('a').on('click', function(e){
    e.preventDefault();
    var pageRef = $(this).attr('href');

    callPage(pageRef)
});


function callPage(pageRefInput){
     $.ajax({
        url: pageRefInput,

        type: "GET",

        dataType: 'text',

        success: function(response){
            console.log('the page was loaded', reponse)
            $('.main__test').innerHtml(response);
        },

        error: function(error){
            console.log('the page was Not loaded', error);
        },

        complete: function(xhr, status){
            console.log('completed');
        }

    });
}





AOS.init();


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

function drawByTime() {
    let result1 = "";
    let starting = document.getElementById('start-time');
    let ending = document.getElementById('end-time');
    for (let i = 0; i < byTimeToDo.length; i++) {
        result1 += "<div class='tasks'> <div> <span>" + starting.value + ' ' + ending.value + ' ' + byTimeToDo[i] + "</span></div> <div class='task-close' onclick='deleteByTimeTask(" + i + ")'>&times;</div></div>"
        for (let i = 0; i < byTimeToDo.length; i++) {
            result1 += "<div class='tasks'> <div> <span>" + starting.value + ' ' +
                ending.value + ' ' + byTimeToDo[i] + "</span></div> <div class='task-close' onclick='deleteByTimeTask(" + i + ")'>&times;</div></div>"
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
        console.log(index);
        byTimeToDo.splice(index, 1);
        drawByTime();
    }




    let workList = {
        card_area: "",
        card_area_list: ""
    };


    let workarea_card = [];

    function workListFunction() {
        let newCard = {
            cardList: []
        }

        workarea_card.push(newCard);
        addWorkArea();
    }

//  workarea_card[0] = 

    function ContactWithClient() {
        workList.card_area = "";
        for (let i = 0; i < workarea_card.length; i++) {
            workList.card_area_list = "";
            for (let j = 0; j < workarea_card[i].cardList.length; j++) {
                workList.card_area_list +=
                    "<div class='contact__member mt-2'>" +
                    "<span class='fas fa-user-circle text-secondary'></span>" +
                    "<i class='liner'></i>" +
                    "<input type='text' id='contact-" + i + j + "' placeholder='Имя контакта, телефон или e-mail'>" +
                    "<span class='fas fa-search text-secondary' onclick='consoleid(" + i + j + ")'></span>" +
                    "</div>";
            }
            workList.card_area +=
                "<div class='workarea__card' id='workarea-card-" + i + "'>" +
                "<div class='workarea__card__header'>" +
                "<span class='workarea__title'>Название</span>" +
                "<span class='title__count font-weight-normal'>0</span>" +
                "<div class='plus_area font-weight-bold' onclick='workListFunction()'>+</div>" +
                "</div>" +
                "<p class='font-opensans-regular'><span>0</span> руб.</p>" +
                "<button class=' accordion' data-toggle='collapse'  onclick='consolelog(" + i + ")'><i class='fas fa-plus'></i></button>" +
                "<form method='GET' class='card__form panel'>" +

                "<span class='font-opensans-semibold'>Клиент</span>" +
                "<div class='card__form__body'>" +
                "<label for='contact' class='font-opensans-semibold'>Контакт</label>" +
                "<div>" + workList.card_area_list + "</div>" +
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
                "</div>";
        }
    }


    function ContactArea(i, j) {
        "<div class='contact__member '>" +
        "<span class='fas fa-user-circle text-secondary'></span>" +
        "<i class='liner'></i>" +
        "<input type='text' id='contact-" + i + j + "' placeholder='Имя контакта, телефон или e-mail'>" +
        "<span class='fas fa-search text-secondary' onclick='consoleid(" + i + j + ")'></span>" +
        "</div>"
    }

    function Clients(i) {
        "<div class='workarea__card' id='workarea-card-" + i + "'>" +
        "<div class='workarea__card__header'>" +
        "<span class='workarea__title'>Название</span>" +
        "<span class='title__count font-weight-normal'>0</span>" +
        "<div class='plus_area font-weight-bold' onclick='workListFunction()'>+</div>" +
        "</div>" +
        "<p class='font-opensans-regular'><span>0</span> руб.</p>" +

        "<button class='main accordion'  onclick='consolelog(" + i + ")'><i class='fas fa-plus'></i></button>" +

        "<form method='GET' class='card__form panel'>" +

        "<span class='font-opensans-semibold'>Клиент</span>" +

        "<div class='card__form__body'>" +
        "<label for='contact' class='font-opensans-semibold'>Контакт</label>" +
        "<div>" + workList.card_area_list + "</div>" +
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

    function addWorkArea() {
        console.log("added")
        ContactWithClient();
        document.getElementById('main-workarea').innerHTML = workList.card_area;
    }

    function addContact(index) {
        let task = '';
        workarea_card[index].cardList.push(task);
        addWorkArea();
    }

    function consoleid(id) {
        console.log(id);
    }

// ===============================  
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.padding = '0';
                panel.style.maxHeight = null;
            } else {
                panel.style.padding = "13px";
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
