const notaPassar= 7.0;
const frequenciaPassar= 75;

let nota= parseFloat(prompt("insira sua nota"));
let frequencia= parseFloat(prompt("insira sua frequência"));

if (nota>=notaPassar && frequencia>=frequenciaPassar) {
    alert(`você foi aprovado.`)
}
else {
    alert(`você nâo alcançou a média e/ou a frequência.`)
}
