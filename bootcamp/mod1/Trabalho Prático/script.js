let number = document.querySelector("#numberrange");
let numberi = document.querySelector("#number");
let numbert = document.querySelector("#numbert");

function ranges() {
    numberi.value = number.value;
    numbert.value = numeroextenso(number.value);
}


window.addEventListener('load', () => {
    number.value = 344;
    ranges();
})


number.onchange = () => {
    ranges()
    console.log(number.value)
}

function numeroextenso(numero) {

    if (numero.length == 1) {
        console.log("verdadeiro")
        return umacasa(numero)
    } else if (numero.length == 2) {
        console.log("duas casas")
        return duascasas(numero)
    } else if (numero.length == 3) {
        console.log("trescasas")
        return trescasas(numero)

    }
}

function umacasa(numero) {
    let valor = new Array("zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove")
    extenso = valor[numero]
    return extenso
}


function duascasas10(numero) {
    let parte1 = numero.toString().substring(0, 1)
    let parte2 = numero[1]
    if (parte2 == 0) {
        return "dez"
    } else if (parte2 > 0) {
        let valores = new Array("onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove")
        let extenso = valores[parte2 - 1]
        return extenso
    }

}


function duascasas(numero) {
    let parte1 = numero[0]
    let parte2 = numero[1]
    let dezena = new Array("vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa")
    let junto = " e "
    let unidade = junto + umacasa(parte2)
    if (parte2 == 0) {
        unidade = "";
        junto = "";
    }
    let extenso2 = "";
    let extenso1 = "";

    let extenso = extenso1 + extenso2
    if (parte1 == 1) {
        extenso1 = duascasas10(numero)
        return extenso1;
    } else if (parte1 > 1) {
        extenso1 = dezena[parte1 - 2];
        console.log(extenso1)
    }

    return extenso1 + unidade;

}


function trescasas(numero) {
    let parte1 = numero[0];
    let parte2 = numero.toString().substring(1, 3);
    let centena = new Array("cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos")
    let junto = " e "
    let extenso1 = centena[parte1 - 1]
    let extenso2 = junto + duascasas(parte2)
    if (extenso2 == junto) {
        extenso2 = "";
        console.log(extenso2)
    }

    if (numero == 100) {
        extenso1 = "cem";
        extenso2 = "";
        junto = "";
    }

    return extenso1 + extenso2
}