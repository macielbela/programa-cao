let CNH = prompt("você tem CNH? (tem / não tem)");
let idade = parseInt(prompt("insira sua idade:"));

if (CNH == "não tem" && idade >= 18) {
    console.log("você é maior de idade, mas não tem CNH. não pode dirigir!");
    alert("você é maior de idade, mas não tem CNH. não pode dirigir!");

} else if (CNH == "tem" && idade >= 18) {
    console.log("você é maior de idade e tem CNH. pode dirigir!");
    alert("você é maior de idade e tem CNH. pode dirigir!");

} else {
    console.log("você não tem idade nem CNH. não pode dirigir.");
    alert("você não tem idade, nem CNH. não pode dirigir.");
}