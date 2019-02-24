import './styles.css';
import './styles.scss';
import imagePng from './assets/image.png';
import printMe from './print.js';
import { cube } from './math.js';
import constant from './typescript/index.ts';

function getComponent() {
  return import('lodash').then(({ default: _ }) => {
    var element = document.createElement('p');
    element.innerHTML = _.join(['chunk', 'webpack'], ' ');
    return element;
 }).catch(() => 'An error occurred while loading the component');
}

setTimeout(() => {
  getComponent().then(component => {
    document.body.appendChild(component);
  })
}, 3000);

function component() {
  var element = document.createElement('pre');
  var btn = document.createElement('button');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.innerHTML = [
    'Hello webpack!',
    `This "${constant}" is from a .ts file`,
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  element.appendChild(btn);
  return element;
}

function image() {
  let image = new Image();
  image.src = imagePng;
  return image;
}

let element = component();
document.body.appendChild(element);
document.body.appendChild(image());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}
