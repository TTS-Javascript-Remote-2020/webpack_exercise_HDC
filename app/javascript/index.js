import ("../css/app.css");


import { rollDie } from './clickHandlers';

let btn = document.querySelector("#btn");
btn.onclick = rollDie;
