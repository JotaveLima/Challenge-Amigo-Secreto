// Desafio do amigo secreto JotaveLima

let amigos = [];

function adicionarAmigo()
{
    let nomedoAmigo = document.querySelector('input').value;
    if (nomedoAmigo == '')
    {
      alert ("Por favor, insira um nome!");
    }else
    {
        let adicionarAmigos = amigos.push(nomedoAmigo);
        atualizarListadeamigos();
    }console.log(amigos);
     limparCampo();
}
function atualizarListadeamigos()
{
  let listaDeAmigos = document.getElementById("listaAmigos");
  listaDeAmigos.innerHTML = "";
  for(i=0; i < amigos.length; i++)
    {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}

function limparCampo()
{
  nomedoAmigo = document.querySelector('input');
  nomedoAmigo.value = '';
}


function sortearAmigo()
{
    if(amigos.length == 0)
        {
            alert("Adicione pelos menos um nome antes de sortear!");
            return;
        }
    //Criar o índice aleatório 
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    // Obter o nome do amigo sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    // Mostrar o resultado
    let resultado = document.getElementById("resultado");
    resultado.textContent = `Nome sorteado : ${amigoSorteado}`;
}
