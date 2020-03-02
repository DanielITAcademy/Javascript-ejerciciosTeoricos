/*Se le pide al usuario que introduzca el numero de puertas que tiene el coche
Si el coche tiene 3 puertas debe mostrar por pantalla "el coche es deportivo",
Si el coche tiene 5 puertas: "El coche es familiar". Si tiene un número diferente de puertas de 3 o 5
debe mostrar por pantalla ¿Seguro que el coche tiene x numero de puertas*/

var carDoor = parseInt(prompt("How many doors does the car have?"));
if (carDoor==3){
    document.write("Sportcar");
}
else if(carDoor==5){
    document.write("Family car");    
}
else{document.write("Are you sure the car has  " + carDoor + " doors?");
}

