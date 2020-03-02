/* ARRAYS
El usuario introducirá en un campo de texto el número de palabras que quiere introducir. Clicará
un botón de aceptar y entonces le aparecerán mensajes tipo "prompt":prompt(""); en que el usuario
podrá introducir las palabras. Las palabras se guardaran en un array y una vez que hayan sido 
introducidas, se debe enseñar todo el contenido del array por pantalla.Extra: Mostrar las palabras ordenadas*/

function words(){
var totalDrinks = parseInt(document.getElementById("Accept").value);

var  drink = [];
    for(i=0;i<totalDrinks;i++){
        var drinks = prompt("how much have you drunk? ");
        drink.push(drinks);//Añadir palabras
        drink.sort();//Ordenar array
         }
         document.write(drink);
    }
