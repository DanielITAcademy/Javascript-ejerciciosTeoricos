/* Sistema escolar español
Si tiene menos de 5 años: pre-escolar
Si tiene entre 6 y 11 años: primaria
Si tiene entre 12 y 15 años: ESO
Si tiene entre 16 y 18: bachillerato
Si tiene más de 18: FP o Universidad*/

let years = parseInt(prompt("How old are you? "));

if (years<5){
    document.write ("You are in pre-escolar");

}else if (years >=6 && years<=11) {
    document.write("You are in primaria");


}else if (years >=12 && years <=15){
    document.write("You are in ESO");

}else if (years >=16 && years <=18 ){
    document.write("You are in Bachillerato");

}else if (years>=18){
    document.write("You are in FP or University");

}