function carregar(){
    let msg = window.document.getElementById(`msg`)
    let img = window.document.getElementById(`imagem`)
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 6 && hora < 12) {
        img.src = `manha.jpg`
        document.body.style.backgroundColor = `#F2EBC4`
    } else if (hora >= 12 && hora < 18) {
        img.src = `tarde.jpg`
        document.body.style.backgroundColor = `#F29877`
    } else{
        img.src = `noite.jpg`
        document.body.style.backgroundColor = `#023059`
    }
}