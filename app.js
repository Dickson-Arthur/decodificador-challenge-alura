let textoInput = document.querySelector("#input-texto");
let outInput = document.querySelector("#output");

function criptografar() {
    let texto = textoInput.value;

    let resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    console.log(resultCripto);

    document.getElementById("output").innerHTML = '<textarea readonly id="output-texto">' + resultCripto + '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar mensagem!</button>';
}

function descriptografar() {
    let texto = textoInput.value;

    let resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    console.log(resultDescripto);

    document.getElementById("output").innerHTML = '<textarea readonly id="output-texto">' + resultDescripto + '</textarea>' + '<button class="button-copiar" id="copiar" onclick="copiar()">Copiar mensagem!</button>';
}

function copiar() {
    let textoCopiado = document.getElementById("output-texto");

    textoCopiado.select();
    document.execCommand("copy");
    document.getElementById("copiar").innerHTML = "Texto Copiado!";
    limparInput();
}

function limparInput () {
    textoInput = document.querySelector("#input-texto");
    textoInput.value = "";
}