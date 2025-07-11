const produtos = [
  { id: 1, nome: "Mouse", preco: 59.9, quantidade: 12 },
  { id: 2, nome: "Teclado", preco: 99.9, quantidade: 5 },
  { id: 3, nome: "Monitor", preco: 799.9, quantidade: 2 },
  { id: 4, nome: "Cabo HDMI", preco: 29.9, quantidade: 30 },
  { id: 5, nome: "Pen Drive", preco: 49.9, quantidade: 0 },
  { id: 6, nome: "Webcam", preco: 199.9, quantidade: 4 },
  { id: 7, nome: "SSD 240GB", preco: 299.9, quantidade: 6 },
  { id: 8, nome: "HD Externo", preco: 499.9, quantidade: 3 },
  { id: 9, nome: "Notebook", preco: 3499.9, quantidade: 1 },
  { id: 10, nome: "Suporte de Notebook", preco: 89.9, quantidade: 0 }
];


const buscarProduto = () => {
    
}

const listarProdutos = () => {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML= "<ul>";
    let i;
    for(i=0;i<produtos.length;i++)
    {
        resultado.innerHTML += "<li>Nome: " + produtos[i].nome + "<br>Preço: " + produtos[i].preco + "<br>Quantidade: " + produtos[i].quantidade + "<br></li>";
    }
    resultado.innerHTML += "</ul>";
}

const mostrarNomes = () => {
    const resultado = document.getElementById("resultado");
    let i;
    resultado.innerHTML = "<ul>";
    for(i=0;i<produtos.length;i++)
    {
        resultado.innerHTML += "<li>" + produtos[i].nome + "</li>";
    }
    resultado.innerHTML += "</ul>";
}

const calcularTotal = () => {
    const resultado = document.getElementById("resultado");
    let i;
    let tam=produtos.length;
    let conta = 0;
    for(i=0;i<tam;i++)
    {
        conta += (produtos[i].preco * produtos[i].quantidade);
    }
    resultado.innerHTML = "O valor total é de: " + Math.round(conta) + " reais.";
}

const verificarEsgotados = () => {
    const resultado = document.getElementById("resultado");
    let i;
    resultado.innerHTML = "";
    let tam=produtos.length;
    for(i=0;i<tam;i++)
    {
        if(produtos[i].quantidade===0)
        {
            resultado.innerHTML += "Não há " + produtos[i].nome + " no estoque.<br>";
        }
    }
}

const verificarPrecos = () => {

}