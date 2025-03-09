const sendInput = document.querySelector('#input');
sendInput.addEventListener('keydown', function(event) {
        if(event.key == 'Enter' && sendInput.value != "") {
          const items = document.querySelector('.items');
          const listElement = document.createElement('li');
          items.append(listElement);
          listElement.textContent = sendInput.value;
          
          sendInput.value = "";

          listElement.addEventListener('click', function(){
          listElement.classList.toggle('done');
          })
        }
 
})



/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

