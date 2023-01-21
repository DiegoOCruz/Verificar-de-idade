function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fAno = document.getElementById('txtano');
    let res = document.getElementById('res');
    if (fAno.value.length == 0 || fAno.value > ano){
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else{
        let fSex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        let genero = "";
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fSex[0].checked) {
            genero = "masculino";
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menino.jpg');
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'img/jovemH.jpg');
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'img/AdultoH.jpg');
            } else{
                //idoso
                img.setAttribute('src', 'img/velho.jpg');
            }
        } else{
            genero = "feminino"
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/menina.jpg');
            } else if (idade < 21 ){
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg');
            } else if ( idade < 50){
                //adulto
                img.setAttribute('src', 'img/AdutoM.jpg');
            } else{
                //idoso
                img.setAttribute('src', 'img/velha.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Voce é do sexo ${genero} e possui ${idade} anos`;
        res.appendChild(img);
    } 
}