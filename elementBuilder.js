function elementBuilder(properties){

    /**
     * type : nome da tag a ser criada
     * text: texto a ser incluido na tag
     * properties: propriedade do elemento 
     */

    
    
    var textNode = properties.hasOwnProperty('text') ? document.createTextNode(properties.text) : '';

    var element = document.createElement(properties.type);
    var data = properties.hasOwnProperty('attributes') ? properties.attributes : [];

    data.forEach(prop => {
        for(key in prop){
            element.setAttribute(key,prop[key]);
        }
    });
    if(textNode)
        element.appendChild(textNode); 
    return element;

   
    
}


// criar um elemento com attributes  e sem textNode
var el1 = elementBuilder(
    {
        type:"button",
        attributes:
            [
                {class: "btn btn-primary"},
                {type: "submit"}
            ]
    }
)
console.log(el1);

// criar um elemento com textNode e attributes
var el2 = elementBuilder(
    {
        type:"button",
        text:"Clicar aqui",
        attributes:
            [
                {class: "btn btn-primary"},
                {type: "submit"}
            ]
    }
)
console.log(el2);

//criar um elemento apenas com textNode
var el3 = elementBuilder(
    {
        type:"button",
        text:"Clicar aqui",
    }
)
console.log(el3);

// criar um elemento sem attributes e sem text node
var el4 = elementBuilder(
    {
        type:"button",
    }
)
console.log(el4);


