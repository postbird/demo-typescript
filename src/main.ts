import {sayHello} from './greet';

function showHello(divName: string, name: string) {
   const elt = document.getElementById(divName);
   elt.innerText = sayHello(name + name + name + name + name);
} 

showHello("greeting", "TypeScript");