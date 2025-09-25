const produtos = [
    {id:1,nome:"Café Expresso",preco:8.00, img:"https://blog.bicafebrasil.com.br/wp-content/uploads/2023/09/Capsulda-de-cafe-expresso.jpg"},
    {id:2,nome:"Capuccino",preco:12.00, img:"https://www.bongusto.ind.br/wp-content/uploads/2023/06/FRAPE-CAPUCCINO14.jpg"},
    {id:3,nome:"Suco de Laranja",preco:10.00, img:"https://www.citrosuco.com.br/wp-content/uploads/2022/02/THUMB-05.png"},
    {id:4,nome:"Água Mineral",preco:6.00, img:"https://www.delgo.com.br/imagens/como-e-feito-o-envase-de-agua-mineral.jpg"},
    {id:5,nome:"Fatia de Bolo",preco:12.00, img:"https://www.mococa.com.br/wp-content/uploads/2024/04/shutterstock_2336003215-1024x576.jpg"},
    {id:6,nome:"Sanduíche Natural",preco:15.00, img:"https://compactaprint.com.br/wp-content/uploads/2024/11/Receita-de-Sanduiche-Natural.jpg"},
    {id:7,nome:"Croissant",preco:17.00, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Croissant-Petr_Kratochvil.jpg/1200px-Croissant-Petr_Kratochvil.jpg"}
];

function geraCatalogo()
{
    let catalogo = document.getElementById("catalogo");
    produtos.forEach( element=>{
        catalogo.innerHTML += `<div class="produto_padrao" id="${element.id}">
                                    <p>${element.nome}</p>
                                    <img class="imagem_padrao" src="${element.img}" alt="${element.nome}">
                                    <p>Preço: R$${element.preco}</p>
                                    <button>Comprar</button>
                                </div>`;
    });
}

geraCatalogo();

const buscaProdutoEscolhidoPorId = id => produtos.find(prod => prod.id == id)

let carrinho = document.getElementById("carrinho");

let idaux = 0;

function adicionaNoCarrinho(escolhido)
{
    //console.log(escolhido);
    carrinho.innerHTML += `<div class="escolhido" id="${idaux}">
                    <img class="imagem_padrao" src="${escolhido.img}" alt="${escolhido.nome}">
                    <h4>${escolhido.nome}</h4>
                    <p>R$${escolhido.preco}</p>
                    <button class="remover">Remover</button>
    </div>`
    idaux++;
}

let total = document.getElementById("total");

let conta = 0;
let remover;

let catalogo = document.querySelector("#catalogo")
catalogo.addEventListener("click", (e) => {
    let caraQueFoiClicado = e.target
    let produtoEscolhidoId  = (caraQueFoiClicado.tagName == "DIV") ? caraQueFoiClicado.getAttribute("id"): caraQueFoiClicado.parentNode.getAttribute("id") 
    //console.log(buscaProdutoEscolhidoPorId(produtoEscolhidoId))
    let escolhido = buscaProdutoEscolhidoPorId(produtoEscolhidoId); 
    adicionaNoCarrinho(escolhido);
    if(conta==0)remover = document.querySelector("#remover");
    else {
        remover.onclick = function(){
            let caraQueFoiClicado = f.target;
            let produtoEscolhidoId  = caraQueFoiClicado.parentNode.getAttribute("id");
            console.log(produtoEscolhidoId);
            let selecionado = document.getElementById(produtoEscolhidoId);
            selecionado.remove();
        }
    }
    conta += escolhido.preco;
    total.innerHTML = `Total: ${conta} reais`;
})
/*
function Remover(f) {

    let caraQueFoiClicado = f.target;
    let produtoEscolhidoId  = caraQueFoiClicado.parentNode.getAttribute("id");
    console.log(produtoEscolhidoId);
    let selecionado = document.getElementById(produtoEscolhidoId);
    selecionado.remove();
};*/