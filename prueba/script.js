let valorContador = 0

function incrementar() {
    valorContador++;
    actualizarContador();
}

function disminuir() {
    valorContador--;
    actualizarContador();
}

function actualizarContador(){

    document.getElementById("contador").innerHTML = valorContador;
}