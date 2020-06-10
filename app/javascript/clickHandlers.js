import _ from "lodash";

import renderDie from './renderDie';

export const rollDie = () => {
  for (let i = 0; i < 2; i++) {
    let number = _.random(1, 6);
    console.log(number);
    renderDie(number, i);
  }
  renderRollAgain();
};

const renderRollAgain = () => {
  let btn = document.querySelector("#btn");
  btn.innerText = "Roll Again";
}
