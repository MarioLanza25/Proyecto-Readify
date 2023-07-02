function validarCorreo() {
    var emailInput = document.getElementById('envio-correo');
    var email = emailInput.value.trim();
  
    // Expresión regular para validar el formato de correo electrónico con extensiones específicas
    var regex = /^[A-Za-z0-9._%+-]+@(gmail|yahoo)\.com$/;
  
    if (regex.test(email)) {
      alert('El correo electrónico es válido.');
    } else {
      alert('El correo electrónico no es válido.');
    }
  }
  