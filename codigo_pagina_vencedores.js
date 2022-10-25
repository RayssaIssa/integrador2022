var ganhador = localStorage.getItem('Vencedor');

if (ganhador != "Empate"){
  document.getElementById('player').innerHTML = "Parabéns <label id='player' class='PW'></label> , você foi o grande ganhador!!!!";
}else{
  document.getElementById('player') = "Deu vleha!!!!! CORTEM-LHES AS CABEÇAS!!!!";
};
