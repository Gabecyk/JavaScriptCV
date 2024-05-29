function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
    }
    else if (hora >= 13 && hora < 18){
        img.src = 'tarde.jpg'
        document.body.style.background = '#eec281'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = '#1620a7dc'
    }
}