function validar(){
    const n1 = document.getElementById('nombre').value;
    const n2 = document.getElementById('email').value;

    if (n1=='' || n2=='') {
        alert("debe rellenar los campos");
    }else {alert("gracias por contactar");}
}