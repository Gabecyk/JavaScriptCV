function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bh.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jh.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'ah.jpg')
            }
            else {
                img.setAttribute('src', 'ih.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bm.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jm.jpg')
            }
            else if (idade < 50) {
                img.setAttribute('src', 'am.jpg')
            }
            else {
                img.setAttribute('src', 'im.jpg')      
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}