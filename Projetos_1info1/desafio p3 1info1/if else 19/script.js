let prova= parseFloat(prompt("insira sua nota da prova técnica (0 a 100):"));
let entrevista= parseFloat(prompt("insira sua nota na entrevista (0 a 100):"));
let artigos= parseFloat(prompt("insira sua quantidade de arquivos:"));

if (prova>=80 && entrevista>=70 && artigos>=2) {
    alert(`parabéns! contratação imediata! sua média é ${(prova+entrevista)/2 .toFixed(2)}`);
}
else if ((prova+entrevista/2) >= 75 && artigos>=1) {
    alert(`você está no banco de talentos! sua média é  ${(prova+entrevista)/2 .toFixed(2)}}`);
}
else {
    alert(`i'm sorry, você não foi selecionado! sua média é  ${(prova+entrevista)/2 .toFixed(2)}}`);
}