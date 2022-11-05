const selecao = ['pergonagem_jogador1']

escolheu1 = [false];
escolheu2 = [false];

function ativar(){
  localStorage.setItem('user1_nome', document.getElementById('user').value);
  localStorage.setItem('user2_nome', document.getElementById('user2').value);
};

function mudar_selecao(jogador){
  if (jogador == "personagem_jogador1"){
    selecao[0] = "personagem_jogador1";
  }else{
    selecao[0] = "personagem_jogador2";
  }
};

function selecionar_personagem(personagem){
  var cor;
  if (selecao[0] == "personagem_jogador1"){
    cor = "rgb(67, 10, 32)";
  }else{
    cor = "rgb(154, 130, 95)";
  };

  if (document.getElementById(personagem).style.backgroundColor == "" || document.getElementById(personagem).style.backgroundColor == "#E4C99F"){
    if (document.getElementById('maria_antonieta').style.backgroundColor == cor){
      document.getElementById('maria_antonieta').style.backgroundColor = "";
    };
  
    if (document.getElementById('rei_luis_xvi').style.backgroundColor == cor){
      document.getElementById('rei_luis_xvi').style.backgroundColor = "";
    };
  
    if (document.getElementById('olympe').style.backgroundColor == cor){
      document.getElementById('olympe').style.backgroundColor = "";
    };
  
    if (document.getElementById('sanson').style.backgroundColor == cor){
      document.getElementById('sanson').style.backgroundColor = "";
    };
  
    if (document.getElementById('marat').style.backgroundColor == cor){
      document.getElementById('marat').style.backgroundColor = "";
    };
  
    if (document.getElementById('robespierre').style.backgroundColor == cor){
      document.getElementById('robespierre').style.backgroundColor = "";
    };

    if (selecao[0] == "personagem_jogador1"){
      escolheu1[0] = true;
    }else if (selecao[0] == "personagem_jogador2"){
      escolheu2[0] = true;
    };

    document.getElementById(personagem).style.backgroundColor = cor;

    localStorage.setItem(selecao[0], personagem);
  };


  if (escolheu1[0] == true && escolheu2[0] == true){
    document.getElementById('submeter_nomes').disabled = false;
  };
};
