let botao = document.getElementById("botao");
botao.onclick = function()
{
    let dia = document.getElementById("dia").value;
    let m = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let para = document.getElementById("paragrafo");
    let Mes = "";
    if(m==1) Mes += "janeiro";
    else if(m==2) Mes +="fevereiro";
    else if(m==3) Mes += "março";
    else if(m==4) Mes += "abril";
    else if(m==5) Mes += "maio";
    else if(m==6) Mes += "junho";
    else if(m==7) Mes += "julho";
    else if(m==8) Mes += "agosto";
    else if(m==9) Mes += "setembro";
    else if(m==10) Mes += "outubro";
    else if(m==11) Mes += "novembro";
    else if(m==12) Mes += "dezembro";
    para.innerHTML = dia+" de "+ Mes +" de "+ano;
}
