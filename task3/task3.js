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
    const numNode = document.querySelector(".input").value;
    if (Number(numNode) < 1 || Number(numNode) > 10 ) {
        divNode.innerHTML = '<p>число вне диапазона от 1 до 10</p>';
    } else {
        useRequest(`https://loremflickr.com/320/240?limit=${numNode}`);
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
  
  