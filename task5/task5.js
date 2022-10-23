const btnNode = document.querySelector(".btn");
const divNode = document.querySelector(".result");

btnNode.addEventListener('click', () => {
    const imageWidth = document.querySelector(".input_width").value;
    const imageHeight = document.querySelector(".input_height").value;
    const numImagesAvailable = 5;
    const randomNumber = Math.floor(Math.random() * numImagesAvailable);
    if (Number(imageWidth) < 100 || Number(imageWidth) > 500 ) {
        divNode.innerHTML = '<p>Ширина картинки вне диапазона от 100 до 500</p>';
    } else if (Number(imageHeight) < 100 || Number(imageHeight) > 500 ) {
      divNode.innerHTML = '<p>Высота картинки вне диапазона от 100 до 500</p>';
    } else {
        useRequest(`https://source.unsplash.com/collection/928423/${imageWidth}x${imageHeight}/?sig=${randomNumber}`);
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
      localStorage.setItem('myImg', result);
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  xhr.send();
};
  

if (localStorage.getItem('myImg') != ''){
  const myKey = localStorage.getItem('myImg');
  divNode.innerHTML = `<img src="${myKey}"/>`;

}  