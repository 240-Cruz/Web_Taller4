document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formulario").addEventListener('submit', validarFormulario)
});

function validarFormulario(evento) {
    evento.preventDefault();
    //Nombre
    var nombre = document.getElementById('Nombre').value;

    if (nombre.length == 0) {
        alert('El campo nombre está vacío');

    } else {
        if (nombre.length > 25) {
            alert('El campo Nombre debe tener máximo 25 caracteres');
            return;
        }
    }
    //Apellido
    var apellido = document.getElementById('Apellido').value;

    if (apellido.length == 0) {
        alert('El campo Apellido está vacío');

    } else {
        if (apellido.length > 25) {
            alert('El campo Apellido debe tener máximo 25 caracteres');
            return;
        }
    }
    //Direccion
    var direc = document.getElementById('Direccion').value;

    if (direc.length == 0) {
        alert('El campo Direccion está vacío');

    }
    else {
        if (direc.includes("cll")) {

        }
        else {
            if (direc.includes("cra")) {

            }
            else {
                if (direc.includes("av")) {

                }
                else {
                    if (direc.includes("anv")) {
                        return;
                    }
                    else {
                        if (direc.includes("trans")) {

                        }
                        else {
                            alert('El campo dirección debe contener alguno de las siguientes palabras cll, cra, av, anv, trans');
                            return;
                        }
                    }
                }
            }
        }
    }
    //Usuario
    var usuario = document.getElementById('CcUsuario').value;

    if (usuario.length == 0) {
        alert('El campo Usuario está vacío');
        return;
    }
    else {
        if (usuario.length > 20) {
            alert('El campo usuario debe tener maximo 20 caracteres');

        }
        else {
            if (usuario.length < 10) {
                alert('El campo usuario debe tener más de 10 caracteres');
                return;
            }
        }
    }
    var extranos = "!¡<>«#$%&‘()*+,-_@:;./´'¿?[]{}";

    function tiene_extranos(texto) {
        for (i = 0; i < texto.length; i++) {
            if (extranos.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }
    if (tiene_extranos(usuario) != 0) {
        alert('El usuario no puede tener caracteres extraños');
        return;
    }
    //Contraseña

    var password = document.getElementById('CcPaswd').value;

    if (password.length == 0) {
        alert('El campo Contraseña está vacío');
        return;
    }
    else {
        if (password.length > 20) {
            alert('El campo Contraseña debe tener maximo 20 caracteres');

        }
        else {
            if (password.length < 10) {
                alert('El campo Contraseña debe tener más de 10 caracteres');
                return;
            }
        }
    }

    let datos = [
        {
            'dato': "0123456789",
            "texto": "La contraseña debe contener por lo menos un numero"
        },
        {
            'dato': "abcdefghyjklmnñopqrstuvwxyz",
            "texto": "La contraseña debe contener por lo menos una letra"
        },
        {
            'dato': "abcdefghyjklmnñopqrstuvwxyz",
            "texto": "La contraseña debe contener minúsculas"
        },
        {
            'dato': "ABCDEFGHYJKLMNÑOPQRSTUVWXYZ",
            "texto": "La contraseña debe contener mayúsculas"
        },
        {
            'dato': "#%/&",
            "texto": "La contraseña debe contener por lo menos un carácter especial [#,%,/,&]"
        }
    ]

    function General(texto, ubi) {

        for (i = 0; i < texto.length; i++) {
            if (datos[ubi].dato.indexOf(texto.charAt(i), 0) != -1) {
                return 1;
            }
        }
        return 0;
    }


    for (let i = 0; i < 5; i++) {
        if (General(password, i) == 0) {
            alert(datos[i].texto);
            return;
        }
    }

    var password2 = document.getElementById('CcPaswd2').value;

    if (password != password2) {
        alert('Las contraseñas no coinciden');
    }

    //----------Email----------

    var email = document.getElementById('Email').value;
    if (email.length == 0) {
        alert('El campo Email está vacío');
        return;
    }
    else {
        if (email.length > 120) {
            alert('El campo Email solo puede contener 120 caracteres');
            return;
        }
    }
    this.submit();
}