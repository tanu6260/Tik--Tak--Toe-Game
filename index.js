const a = document.getElementById("div1");
const b = document.getElementById("div2");
const c = document.getElementById("div3");
const d = document.getElementById("div4");
const e = document.getElementById("div5");
const f = document.getElementById("div6");
const g = document.getElementById("div7");
const h = document.getElementById("div8");
const i = document.getElementById("div9");

const disableBtn = false;

let count = 0;
const audio = new Audio("start-13691.mp3");
const fillFunction = (control) => {
  console.log("control", control.id);
  if (count % 2 == 0) {
    document.getElementById(control.id).innerHTML = "X";
    document.getElementById("turnMessage").innerHTML = "Player O's Turn";
    audio.play();
  } else {
    document.getElementById(control.id).innerHTML = "O";
    document.getElementById("turnMessage").innerHTML = "Player X's Turn";
    audio.play();
  }

  count++;
  document.getElementById(control.id).disabled = true;
  if (checkWin()) {
    count++;
    document.getElementById(
      "turnMessage"
    ).innerHTML = ` congratulations Player ${
      count % 2 == 0 ? "X" : "O"
    } winner🥇`;
  } else if (count === 9) {
    document.getElementById("turnMessage").innerHTML = " Game is tie! 😔";
    handleTie();
  }
};

function handleTie() {
  const buttons = document.querySelectorAll(".cail");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style.pointerEvents = "none";
  }

  document.getElementById("turnMessage").innerHTML = "Game is tie! 😔";
}

function checkWin() {
  const cells = [
    a.innerHTML,
    b.innerHTML,
    c.innerHTML,
    d.innerHTML,
    e.innerHTML,
    f.innerHTML,
    g.innerHTML,
    h.innerHTML,
    i.innerHTML,
  ];

  if (cells[0] !== "" && cells[0] === cells[1] && cells[1] === cells[2]) {
    console.log("winner");
    disableAllButtons();

    return true;
  }
  if (cells[3] !== "" && cells[3] === cells[4] && cells[4] === cells[5]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }
  if (cells[6] !== "" && cells[6] === cells[7] && cells[7] === cells[8]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }

  if (cells[0] !== "" && cells[0] === cells[3] && cells[3] === cells[6]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }
  if (cells[1] !== "" && cells[1] === cells[4] && cells[4] === cells[7]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }
  if (cells[2] !== "" && cells[2] === cells[5] && cells[5] === cells[8]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }

  if (cells[0] !== "" && cells[0] === cells[4] && cells[4] === cells[8]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }
  if (cells[2] !== "" && cells[2] === cells[4] && cells[4] === cells[6]) {
    console.log("winner");
    disableAllButtons();
    return true;
  }
  console.log(" not winner");
  return false;
}

function disableAllButtons() {
  const buttons = document.querySelectorAll(".cail");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    buttons[i].style.pointerEvents = "none";
  }
}

function buttonclick() {
  audio.play();
  setTimeout(() => {
    location.reload();
  }, 100);
}
