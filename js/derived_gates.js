function xorGate() {
  let inputa = document.getElementById("xor-inputa").value;
  let inputb = document.getElementById("xor-inputb").value;
  let output = document.getElementById("xoroutput");

  if (inputa == 0 && inputb == 0) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 0 && inputb == 1) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1 && inputb == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 1 && inputb == 1) {
    output.innerHTML = "Output Y: 0";
  }
}

function xnorGate() {
  let inputa = document.getElementById("xnor-inputa").value;
  let inputb = document.getElementById("xnor-inputb").value;
  let output = document.getElementById("xnoroutput");

  if (inputa == 0 && inputb == 0) {
    output.innerHTML = "Output Y: 1";
  } else if (inputa == 0 && inputb == 1) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 1 && inputb == 0) {
    output.innerHTML = "Output Y: 0";
  } else if (inputa == 1 && inputb == 1) {
    output.innerHTML = "Output Y: 1";
  }
}
