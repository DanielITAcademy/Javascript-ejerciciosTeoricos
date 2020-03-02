var numOne = parseInt(prompt("Inserte primer numero"));
var numTwo = parseInt(prompt("Inserte segundo numero"));
var operator = prompt("¿Que operación quiere realizar?");
var answer;
switch (operator){
    case '+':
        answer= suma();
    break;
    case '-':
        answer= resta();
    break;
    case '*':
        answer= multiplica();
    break;
    case '/':
        answer= divide();
        break;
default: "Operacion no reconocida";
}





var sumar;
function suma(){
    var sumar = numOne+numTwo;
    document.write("La suma es " + sumar);
}
function resta(){
    var restar = numOne-numTwo;
    document.write("La resta es " + restar);
}
function multiplica(){
    var multiplicacion = numOne*numTwo;
    document.write("La multiplicación es " + multiplicacion);
}
function divide(){
    var division = numOne/numTwo;
    document.write("La division es " + division);
}