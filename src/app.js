//criptografia
function criptografia() {
    const fraseNormal = "teste de palavras obita iris";
    const palavrasNormais = fraseNormal.split(" ");
    
    let arrayPalavraCriptografada = [];
    for (let palavra of palavrasNormais){
        let letraE = palavra.replace(/e/g, "enter");
        let letraI = letraE.replace(/i/g, "ines");
        let letraA = letraI.replace(/a/g, "ai");
        let letraO = letraA.replace(/o/g, "ober");
        let letraU = letraO.replace(/u/g, "ufar");
        arrayPalavraCriptografada.push(letraU);
    }
    let palavraCripto = arrayPalavraCriptografada.join(" ");
    return palavraCripto;
}

//descriptografia
function descriptografia() {
    const fraseCriptografada = "tenterstenter denter pailaivrais oberbinestai inesriness";
    const palavrasCriptografadas = fraseCriptografada.split(" ");

    let arrayDePalavraDescriptografada = [];
    for (let palavra of palavrasCriptografadas) {
        let letraE = palavra.replace(/enter/g, "e");
        let letraI = letraE.replace(/ines/g, "i");
        let letraA = letraI.replace(/ai/g, "a");
        let letraO = letraA.replace(/ober/g, "o");
        let letraU = letraO.replace(/ufar/g, "u");
        arrayDePalavraDescriptografada.push(letraU);
    }
    let palavraDescriptografada = arrayDePalavraDescriptografada.join(" ");
    return palavraDescriptografada

}
console.log(descriptografia());