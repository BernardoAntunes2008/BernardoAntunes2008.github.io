<<<<<<< HEAD
let botao = document.getElementById("botao");
botao.onclick = function()
{
    let frase = document.getElementById("frase").value;
    const para = document.querySelector("#paragrafo");
    let i;
    const w = frase.length;
    let j = frase.length;
    frase.split("");
    let NovaFrase="";
    for(i = 0 ; i < w; i++)
    {
        NovaFrase+=frase[j-1];
        j--;
    }
    para.innerHTML = NovaFrase;
}
=======
let botao = document.getElementById("botao");
botao.onclick = function()
{
    let frase = document.getElementById("frase").value;
    const para = document.querySelector("#paragrafo");
    let i;
    const w = frase.length;
    let j = frase.length;
    frase.split("");
    let NovaFrase="";
    for(i = 0 ; i < w; i++)
    {
        NovaFrase+=frase[j-1];
        j--;
    }
    para.innerHTML = NovaFrase;
}
>>>>>>> 47368170747e792ee9a2029c77f6c93d623926a4
