export default (number, dieNumber) => {
  let die = document.querySelector(`#die${dieNumber}`);
  die.innerHTML = "";

  switch(number) {
    case 1:
      die.className = "die first-face";
      break;
    case 2:
      die.className = "die second-face";
      break;
    case 3:
      die.className = "die second-face third";
      break;
    case 4:
      die.className = "die fourth-face";
      break;
    case 5:
      die.className = "die fourth-face fifth";
      break;
    case 6:
      die.className = "die fourth-face sixth";
      break;
    default:
      break;
  }

  if (number < 4) {
    for (let i = 0; i < number; i++) {
      let dot = document.createElement('div')
      dot.className = "dot";
      die.appendChild(dot);
    }
  } else if (number === 4 || number === 6) {
    for (let i = 0; i < 2; i++) {
      let column = document.createElement('div')
      column.className = "column";
      let numberOfDots = number / 2;
      for (let i = 0; i < numberOfDots; i++) {
        let dot = document.createElement('div')
        dot.className = "dot";
        column.appendChild(dot);
      }
      die.appendChild(column);
    }
  } else {
      for (let i = 0; i < 3; i++) {
        let column = document.createElement('div')
        column.className = "column";
        let numberOfDots = i % 2 === 0 ? 2:1;
        for (let i = 0; i < numberOfDots; i++) {
          let dot = document.createElement('div')
          dot.className = "dot";
          column.appendChild(dot);
        }
        die.appendChild(column);
    }
  }
}
