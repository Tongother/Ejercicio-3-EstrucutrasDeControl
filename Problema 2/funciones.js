const numero1 = parseInt(prompt("Por favor, coloque un número entre el 1 y el 50"));
const numero2 = parseInt(prompt("Por favor, coloque un segundo número entre el 1 y el 50"));
let contador=1;
while(contador<=50){
    console.log(contador);
    if(contador==numero1){
        console.log("¡Lotería!");
    }
    if(contador==numero2){
        console.log("¡Lotería!");
    }
    contador++;
}
