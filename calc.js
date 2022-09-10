function clearScreen() {
    document.getElementById("display").value = "";
}

function display(value) {
    document.getElementById("display").value += value;
}

function operate() {

    let s = document.getElementById("display").value;
    let split = s.split("");
    let a = parseInt(split[0]);
    let b = parseInt(split[2]);
    let operator = split[1];
    let result = 0;

    switch (operator) {
        case "+": result = a+b;
        break
        case "-": result = a-b;
        break
        case "*": result = a*b;
        break
        case "/": result = a/b;
        break
    }
    //let result = eval(s);
    document.getElementById("display").value = result;
}