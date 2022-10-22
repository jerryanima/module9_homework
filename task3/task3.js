/*
Задание 3.

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://loremflickr.com/json/g/320/240/all, где get-параметр limit — это введённое число.
Пример: если пользователь ввёл 5, то запрос будет вида https://loremflickr.com/json/g/320/240/all.
После получения данных вывести ниже картинки на экран.

Подсказка: получение данных из input.

const value = document.querySelector('input').value;

*/
const btnNode = document.querySelector(".btn");
const divNode = document.querySelector(".result");

btnNode.addEventListener('click', () => {
    const numNode_width = document.querySelector(".input_width").value;
    const numNode_height = document.querySelector(".input_height").value;
    if (Number(numNode_width) < 100 || Number(numNode_width) > 500 ) {
        divNode.innerHTML = '<p>первое число вне диапазона от 100 до 500</p>';
    } else if (Number(numNode_height) < 100 || Number(numNode_height) > 500 ) {
      divNode.innerHTML = '<p>второе число вне диапазона от 100 до 500</p>';
    } else {
        useRequest(`https://loremflickr.com/json/g/${numNode_width}/${numNode_width}/all`);
    }
  });


  function useRequest(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = xhr.responseURL;
        divNode.innerHTML = `<img src="${result}"/>`;
      }
    };
    
    xhr.onerror = function() {
      console.log('Ошибка! Статус ответа: ', xhr.status);
    };
    xhr.send();
  };
  
  