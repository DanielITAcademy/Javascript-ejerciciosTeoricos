// Football khan academy
function position() {
    var pos = document.getElementById("InsertPos").value;
    var posicion;

    
    var total;
    
    var tarjetas;
    switch (pos) {
        case 'portero':
            var paradas = parseInt(prompt("¿Cuantas paradas ha hecho?"));
            posicion = "El jugador es portero "; {
                if (paradas > 150) {
                    document.write("El portero se ha subido su valoración  en un valor de mercado de 1000000€ ");
                } else if (paradas <= 150 && paradas >= 100) {
                    document.write("El portero ha subido su valoración en un valor de mercado de 500000€ ");
                } else if (paradas <= 99 && paradas >= 50){
                    document.write("El portero sigue con la misma valoración  ");
            } if (paradas < 50) 
                    document.write("El portero ha bajado su valoración en 1000000");
            break;

        }


        case 'defensa':
            var robadas=parseInt (prompt("¿Cuantos robos del defensa? "));
            var numTarjetas=parseInt(prompt("¿Cuantas tarjetas"));
            var amarillas=("El jugador ha bajado medio millón por acumulación de tarjetas");
            var valoracion;
            posicion = "El jugador es defensa ";
                if (robadas> 300){
                    valoracion=(" El defensa ha subido  su valoración en 1 milió d’euros.");
                } else if(robadas >= 200 && robadas <300 ){
                    valoracion=("El defensa ha subido su valor en medio millión de euros ");
                } else if(robadas>100 && robadas <=199){
                    valoracion=("El defensa mantiene su claúsula de rescisión");
                }
                  else if(robadas<=100){
                    valoracion=("El defensa ha bajado su valoración 1 millón de euros");

                  }
                   if (numTarjetas>15){
                        document.write(valoracion +  amarillas );
                   }else{
                            document.write(valoracion);

                            

                        }

                        break;
               
        case 'centrocampista':
            var robos=parseInt (prompt("¿Cuantos robos del centrocampista? "));
            var asistencias =parseInt (prompt("¿Cuantas asistencias? "));
            posicion = "El jugador es centrocampista ";{
                if(robos>=100 && asistencias > 10) {
                    valoracion=(" El centrocampista ha subido su valoración en 1 millón de euros.");
                }else if(robos>=20&&robos<=99&&asistencias>=5&&asistencias<=9){
                    valoracion=(" El centrocampista ha subdio su valoración en medio millón de euros");
                }else if(robos>=25&&robos<=49&&asistencias>=1&&asistencias<=4){
                    valoracion=(" El centrocampista mantiene su valoración");
                }else if(robos<25&&asistencias==0){
                    valoracion=(" El centrocampista ha bajado su valoración en 1 milió d’euros.");
                }
                


                }

            break;
        case 'delantero':
            var goles =parseInt (prompt("¿Cuantas goles ha marcado? "));
            var asistencia=parseInt(prompt("¿Cuantas asistencia lleva?"));
            posicion = "El jugador es delantero ";{
            if (goles > 15 && asistencia >= 10) {
                valoracion = "El delantero ha subido su valoración en 5 millónes de euros."
            } else if (goles >= 10 && gol <= 10 && asistencia >= 5 && asistencia <= 9) {
                valoracion = "El delantero ha subido su valoración en 3 millónes de euros."
            } else if (goles >= 5 && gol <= 9 && asistencia >= 5 && asistencia <= 9) {
                valoracion = "El delantero ha subido su valoración en 1 millón de euros."
            } else if (goles < 5 && asistencia < 3) {
                valoracion = "El delantero ha bajado su valoración en 3 millónes de euros."
            }
            break;
        }
        default:
            posicion = "Pon un jugador de campo que este esta en el banquillo...";
        }
   
    document.getElementById("demo").innerHTML = valoracion;
}



