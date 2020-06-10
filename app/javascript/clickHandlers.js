import _ from "lodash";

import renderDie from './renderDie';

export const rollDie = () => {
  let number = _.random(1, 6);
  console.log(number);
  renderDie(number);
  renderRollAgain();
};

const renderRollAgain = () => {
  let btn = document.querySelector("#btn");
  btn.innerText = "Roll Again";
}
