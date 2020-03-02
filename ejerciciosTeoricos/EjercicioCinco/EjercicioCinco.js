// Switch months of year

function Month(){
                var saludo;
                var month = parseInt(document.getElementById("InsertedDay").value);
                switch(month){
                    case 1:
                        saludo = "This month is January";
                        break;
                    case 2:
                        saludo = "This month is February ";
                        break;
                    case 3:
                        saludo = "This month is March";
                        break;
                    case 4:
                        saludo = "This month is April";
                        break;
                    case 5:
                        saludo = "This month is May";
                        break;
                    case 6:
                        saludo = "This month is June";
                        break;
                    case 7:
                        saludo = "This month is July";
                        break;
                    case 8:
                        saludo = "This month is August";
                        break;
                    case 9:
                        saludo = "This month is September";
                        break;    
                    case 10:
                        saludo = "This month is October";
                        break;
                    case 11:
                        saludo = "This month is November";
                        break;
                    case 12:
                        saludo = "This month is December";
                        break;        
                
                    default:
                        saludo = "Just we have twelve months!!!";
                        break;
                }
                document.getElementById("demo").innerHTML = saludo;
        }