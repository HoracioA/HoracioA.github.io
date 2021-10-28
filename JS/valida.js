//Validación para el formulario

var nombre = document.getElementById("form6Example1")
var form =   document.getElementById("form")

apellido = document.getElementById("form6Example2")
email = document.getElementById("form6Example5")


function validar() {
 
    form.addEventListener("submit", function(evt){ evt.preventDefault(); });
    console.log("Enviando")

    if (nombre.value === null || nombre.value===""){
    nombre.placeholder ="Error, nombre es un campo obligatorio";
    nombre.style.borderColor="red";
    }
    else {
        nombre.style.borderColor="green";
    }


    if (apellido.value === null || apellido.value===""){
        apellido.placeholder ="Error, apellido es un campo obligatorio";
        apellido.style.borderColor="red";
        }
        else {
            apellido.style.borderColor="green";
        }

        

        if (email.value === null || email.value===""){
            email.placeholder ="Error, email es un campo obligatorio";
            email.style.borderColor="red";
            }
            else {
                email.style.borderColor="green";
            }
            







    
  }
  





  