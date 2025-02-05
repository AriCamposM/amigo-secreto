// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const friendsListArray = [];

function agregarAmigo () {

    const nameInput = document.querySelector(".input-name");
    const nameInputValue = nameInput.value;

    if(nameInputValue.length == 0){
  
        window.alert('Por favor, ingrese un nombre valido en el campo.');
    }else{

        friendsListArray.push(nameInputValue);

        
        const liElement = document.createElement('li');
        liElement.textContent = nameInputValue;
        
        const friendsListContainer = document.querySelector(".name-list");
        friendsListContainer.appendChild(liElement);
        
        nameInput.value  = '';
    }    
}


function sortearAmigo() {
    selectedName =  Math.floor(Math.random() * friendsListArray.length);


    const liElement = document.createElement('li');
    liElement.textContent = friendsListArray[selectedName];

    const resultContainer = document.querySelector('.result-list');

    const friendsListContainer = document.querySelector(".name-list");
    friendsListContainer.replaceChildren();

    resultContainer.appendChild(liElement);

}


function reiniciar () {
    const friendsListContainer = document.querySelector(".name-list");
    friendsListContainer.replaceChildren();

    const nameInput = document.querySelector(".input-name");
    nameInput.value  = '';

    const resultContainer = document.querySelector('.result-list');
    resultContainer.replaceChildren();
    friendsListArray.length = 0;
}