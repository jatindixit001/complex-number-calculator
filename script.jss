function getNumbers() {
    let a = Number(document.getElementById("real1").value);
    let b = Number(document.getElementById("imag1").value);
    let c = Number(document.getElementById("real2").value);
    let d = Number(document.getElementById("imag2").value);

    return [a, b, c, d];
}

function showResult(real, imag) {

    if (imag >= 0) {
        document.getElementById("result").innerHTML =
            real + " + " + imag + "i";
    } else {
        document.getElementById("result").innerHTML =
            real + " - " + Math.abs(imag) + "i";
    }
}

function add() {

    let n = getNumbers();

    let real = n[0] + n[2];
    let imag = n[1] + n[3];

    showResult(real, imag);
}

function subtract() {

    let n = getNumbers();

    let real = n[0] - n[2];
    let imag = n[1] - n[3];

    showResult(real, imag);
}

function multiply() {

    let n = getNumbers();

    let real = n[0] * n[2] - n[1] * n[3];
    let imag = n[0] * n[3] + n[1] * n[2];

    showResult(real, imag);
}

function divide() {

    let n = getNumbers();

    let denominator = n[2] * n[2] + n[3] * n[3];

    if (denominator == 0) {
        document.getElementById("result").innerHTML =
            "Cannot divide by zero";
        return;
    }

    let real = (n[0] * n[2] + n[1] * n[3]) / denominator;
    let imag = (n[1] * n[2] - n[0] * n[3]) / denominator;

    real = real.toFixed(2);
    imag = imag.toFixed(2);

    showResult(real, imag);
}