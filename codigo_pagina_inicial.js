const selecao = ['pergonagem_jogador1'];

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
  
    if (document.getElementById('danton').style.backgroundColor == cor){
      document.getElementById('danton').style.backgroundColor = "";
    };
  
    if (document.getElementById('napoleao').style.backgroundColor == cor){
      document.getElementById('napoleao').style.backgroundColor = "";
    };
  
    if (document.getElementById('robespierre').style.backgroundColor == cor){
      document.getElementById('robespierre').style.backgroundColor = "";
    };

    if (selecao[0] == "personagem_jogador1"){
      escolheu1[0] = true;
    }else if (selecao[0] == "personagem_jogador2"){
      escolheu2[0] = true;
    };

    if (personagem == "maria_antonieta"){
      document.getElementById('chibi').style.width = "100px";
    }else{
      document.getElementById('chibi').style.width = "120px";
    }

    if (personagem == "maria_antonieta"){
      document.getElementById('nome_da_pessoa').innerHTML = "Rainha Maria Antonieta";
      document.getElementById('datas_personagem').innerHTML = "(1755-1793)";
      document.getElementById('texto_personagem').innerHTML = "Foi uma arquiduquesa da Áustria, a esposa do rei Luís XVI e Rainha Consorte da França e Navarra de 1774 até a Revolução Francesa em 1792. Casou-se numa tentativa de estreitar os laços entre os dois inimigos históricos.<br><br>";
      document.getElementById('chibi').src = "rainha_chibi.png"
    }else if (personagem == "rei_luis_xvi"){
      document.getElementById('nome_da_pessoa').innerHTML = "Rei Luís XVI";
      document.getElementById('datas_personagem').innerHTML = "(1754-1793)";
      document.getElementById('texto_personagem').innerHTML = "Foi Rei da França e Navarra de 1774 até ser deposto em 1792 durante a Revolução Francesa, sendo executado no ano seguinte. A primeira parte de seu reinado foi marcada por tentativas de reformar a França, de acordo com os ideais iluministas.";
      document.getElementById('chibi').src = "rei_chibi.png"
    }else if (personagem == "olympe"){
      document.getElementById('nome_da_pessoa').innerHTML = "Olympe de Gouges";
      document.getElementById('datas_personagem').innerHTML = "(1748-1793)";
      document.getElementById('texto_personagem').innerHTML = "Foi uma dramaturga, ativista política, feminista e abolicionista francesa de importante atuação na Revolução Francesa. Escritora feminista de sua autoria alcançaram enorme audiência. Era uma defensora da democracia e dos direitos das mulheres.";
      document.getElementById('chibi').src = "olympe_chibi.png"
    }else if (personagem == "danton"){
      document.getElementById('nome_da_pessoa').innerHTML = "Georges Jacques Danton";
      document.getElementById('datas_personagem').innerHTML = "(1739-1806)";
      document.getElementById('texto_personagem').innerHTML = "Foi um advogado e político francês que se tornou uma figura destacada nos estágios iniciais da Revolução Francesa, Georges Jacques Danton foi um advogado e político francês que se tornou uma figura destacada nos estágios iniciais da Revolução Francesa. Apoiava os jacobinos que queriam a substituição de Luis XVI por Philippe d'Orleans. Era opositor de Robespierre";
      document.getElementById('chibi').src = "danton_chibi.png"
    }else if (personagem == "napoleao"){
      document.getElementById('nome_da_pessoa').innerHTML = "Napoleão Bonaparte";
      document.getElementById('datas_personagem').innerHTML = "(1743-1793)";
      document.getElementById('texto_personagem').innerHTML = "Estadista ,líder militar e General de Brigada que originalmente era opositor à Revolução, mas que após se aliar ao Grupo Jacobino foi se consolidando politicamente até o Golpe do 18 de Brumário";
      document.getElementById('chibi').src = "napoleao_chibi.png"
    }else if (personagem == "robespierre"){
      document.getElementById('nome_da_pessoa').innerHTML = "Maximilien de Robesppierre ";
      document.getElementById('datas_personagem').innerHTML = "(1758-1794)";
      document.getElementById('texto_personagem').innerHTML = "Foi um advogado e político francês e uma das personalidades mais importantes da Revolução Francesa. Tornou uma das principais figuras dos 'democratas' na Assembleia Constituinte, defendendo a abolição da pena de morte e da escravatura.";
      document.getElementById('chibi').src = "robespierre_chibi.png"
    }

    document.getElementById(personagem).style.backgroundColor = cor;

    localStorage.setItem(selecao[0], personagem);
  };


  if (escolheu1[0] == true && escolheu2[0] == true){
    document.getElementById('submeter_nomes').disabled = false;
  };
};

