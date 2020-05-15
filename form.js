var appElement = document.querySelector('.app');

//--------------- CREATE ELEMENT CONTAINER --------------------------
var containerElement = elementBuilder(
    {
        type:"div",
        attributes: [
            {class:"container"}
        ]
    }
)

//----------------------- CREATE ELEMENT TITLE ----------------------
var titleElement = elementBuilder(
    {
        type:"h1",
       text:"Form"
    }
)


// ----------------------CREATE ELEMENT NAME-------------------------
var divInputNameElement = elementBuilder(
    {
        type:"div",
        attributes: [
            {class:"inputName"}
        ]
    }
)


var inputNameElement = elementBuilder(
    {
        type:"input",
        attributes: [
            {type:"text"},
            {class:"form-control"},
            {id:"name"},
            {name:"name"}
        ]
    }
)


var labelInputName = elementBuilder(
    {
        type:"label",
        text:"Name"
    }
)

divInputNameElement.appendChild(labelInputName);
divInputNameElement.appendChild(inputNameElement);


// ----------------------CREATE ELEMENT EMAIL-------------------------
var divInputEmailElement = elementBuilder(
    {
        type:"div",
        attributes:[
            {class:"inputEmail"},
        ]
    }
)


var inputEmailElement = elementBuilder(
    {
        type:"input",
        attributes:[
            {type:"email"},
            {class:'form-control'},
            {id:"email"},
            {name:"email"}
        ]
    }
)


var labelInputEmail = elementBuilder(
    {
        type:"label",
        text:"Email"
    }
)


divInputEmailElement.appendChild(labelInputEmail);
divInputEmailElement.appendChild(inputEmailElement);

// ----------------------CREATE ELEMENT PHONE-------------------------
var divInputPhoneElement = elementBuilder(
    {
        type:"div",
        attributes:[
            {class:"inputPhone"}
        ]
    }
)

var inputPhoneElement = elementBuilder(
    {
        type:"input",
        attributes:[
            {type:"number"},
            {class:"form-control"},
            {id:"phone"},
            {name:"phone"}
        ]
    }
)


var labelInputPhone = elementBuilder(
    {
        type:"label",
        text:"Phone :"
    }
)


divInputPhoneElement.appendChild(labelInputPhone);
divInputPhoneElement.appendChild(inputPhoneElement);

// ----------------------CREATE ELEMENT ADDRESS-------------------------

var divInputAddressElement = elementBuilder(
    {
        type:"div",
        attributes:[
            {class:"inputAddress"}
        ]
    }
)


var inputAddressElement = elementBuilder(
    {
        type:"input",
        attributes:[
            {type:"text"},
            {class:"form-control"},
            {id:"address"},
            {name:"address"}
        ]
    }
)

var labelInputAddress = elementBuilder(
    {
        type:"label",
        text:"Address"
    }
)

divInputAddressElement.appendChild(labelInputAddress);
divInputAddressElement.appendChild(inputAddressElement);

//-------------CREATE ELEMENT BUTTON INSERT -------------------------

var divButtonElement = elementBuilder(
    {
        type:"div"
    }
)


var buttonInsertElement = elementBuilder(
    {
        type:"button",
        attributes:[
            {class:"btn btn-primary"},
            {id:"insert"}
        ],
        text:"insert"
    }
)

buttonInsertElement.style.marginTop = "10px";
divButtonElement.appendChild(buttonInsertElement);


buttonInsertElement.onmouseover = function(){
    buttonInsertElement.removeAttribute('class')
    buttonInsertElement.setAttribute('class','btn btn-success')
}

buttonInsertElement.onmouseout = function(){
    buttonInsertElement.removeAttribute('class')
    buttonInsertElement.setAttribute('class','btn btn-primary')

}


// ------------- APPENDS ELEMENTS TO DOM ----------------------------

appElement.appendChild(containerElement);

containerElement.appendChild(titleElement);

containerElement.appendChild(divInputNameElement);

containerElement.appendChild(divInputEmailElement);

containerElement.appendChild(divInputPhoneElement);

containerElement.appendChild(divInputAddressElement);

containerElement.appendChild(divButtonElement);


// --------- Add margin to Labels -------------------------------------
var labels = document.querySelectorAll('label')
console.log(labels);

function addStyle(el){
    el.style.marginTop = "10px";
}

labels.forEach(addStyle);

