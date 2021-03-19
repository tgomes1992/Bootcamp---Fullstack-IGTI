// variáveis
let filter = []

let resultados = document.querySelector("#result");
let estatisticas = document.querySelector("#dados");
let buscar = document.querySelector("#search");
let sub = document.querySelector("#sub");

// inclusão do event listener no botao de busca

sub.addEventListener("click", (event) => {
    event.preventDefault();
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
            picture: user.picture.medium,
            age: user.dob.age,
            gender: user.gender
        }
    })
    retorno = allusers.filter(user => {
        fullname = user.firstname.toLowerCase() + " " + user.lastname.toLowerCase()
        return fullname.includes(string)

    })

    retorno.forEach(user => {
        criar_user(user);
    })

    filter = [...retorno]

    console.log(filter);

    return allusers
};


getuser()



//funções que vão percorrer o dom
// função para criar usuários na página ( percorrendo o dom)

function criar_user(user) {
    usuario = document.createElement("li");
    usuario.classList.add("center", "card-panel", "blue", "lighten-5", "justify", "flex");
    usuario.textContent = user.firstname + " " + user.lastname + "," + user.age + " anos  ";
    imagem = document.createElement("img");
    imagem.src = user.picture;
    imagem.classList.add("responsive-img", "circle");

    usuario.append(imagem);

    resultados.append(usuario);

}

// função para criar estatísticas na página ( percorrendo o dom)



function criar_estatisticas() {
    masculino = document.createElement("li");
    masculino.classList.add("male");
    feminino = document.createElement("li");
    feminino.classList.add("female");
    somadasidades = document.createElement("li");
    somadasidades.classList.add("sumages");
    mediadasidades = document.createElement("li");
    mediadasidades.classList.add("ages")
    masculino.textContent = "Sexo Masculino: ";
    feminino.innerHTML = "Sexo feminino: ";
    somadasidades.innerHTML = "Soma das Idades: ";
    mediadasidades.innerHTML = "Media das Idades: ";
    estatisticas.append(masculino, feminino, somadasidades, mediadasidades);

}



function update_estatistics() {

}



function calculos(filter) {
    const sumages = filter.reduce((accumulator, current) => {
        return accumulator + current.age
    }, 0);
    const male = filter.filter(person => {
        return person.gender == "male"
    })
    const female = filter.filter(person => {
        return person.gender == "female"
    })
    const totalfilter = filter.length;
    const avg = (sumages / totalfilter).toFixed(2)
    return {
        "sumages": sumages,
        "male": male.length,
        "female": female.length,
        "avgages": avg
    }
}