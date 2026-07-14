let altura= parseFloat(prompt("insira sua altura (em metros):"));
let genero= prompt("insira seu gênero (F ou M)").toUpperCase();
let pesoIdeal;
if (sexo==="M") {
    pesoIdeal=(72.7*altura) - 58;
} 
else if (sexo==="F") {
    pesoIdeal=(62.1*altura)  - 44.7;
}
 else {
    alert("gênero inválido! digite F ou M");
}

if (pesoIdeal!== undefined) {
   alert("o seu peso ideal é:" + pesoIdeal.toFixed(2) + "kg");
}