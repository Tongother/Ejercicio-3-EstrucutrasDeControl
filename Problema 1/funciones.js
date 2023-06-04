const usuarioNumero = parseInt(prompt("Por favor, coloque un número"));
let contador=0, index=0;
let arreglo = [];

while(contador<=usuarioNumero-5){
    contador = contador+5;
    arreglo[index]= contador;
    index++;
}

if(usuarioNumero.toString()!="NaN"){
    alert(`Los números multiplos hasta ${usuarioNumero} de 5 son: ${arreglo}`);
}
