const resposta = document.getElementById("resposta");
resposta.innerHTML = "";
let i;
function Genero_Filme(genero)
{
    let texto="";
    for(i=0;i<genero.length();i++)
        {
            texto+=`<li>${genero[i]}</li>`;
        }
    return texto;
}
function Opinioes_Filme(opiniao)
{
    let texto = "";
    for(i=0;i<opiniao.length();i++)
    {
        texto+= `<p>Rating: ${opiniao[i].rating}</p><br>`;
        texto+= `<p>Descricao: ${opiniao[i].descricao}</p><br>`;
    }
    return texto;
}
function Texto_Filme(filme)
{
    let texto = `<div id="capsula">
    <p>Nome: ${filme.titulo}</p><br>
    <p>Resumo: ${filme.resumo}</p><br>
    <ul>Gêneros: ${Genero_Filme(filme.generos)}</ul><br>
    <ul>Títulos Semelhantes: ${Genero_Filme(filme.titulosSemelhantes)}</ul><br>
    <p>Classificação: ${filme.classificacao}</p><br>
    <p>Figura: <img src="${filme.figura}" alt="Imagem"> </p><br>
    <ul>Elenco: ${Genero_Filme(filme.elenco)} </ul><br>
    <ul>Avaliações: ${Opinioes_Filme(filme.opinioes)}</ul><br>
    </div>`;
    return texto;
}
resposta.innerHTML = "<table>"; 
for(i=0;i<produtos.length();i++)
{
    resposta.innerHTML += `<tr><td>${Texto_Filme(produtos[i])}</td></tr>`;
}
resposta.innerHTML += "</table>";