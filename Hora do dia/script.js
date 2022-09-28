function carregar() {
    var horas = document.getElementById("horas")
    var imagem  = document.getElementById("imagem")
    var horasystem = new Date()
    var systemhour = horasystem.getHours()

    if (systemhour>6 && systemhour<=12){
        horas.innerHTML = `Agora são ${systemhour} horas. Bom dia!!`
        imagem.style.backgroundImage = 'url("imagens/dia.jpg")'
        document.body.style.backgroundColor = "#c9c696"
    }
    else if (systemhour>12 && systemhour<=18) {
        horas.innerHTML = `Agora são ${systemhour} horas. Boa tarde`
        imagem.style.backgroundImage = 'url("imagens/tarde.jpg")'
        document.body.style.backgroundColor ="#b49158"

    }
    else {
        horas.innerHTML = `Agora são ${systemhour} horas. Boa noite`
        imagem.style.backgroundImage = 'url("imagens/noite.jpg")'
        document.body.style.backgroundColor = "#3b3a3a"
    } 
}


    