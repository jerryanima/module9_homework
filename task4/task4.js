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
        useRequest(`https://picsum.photos/${numNode_width}/${numNode_width}`);
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
  
  