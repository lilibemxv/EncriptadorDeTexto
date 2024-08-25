const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const mensajeInformativo = document.querySelector(".mensaje-informativo");

/*La letra "e" es convertida para "enter"
/La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    mensajeInformativo.style.display = textoEncriptado ? "none" : "block";

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada =stringEncriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase()

    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function btnCopiar() {
    mensaje.select(); // Selecciona el contenido del textarea
    document.execCommand('copy'); // Copia el contenido seleccionado al portapapeles
    alert("Texto copiado"); // Mensaje opcional para el usuario
}

function btnLimpiar() {
    mensaje.value = ""; // Limpia el contenido del textarea de mensaje
    mensaje.style.backgroundImage = ""; // Restablece el fondo si es necesario
    mensajeInformativo.style.display = "block"; // Muestra el mensaje informativo
}

document.querySelector(".limpiar").addEventListener("click", limpiar);
