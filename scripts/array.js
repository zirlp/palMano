function capturar(){
  
    function Persona(email,nombre){
      this.nombre = nombre;
      this.email = email;
    }

    var emailCapturar = document.getElementById("email").value;
    var nombreCapturar = document.getElementById("name").value;
    

    nuevoSujeto = new Persona(emailCapturar,nombreCapturar);
    agregar();
}

var baseDatos= [];
function agregar() {
    baseDatos.push(nuevoSujeto);
}