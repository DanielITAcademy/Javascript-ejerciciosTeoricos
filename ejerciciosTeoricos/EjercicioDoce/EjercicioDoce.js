var numRandom = Math.ceil((Math.random() * 10));
var counter =0;
    do{
        number=parseInt(prompt("Insert number"));
        counter=counter + 1;

    } while(number!= numRandom&&counter<5){

    }if (counter==5){
        document.write("You have exceeded the number of attempts ");
    }else{
        document.write("You are win with " + counter + " attempts");
    }

