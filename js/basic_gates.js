function notGate() {
  let inputa = document.getElementById("not-inputa").value;
  let output = document.getElementById("notoutput");

  if (inputa == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1) {
    output.innerHTML = "Output Y: 0";
  }
}

function andGate() {
  let inputa = document.getElementById("and-inputa").value;
  let inputb = document.getElementById("and-inputb").value;
  let output = document.getElementById("andoutput");

  if (inputa == 0 && inputb == 0) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 0 && inputb == 1) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 1 && inputb == 0) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 1 && inputb == 1) {
    output.innerHTML = "Output Y: 1";
  }
}

function orGate() {
  let inputa = document.getElementById("or-inputa").value;
  let inputb = document.getElementById("or-inputb").value;
  let output = document.getElementById("oroutput");

  if (inputa == 0 && inputb == 0) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 0 && inputb == 1) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1 && inputb == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1 && inputb == 1) {
    output.innerHTML = "Output Y: 1";
  }
}
