let palabras = [], cantidad= parseInt(prompt("¿Cuántas palabras desea escribir?")), contador=1;

while(contador<= cantidad){
    palabras[contador] = prompt(`Escriba la palabra número ${contador}`);
    contador++;
}

const oracion = palabras.join(" ");
alert(`Aquí tiene su oración: ${oracion}`);

let letras = [], cantidad2= parseInt(prompt("¿Cuántas letras tiene su palabra")), contador2=1;

while(contador2<= cantidad2){
    letras[contador2] = prompt(`Escriba la letra número ${contador2}`);
    contador2++;
}

const palabra = letras.join("");
alert(`Aquí tiene su oración: ${palabra}`);


