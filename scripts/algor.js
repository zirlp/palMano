function capturar() {
  var clientMail = document.getElementById("email").value;
  var clientNom = document.getElementById("name").value;
  var clientTel = document.getElementById("phone").value;

  if (clientMail == "") {
    alert("Debes de llenar todos los campos");
    document.getElementById("email").focus();
  } else {
    if (clientNom == "") {
      alert("Debes ingresar tu nombre");
      document.getElementById("celClint").focus();
    } else {
      console.log(clientMail + " " + clientNom);
      document.getElementById("email").value="";
      document.getElementById("name").value="";
      document.getElementById("name").focus();
    }
  }
}