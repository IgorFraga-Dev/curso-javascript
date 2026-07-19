function carregar () {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date ()
var hora  = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0   && hora < 12) {
        msg.innerHTML = 'Bom dia'
        img.src = 'imagens - Copia/manha.jpg'
        document.body.style.background ='#00bfff'
    }
    else if (hora >=12 && hora <= 18) {
     msg.innerHTML = 'Boa Tarde'
     document.body.style.background = '#FF7A00'
    }
    else {
        msg.innerHTML = 'boa noite'
        img.src = 'imagens - Copia/noite.jpg'
        document.body.style.background = '#0b1320'
    }
}