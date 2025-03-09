const sendInput = document.querySelector('#input');
sendInput.addEventListener('keydown', function(event) {
        if(event.key == 'Enter' && sendInput.value != "") {
          const items = document.querySelector('.items');
          const listElements = document.createElement('li');
          items.append(listElements);
          listElements.append(sendInput.value);
          
          sendInput.value = "";

          listElements.addEventListener('click', function(){
          listElements.classList.toggle('done');
          })
        }
 
})



/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

