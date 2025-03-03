let amigo = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if(!nomeAmigo) {
        alert("Por favor, insira um nome. ")
        return; 
    }
    amigo.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarlista();
}

function atualizarlista() {
 let listaAmigos = document.getElementById("listaAmigos");
 listaAmigos.innerHTML = "";

 for (let i = 0; i < amigo.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
 }
}

function sortearAmigo(){
    if (amigo.length === 0){
    alert("Nenhum amigo adicionado");
    return;
}

    let sorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`;

}
