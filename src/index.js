import _ from 'lodash';
import css from './styles.css';
import imagePng from './image.png';
import printMe from './print.js';


function component() {
  let element = document.createElement('div');
  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;




  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  element.appendChild(btn);

  return element;
}

function image() {
  let image = new Image();
  image.src = imagePng;
  return image;
}




document.body.appendChild(component());
document.body.appendChild(image());