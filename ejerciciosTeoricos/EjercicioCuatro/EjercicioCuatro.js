/*Dias de la semana*/

var day = parseInt(prompt("Select one day",1));
switch (day){
    case 1:alert("Monday");
    break;
    case 2:alert("Tuesday ");
    break;
    case 3:alert("Wednesday");
    break;
    case 4:alert("Thursday");
    break;
    case 5:alert("Friday");
    break;
    case 6:alert("Saturday");
    break;
    case 7:alert("Sunday");
    break;
    default:alert("You are crazy !!" + day + " Just we have 7 days");
}
