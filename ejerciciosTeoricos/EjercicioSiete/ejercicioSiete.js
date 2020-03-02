/*Nos dice el dia y el mes decir que signo del zodiaco es.*/
/*
Acuario (Enero 20 – Febrero 18)
Piscis (Febrero 19 – Marzo 20) 
Aries (Marzo 21 –Abril 19) 
Tauro (Abril 20 – Mayo 20) 
Géminis (Mayo 21 – Junio 20)
Cáncer (Junio 21 – Julio 22) 
Leo (Julio 23–Agosto 22) 
Virgo (Agosto 23 – Septiembre 22) 
Libra (Septiembre 23 – Octubre 22) 
Escorpio (Octubre 23 – Noviembre 21) 
Sagitario (Noviembre 22 – Diciembre 21) 
Capricornio (Diciembre 22 – Enero 19)
*/
function sign(){
var day = parseInt(document.getElementById("InsertDay").value);
var month = parseInt(document.getElementById("InsertMonth").value);
var answer ;

if(month==1){
    if(day<=19){
        answer = ("Your zodiac sign is: Capricorn");
    }
    else if(day>=20){
        answer = ("Your zodiac sign is: Aquarius ");
    }
}
else if(month==2){
    if(day<=18){
        answer = ("Your zodiac sign is: Aquarius ");
    }
    else if(day>=19){
        answer = ("Your zodiac sign is: Pisces");
    }
}    
else if(month==3){
    if(day<=20){
        answer = ("Your zodiac sign is: Pisces");
    }
    else if(day>=21){
        answer = ("Your zodiac sign is: Aries");
    }
}    
else if(month==4){
    if(day<=19){
        answer = ("Your zodiac sign is: Aries");
    }
    else if(day>=20){
        answer = ("Your zodiac sign is: Taurus");
    } 
}   
else if(month==5){
    if(day<=20){
        answer = ("Your zodiac sign is: Taurus");
    }
    else if(day>=21){
        answer = ("Your zodiac sign is: Gemini");
    }    
}
else if(month==6){
    if(day<=20){
        answer = ("Your zodiac sign is: Gemini");
    }
    else if(day>=21){
        answer = ("Your zodiac sign is: Cancer");
    }    
}
else if(month==7){
    if(day<=22){
        answer = ("Your zodiac sign is: Cancer");
    }
    else if(day>=23){
        answer = ("Your zodiac sign is: Leo");
    }
}    
else if(month==8){
    if(day<=22){
        answer = ("Your zodiac sign is: Leo");
    }
    else if(day>=23){
        answer = ("Your zodiac sign is: Virgo");
    }
}    
else if(month==9){
    if(day<=22){
        answer = ("Your zodiac sign is: Virgo");
    }
    else if(day>=23){
        answer = ("Your zodiac sign is: Libra");
    }
}    
else if(month==10){
    if(day<=21){
        answer = ("Your zodiac sign is: Libra");
    }
    else if(day>=22){
        answer = ("Your zodiac sign is: Scorpio");
    }
}    
else if(month==11){
    if(day<=21){
        answer = ("Your zodiac sign is: Scorpio");
    }
    else if(day>=22){
        answer = ("Your zodiac sign is: Sagittarius");
    }
}    
else if(month==12){
    if(day<=21){
        answer = ("Your zodiac sign is: Sagittarius");
    }
    else if(day>=22){
        answer = ("Your zodiac sign is: Capricorn");
    }
}

document.getElementById("demo").innerHTML = answer;
}

