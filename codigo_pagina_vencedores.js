var ganhador = localStorage.getItem('Vencedor');

if (ganhador == "Empate"){
    document.getElementById('player') = "Deu velha!!!!! CORTEM-LHES AS CABEÇAS!!!!";
}else{
  document.getElementById('player').innerHTML = "Parabéns " + ganhador + ", você foi o grande ganhador!!!!"
};
