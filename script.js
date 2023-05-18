function Calcular() {
    let txtIdade = document.getElementById('txtIdade');
    let res = document.getElementById('res');
    let idade = Number(txtIdade.value);
    let fsex = document.getElementsByName('radsex');
    res.innerHTML = '';
    let img = document.createElement('img');
    img.setAttribute('id' , 'foto');
    
    
  if(txtIdade.value.length == 0){ 
        alert(`[ERRO] Verifique os dados e tente novamente!`)
  }else{
      if(fsex[0].checked && idade >= 65 ){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos homem com ${idade} anos que é APOSENTADO`;
        img.setAttribute('src', 'foto-idoso-m.png');
        res.appendChild(img); //Adiciona a imagem 
      }else if(fsex[1].checked && idade >= 60){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos mulher de ${idade} anos que é APOSENTADA`;
        img.setAttribute('src', 'foto-idoso-f.png' );
        res.appendChild(img);
      }else if(fsex[0].checked && idade >= 13 && idade <= 18 ){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos jovem de ${idade} anos que é ADOLESCENTE`;
        img.setAttribute('src', 'foto-jovem-m.png');
        res.appendChild(img);
      }else if(fsex[1].checked && idade >= 13 && idade <= 18 ){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos jovem de ${idade} anos que é ADOLESCENTE`;
        img.setAttribute('src', 'foto-jovem-f.png');
        res.appendChild(img);
          
      }else if(fsex[0].checked && idade < 13){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos menino de ${idade} anos que é CRIANÇA`;
        img.setAttribute('src', 'foto-bebe-m.png');
        res.appendChild(img);
    
      }else if(fsex[1].checked && idade < 13){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos menina de ${idade} anos que é CRIANÇA`;
        img.setAttribute('src', 'foto-bebe-f.png');
        res.appendChild(img);
      }else if(fsex[0].checked && idade > 18 && idade < 65){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos homem de ${idade} anos que é ADULTO`;
        img.setAttribute('src', 'foto-adulto-m.png');
        res.appendChild(img);
      }else if(fsex[1].checked && idade >18 && idade < 60){
        res.style.textAlign = 'center';
        res.innerHTML += `Detectamos mulher de ${idade} anos que é ADULTA`;
        img.setAttribute('src', 'foto-adulto-f.png');
        res.appendChild(img);
      }
  }  
} 

    


    
