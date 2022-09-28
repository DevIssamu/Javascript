function verificar() {
    var ano = new Date()
    var anosystem = ano.getFullYear()
    var anoNasc = document.getElementById("anoNasc")
    var idade = anosystem-Number(anoNasc.value)
    var res = document.getElementById("res")

    if (anoNasc.value.length==0 || anoNasc.value>anosystem){
        window.alert (`[ERRO] Verifique os dados e tente novamente`)
    }
    else if (idade>=0 && idade<18){
        res.innerHTML = `Você tem ${idade} anos. Você ainda é adolescente`
    }
    else if (idade>=18 && idade<60) {
        res.innerHTML = `Você tem ${idade} anos. Você é um adulto`
    }
    else {
        res.innerHTML = `Você tem ${idade} anos. Você já é um idoso`
    }
    
    
}




