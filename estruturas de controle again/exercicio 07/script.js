let valorInicial= parseInt(prompt("insira o valor inicial do relógio:"));
let valorFinal= parseInt(prompt("insira o valor final do relógio:"));
let valorkWh= parseFloat(prompt("Insira o valor do kWh até o consumo de 150 (em R$):"))
let consumo= valorFinal- valorInicial;
let fatura

if (consumo<=150) {
    fatura= consumo*valorkWh;
}
 else {
    let ultrapassa= consumo-150;
    fatura= (150*valorkWh)+(ultrapassa*valorkWh*1.20)

}