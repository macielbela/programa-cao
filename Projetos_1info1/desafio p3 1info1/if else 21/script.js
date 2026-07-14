let valor= parseFloat(prompt("insira o valor da sua compra:"));
let compras= parseFloat(prompt("insira sua quantidade de compras:"));
let idade= parseFloat(prompt("insira a idade da sua conta em meses:"));

if (valor<2000 && idade>6) {
    alert(`compra segura!`);
}
else if (valor>2000 && valor<5000 || idade<6) {
    alert(`compra suspeita, cuidado!`);
}
else if (valor>5000 && idade<3 && compras<5){
    alert(`é uma possível fraude.`);
   
}