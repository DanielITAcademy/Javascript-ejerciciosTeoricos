/* Programa que se pidan dos números y un operador al usuario. 
El usuario imprimira por pantalla
el resultado de hacer la operación que contenga la variable operador*/



function operation(){
    var numOne = parseInt(document.getElementById("InsertednumOne").value);
    var numTwo = parseInt(document.getElementById("InsertednumTwo").value);
    var operator = document.getElementById("operator").value;
    var resultado;
    switch(operator){
        case '+':
            resultado = "The answer of addition is " + (numOne + numTwo);
            break;
        case '-':
            resultado = "The answer of substration is "+ (numOne - numTwo);
            break;
        case '*':
            resultado = "The answer of multiplication is "+ (numOne * numTwo);
            break;
        case '/':
            resultado = "The answer of division is "+ (numOne / numTwo);
            break;
        
        default:
            resultado = "Maybe you should buy a calculator...";
        }
        document.getElementById("demo").innerHTML = resultado; //le inyecto al html lo que yo quiero en este caso 
        //document.getElementById("demo2").innerHTML = resultado;
        //document.getElementById("demo3").innerHTML = resultado;

    }

