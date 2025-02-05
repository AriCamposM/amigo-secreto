# 🎁 Amigo Secreto

Este proyecto es una aplicación web interactiva que permite registrar nombres de amigos y realizar un sorteo aleatorio para asignar un "amigo secreto".  

## 📌 Objetivo

El principal objetivo de este desafío es fortalecer tus habilidades en **lógica de programación** mediante la manipulación del DOM y el uso de estructuras de datos en **JavaScript**.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Para la estructura del contenido.
- **CSS3**: Para el diseño y estilos visuales.
- **JavaScript**: Para la lógica del sorteo y la manipulación del DOM.

## 🚀 Funcionalidades

✔️ Agregar nombres a la lista de participantes.  
✔️ Sortear un "amigo secreto" de manera aleatoria.  
✔️ Reiniciar la lista y comenzar un nuevo sorteo.  

## 🎮 Cómo usar

1️⃣ **Abrir el archivo** `index.html` en un navegador web.  
2️⃣ **Escribir los nombres** en el campo de entrada y hacer clic en "Añadir".  
3️⃣ **Presionar "Sortear amigo"** para seleccionar un participante de forma aleatoria.  
4️⃣ **Si deseas reiniciar**, presiona el botón "Reiniciar" para borrar la lista y comenzar de nuevo.  

## 📝 Código principal (JavaScript)

El proyecto utiliza un **array (`friendsListArray`)** para almacenar los nombres y realizar el sorteo mediante la función `Math.random()`.

```javascript
const friendsListArray = [];

function agregarAmigo() {
    const nameInput = document.querySelector(".input-name");
    const nameInputValue = nameInput.value;

    if (nameInputValue.length === 0) {
        alert('Por favor, ingrese un nombre válido.');
    } else {
        friendsListArray.push(nameInputValue);
        const liElement = document.createElement('li');
        liElement.textContent = nameInputValue;
        document.querySelector(".name-list").appendChild(liElement);
        nameInput.value = '';
    }
}

function sortearAmigo() {
    if (friendsListArray.length > 0) {
        const selectedName = Math.floor(Math.random() * friendsListArray.length);
        const liElement = document.createElement('li');
        liElement.textContent = friendsListArray[selectedName];
        document.querySelector('.result-list').appendChild(liElement);
    } else {
        alert("Agrega al menos un nombre antes de sortear.");
    }
}

function reiniciar() {
    document.querySelector(".name-list").replaceChildren();
    document.querySelector(".result-list").replaceChildren();
    friendsListArray.length = 0;
}
```
## 📌 Mejoras posibles

- 🔹 Agregar validaciones para evitar nombres duplicados.  
- 🔹 Implementar la lógica de asignación entre amigos en lugar de un simple sorteo.  
- 🔹 Guardar los nombres en `localStorage` para mantenerlos al recargar la página.  

## 📜 Licencia

Este proyecto es de uso libre. Puedes modificarlo y adaptarlo según tus necesidades. 😊  
