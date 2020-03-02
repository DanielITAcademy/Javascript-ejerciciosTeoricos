/* Una academia de idiomas quiere que al dar de alta a los nuevos estudiantes, la aplicación les indique quien recibe una beca para estudiar en su centro. 
Crear un campo de texto para poner el número de alumnos que se pueden matricular en la academia. Una vez el usuario ha introducido el número de alumnos, se le pedirá 
al usuario mediante diferentes prompts: el nombre, la edad, si tiene un título universitario y si está en el paro. 
Éstos datos se pedirán tantas veces como número de alumnos haya puesto el usuario en la caja de texto.
Los requisitos para recibir la beca son: que el alumno sea mayor de edad y esté en disposición de un título universitario o que el alumno esté en el paro. 
Si se cumplen estas condiciones, la escuela ofrece la beca.
Al final se debe mostrar todos los nombres de los alumnos que tienen beca.*/


function students(){
    var totalstudents = parseInt(document.getElementById("Accept").value);
    var datesStudents = [];

    for(i=0; i<totalstudents;i++){
        
        var name = prompt("What is your name?  ");
        var age = parseInt(prompt(name + " How old are you?  " ));
        var title  = prompt(name + " Have you got a title university  " +"?");
        var benefits = prompt(name + " Have you got benefits " + "?");
        
        if((age>=18 && title=="yes") || (benefits=="yes")) {
            scholarship = name + " You have a scholarship! " + "<br>"
        
        }
            else{scholarship = " Sorry, You don´t have a scholarship" + "<br>"}
        
        
            datesStudents.push(scholarship);
           
    } 
            document.write (datesStudents + "<br>");  
    }

    

