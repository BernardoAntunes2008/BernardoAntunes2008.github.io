<<<<<<< HEAD
let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");
botao.onclick = function()
{
    let data = document.getElementById("data").value;
    let dataDois = document.getElementById("data2").value;
    let ArrayDeDataDois = dataDois.split("-");
    let ArrayDeData = data.split("-");
    let ArrayNumDeData = [0,0,0];
    let ArrayNumDeDataDois = [0,0,0];
    ArrayNumDeData[2] = parseInt(ArrayDeData[2]);
    ArrayNumDeDataDois[2] = parseInt(ArrayDeDataDois[2]);
    let dias = ArrayNumDeDataDois[2] - ArrayNumDeData[2];
    let semanas = Math.round(dias/7);
    resultado.innerHTML = "São "+semanas+" semanas de diferença";
=======
let botao = document.getElementById("botao");
let resultado = document.getElementById("resultado");
botao.onclick = function()
{
    let data = document.getElementById("data").value;
    let dataDois = document.getElementById("data2").value;
    let ArrayDeDataDois = dataDois.split("-");
    let ArrayDeData = data.split("-");
    let ArrayNumDeData = [0,0,0];
    let ArrayNumDeDataDois = [0,0,0];
    ArrayNumDeData[2] = parseInt(ArrayDeData[2]);
    ArrayNumDeDataDois[2] = parseInt(ArrayDeDataDois[2]);
    let dias = ArrayNumDeDataDois[2] - ArrayNumDeData[2];
    let semanas = Math.round(dias/7);
    resultado.innerHTML = "São "+semanas+" semanas de diferença";
>>>>>>> 47368170747e792ee9a2029c77f6c93d623926a4
}