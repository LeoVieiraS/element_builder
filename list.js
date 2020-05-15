var app = document.querySelector('.app')
var buttonElement = document.querySelector('#insert');
var inputName  = document.querySelector('#name');
var inputEmail  = document.querySelector('#email');
var inputPhone  = document.querySelector('#phone');
var inputAddress  = document.querySelector('#address');
var divListElement = elementBuilder({type:"div",attributes:[{class:"ul"}]});
var listElement = elementBuilder({type:"ul",attributes:[{class:"ul"},{id:"list"}]});
list_form = [];
function saveToStorage(){
    var name = inputName.value;
    var email = inputEmail.value;
    var phone = inputPhone.value;
    var address = inputAddress.value;
    var obj = {name:name,email:email,phone:phone,address:address}
    list_form.push(obj)
    localStorage.setItem('list_form', JSON.stringify(list_form));
    printList();
}

function loadStorage(){
    var list_form = JSON.parse(localStorage.getItem('list_form')) || []; 
    return list_form;
}

function printList(){   
    listElement.innerHTML = '';
    
    var list = loadStorage();
    list.forEach(element => {
       
        var str_element = `Name: ${element.name} Email: ${element.email} Phone: ${element.phone} Address: ${element.address}`
        var itemList = elementBuilder({type:"li",text:str_element});
        listElement.appendChild(itemList);
        divListElement.appendChild(listElement);
        app.appendChild(divListElement);

    });
}
buttonElement.onclick = saveToStorage;

