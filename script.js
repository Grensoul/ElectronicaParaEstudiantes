function ValidateEmail() {
    var mail = document.getElementById("text").value;
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(validRegex.test(mail)) {
        alert("¡Se ha suscrito al boletín con éxito!");
        return true;
    }
    else {
        alert("Ingrese un e-mail válido e inténtelo de nuevo");
        return false;
    }

}