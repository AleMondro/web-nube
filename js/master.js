let usuario = document.getElementById('usuario');
let nombre = prompt('indique su nombre');
if (nombre==''){
    usuario.innerHTML = 'Bienvenid@ invitado';
    usuario.classList.add('destacado');
}else{
    usuario.innerHTML = `Bienvenid@ ${nombre}`;
    usuario.classList.add('destacado');
}

