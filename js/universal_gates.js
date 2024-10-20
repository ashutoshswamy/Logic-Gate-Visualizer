function nandGate() {
  let inputa = document.getElementById("nand-inputa").value;
  let inputb = document.getElementById("nand-inputb").value;
  let output = document.getElementById("nandoutput");

  if (inputa == 0 && inputb == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 0 && inputb == 1) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1 && inputb == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1 && inputb == 1) {
    output.innerHTML = "Output Y: 0";
  }
}

function norGate() {
  let inputa = document.getElementById("nor-inputa").value;
  let inputb = document.getElementById("nor-inputb").value;
  let output = document.getElementById("noroutput");

  if (inputa == 0 && inputb == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 0 && inputb == 1) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 1 && inputb == 0) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 1 && inputb == 1) {
    output.innerHTML = "Output Y: 0";
  }
}
