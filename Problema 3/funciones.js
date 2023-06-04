let cantidad=parseInt(prompt("¿Cuántos numeros deseas guardar?")), contador=1;
let numeros= [];

while(contador<= cantidad){
    numeros[contador] = parseInt(prompt(`Coloca el número ${contador}`));
    console.log(numeros[contador]);
    contador++;
}
