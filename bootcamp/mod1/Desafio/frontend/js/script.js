// variáveis


let resultados = document.querySelector("#result");
let estatisticas = document.querySelector("#dados");
let buscar = document.querySelector("#search");


// inclusão do event listener no botao de busca

buscar.addEventListener("keyup", () => {
    let buscaruser = getuser(buscar.value);


});


// 1° fomra de usar async e await 
function getusers() {
    fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(json => console.log(json[0].name));
}


// lembre-se que a na forma mas elegante o async vem antes 
// forma mais elegante para usar asyn e await

async function getuser(string) {
    const res = await fetch("http://localhost:3001/users");
    const json = await res.json();
    allusers = json.map(user => {
        const { firstname, lastname, picture, age, gender } = user;
        return {
            firstname: user.name.first,
            lastname: user.name.last,
            picture: user.picture.thumbnail,
            age: user.dob.age,
            gender: user.gender
        }
    })
    retorno = allusers.filter(user => {
        fullname = user.firstname.toLowerCase() + " " + user.lastname.toLowerCase()
        return fullname.includes(string)

    })
    setTimeout(() => {
        retorno.forEach(user => {
            criar_user(user);
        })


    }, 1000)

    calculos(retorno)

    console.log(retorno)

    return allusers
};


getuser()


// função para tratar o retorno do fetch



// fetch("http://localhost:3001/users").then(res => {
//     res.json().then(data => {
//         console.log(data)
//     })
// })



function shownames(data) {
    let names = {
        'first': data.name.first,
        'last': data.name.last,
    }
    console.log(names);

}



// getuser()



//funções que vão percorrer o dom
// função para criar usuários na página ( percorrendo o dom)

function criar_user(user) {
    usuario = document.createElement("li");
    imagem = document.createElement("img");
    imagem.src = user.picture;
    usuario.innerHTML = user.firstname + " " + user.lastname + "," + user.age + " anos";
    usuario.appendChild(imagem);
    resultados.append(usuario);

}

// função para criar estatísticas na página ( percorrendo o dom)



function criar_estatisticas() {
    masculino = document.createElement("li");
    feminino = document.createElement("li");
    somadasidades = document.createElement("li");
    mediadasidades = document.createElement("li");
    masculino.innerHTML = "Sexo Masculino: ";
    feminino.innerHTML = "Sexo feminino: ";
    somadasidades.innerHTML = "Soma das Idades: ";
    mediadasidades.innerHTML = "Media das Idades: ";
    estatisticas.append(masculino, feminino, somadasidades, mediadasidades)

}

criar_estatisticas();

function calculos(user) {
    let macho = 0;
    let femea = 0;
    let idades = 0;
    console.log(user.gender)
    user.forEach(item => {
        idades += item.age
        if (item.gender == "male") {
            macho = macho + 1;
        } else
        if (item.gender == "female") {
            femea = femea + 1
        }


    })
    console.log("macho: " + macho)
    console.log("femea: " + femea)
    console.log("idades: " + idades)

}



// to do

// -acertar requisição 
//criação do array no dom

// fazer os exercícios