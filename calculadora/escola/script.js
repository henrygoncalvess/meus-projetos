var tela = document.getElementById('tela')
var igual = document.getElementById('igual')
function cliquei(num=''){
    igual.innerHTML = '<br>'
    tela.innerText += num
    if (num == 11){
        tela.innerText = ''
    }
    if (num == '%'){
        tela.innerText = tela.innerText.replace('%', ' ')
        tela.innerText += '/100'
    }
}

function calcular(){
    var resultado = eval(tela.innerText)
    igual.innerText = resultado
    tela.innerText = ''
}