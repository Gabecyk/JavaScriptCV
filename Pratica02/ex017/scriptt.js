document.getElementById('btn').addEventListener('click', pegaNum)
function pegaNum(){
    var num = document.getElementById('Num')
    var res = document.getElementById('tela')
    res.style.display = 'block'
    res.style.marginTop = '10px'
    if (num.value.length == 0){
        alert('Coloque um valor')
    }
    else {
        let num2 = Number(num.value)
        //var tela = document.getElementById('tela')
        tela.innerHTML = ``
        for (var i = 1; i <= 10; i++) { 
            var tel = document.createElement('option')
            tel.text = `${num2} x ${i} = ${num2*i}`
            tel.value = `tab${i}`
            res.appendChild(tel)
           // tela.innerHTML += `<option value="">${num2} x ${i} = ${num2 * i}</option>`
        }
    }
    
}