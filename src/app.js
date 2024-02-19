function criptografia() {
    let textoInput = document.getElementById("input__texto").value;
    const fraseDoInput = textoInput.split(" ");
    document.getElementById("resultado__imagens__mensagem").style.display = "none";

    let arrayPalavrasCriptografadas = [];
    for (let palavra of fraseDoInput){
        let letraE = palavra.replace(/e/g, "enter");
        let letraI = letraE.replace(/i/g, "ines");
        let letraA = letraI.replace(/a/g, "ai");
        let letraO = letraA.replace(/o/g, "ober");
        let letraU = letraO.replace(/u/g, "ufar");
        arrayPalavrasCriptografadas.push(letraU);
    }
    let fraseResultado = arrayPalavrasCriptografadas.join(" ");
    
    return resultado(fraseResultado);
}

function descriptografia() {
    let textoInput = document.getElementById("input__texto").value;
    const fraseDoInput = textoInput.split(" ");
    document.getElementById("resultado__imagens__mensagem").style.display = "none";

    let arrayDePalavrasDescriptografadas = [];
    for (let palavra of fraseDoInput) {
        let letraE = palavra.replace(/enter/g, "e");
        let letraI = letraE.replace(/ines/g, "i");
        let letraA = letraI.replace(/ai/g, "a");
        let letraO = letraA.replace(/ober/g, "o");
        let letraU = letraO.replace(/ufar/g, "u");
        arrayDePalavrasDescriptografadas.push(letraU);
    }
    let fraseResultado = arrayDePalavrasDescriptografadas.join(" ");
    
    return resultado(fraseResultado); 
}


function resultado(textoDeSaida) {
    let exibirTextoResultado = document.querySelector("p");
    exibirTextoResultado.innerHTML = textoDeSaida;
}

function copiar() {
    const selecionarCopia = document.getElementById("texto__output");
    navigator.clipboard.writeText(selecionarCopia.textContent)
}