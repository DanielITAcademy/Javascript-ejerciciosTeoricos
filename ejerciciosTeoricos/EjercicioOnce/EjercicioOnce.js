var num = parseInt(Math.ceil((Math.random() * 10)));
var number;

var i=0;
do{
     number=parseInt(prompt("Insert one number between from 0 to 10"));
    i++;
    if (num!= number){
        alert("Sorry! You are fail. Try again ");
    }
} while(num!=number);

alert("You are the champions!! your answer in "  +i);


