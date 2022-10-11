const quem_joga = ['X'];
const casas = [
    [document.getElementById('9').innerHTML,
    document.getElementById('10').innerHTML,
    document.getElementById('11').innerHTML,
    document.getElementById('12').innerHTML,
    document.getElementById('13').innerHTML,
    document.getElementById('14').innerHTML,
    document.getElementById('15').innerHTML,
    document.getElementById('16').innerHTML,
    document.getElementById('17').innerHTML],

    [document.getElementById('18').innerHTML,
    document.getElementById('19').innerHTML,
    document.getElementById('20').innerHTML,
    document.getElementById('21').innerHTML,
    document.getElementById('22').innerHTML,
    document.getElementById('23').innerHTML,
    document.getElementById('24').innerHTML,
    document.getElementById('25').innerHTML,
    document.getElementById('26').innerHTML]
]

const casa2 = [
    document.getElementById('18').innerHTML,
    document.getElementById('19').innerHTML,
    document.getElementById('20').innerHTML,
    document.getElementById('21').innerHTML,
    document.getElementById('22').innerHTML,
    document.getElementById('23').innerHTML,
    document.getElementById('24').innerHTML,
    document.getElementById('25').innerHTML,
    document.getElementById('26').innerHTML,
]

function clicou_antigo(casa){
    console.log(casa);
    if (quem_joga[0] == "X"){
        if (document.getElementById(casa).innerHTML == ""){
            document.getElementById(casa).innerHTML = "X";
        }else{
            alert('Erro: A casa já está ocupada')
            return
        }
    } else{
        if (document.getElementById(casa).innerHTML == ""){
            document.getElementById(casa).innerHTML = "O";
        }else{
            alert('Erro: A casa já está ocupada')
            return
        }
    }

    casa1[0] = document.getElementById('9').innerHTML;
    casa1[1] = document.getElementById('10').innerHTML;
    casa1[2] = document.getElementById('11').innerHTML;
    casa1[3] = document.getElementById('12').innerHTML;
    casa1[4] = document.getElementById('13').innerHTML;
    casa1[5] = document.getElementById('14').innerHTML;
    casa1[6] = document.getElementById('15').innerHTML;
    casa1[7] = document.getElementById('16').innerHTML;
    casa1[8] = document.getElementById('17').innerHTML;
    

    if ((casa1[0] == "X" && casa1[1] == "X" && casa1[2] == "X") || (casa1[0] == "O" && casa1[1] == "O" && casa1[2] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    }else if ((casa1[3] == "X" && casa1[4] == "X" && casa1[5] == "X") || (casa1[3] == "O" && casa1[4] == "O" && casa1[5] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    }else if ((casa1[6] == "X" && casa1[7] == "X" && casa1[8] == "X") || (casa1[6] == "O" && casa1[7] == "O" && casa1[8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    }else if ((casa1[0] == "X" && casa1[3] == "X" && casa1[6] == "X") || (casa1[0] == "O" && casa1[3] == "O" && casa1[6] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    }else if ((casa1[1] == "X" && casa1[4] == "X" && casa1[7] == "X") || (casa1[1] == "O" && casa1[4] == "O" && casa1[7] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        return
        document.getElementById('0').innerHTML = quem_joga[0];
    }else if ((casa1[2] == "X" && casa1[5] == "X" && casa1[8] == "X") || (casa1[2] == "O" && casa1[5] == "O" && casa1[8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    }else if ((casa1[0] == "X" && casa1[4] == "X" && casa1[8] == "X") || (casa1[0] == "O" && casa1[4] == "O" && casa1[8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    }else if ((casa1[2] == "X" && casa1[4] == "X" && casa1[6] == "X") || (casa1[2] == "O" && casa1[4] == "O" && casa1[6] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('0').innerHTML = quem_joga[0];
        return
    };

    if (quem_joga[0] == "X"){
        quem_joga[0] = "O";
        document.getElementById("vez").innerHTML = "Vez do O";
    } else {
        quem_joga[0] = "X";
        document.getElementById("vez").innerHTML = "Vez do X";
    }
};

const clicavel = [
    ["sim","sim","sim","sim","sim","sim","sim","sim","sim"],
    ["sim","sim","sim","sim","sim","sim","sim","sim","sim"]
]

function clicou(casa){

    /* Comandos para poder jogar o jogo naturalmente */
    console.log(casa);
    console.log(clicavel);
    if (quem_joga[0] == "X"){
        if (document.getElementById(casa).innerHTML == ""){
            document.getElementById(casa).innerHTML = "X";
        }else{
            alert('Erro: A casa já está ocupada');
            return;
        }
    } else{
        if (document.getElementById(casa).innerHTML == ""){
            document.getElementById(casa).innerHTML = "O";
        }else{
            alert('Erro: A casa já está ocupada');
            return;
        };
    };

    /* atualizar o array de catalogo */
    casas[0][0] = document.getElementById('9').innerHTML;
    casas[0][1] = document.getElementById('10').innerHTML;
    casas[0][2] = document.getElementById('11').innerHTML;
    casas[0][3] = document.getElementById('12').innerHTML;
    casas[0][4] = document.getElementById('13').innerHTML;
    casas[0][5] = document.getElementById('14').innerHTML;
    casas[0][6] = document.getElementById('15').innerHTML;
    casas[0][7] = document.getElementById('16').innerHTML;
    casas[0][8] = document.getElementById('17').innerHTML;

    casas[1][0] = document.getElementById('18').innerHTML;
    casas[1][1] = document.getElementById('19').innerHTML;
    casas[1][2] = document.getElementById('20').innerHTML;
    casas[1][3] = document.getElementById('21').innerHTML;
    casas[1][4] = document.getElementById('22').innerHTML;
    casas[1][5] = document.getElementById('23').innerHTML;
    casas[1][6] = document.getElementById('24').innerHTML;
    casas[1][7] = document.getElementById('25').innerHTML;
    casas[1][8] = document.getElementById('26').innerHTML;

    /* sistema de ganhar */

    if ((casas[1][0] == "X" && casas[1][1] == "X" && casas[1][2] == "X") || (casas[1][0] == "O" && casas[1][1] == "O" && casas[1][2] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][3] == "X" && casas[1][4] == "X" && casas[1][5] == "X") || (casas[1][3] == "O" && casas[1][4] == "O" && casas[1][5] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][6] == "X" && casas[1][7] == "X" && casas[1][8] == "X") || (casas[1][6] == "O" && casas[1][7] == "O" && casas[1][8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][0] == "X" && casas[1][3] == "X" && casas[1][6] == "X") || (casas[1][0] == "O" && casas[1][3] == "O" && casas[1][6] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][1] == "X" && casas[1][4] == "X" && casas[1][7] == "X") || (casas[1][1] == "O" && casas[1][4] == "O" && casas[1][7] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][2] == "X" && casas[1][5] == "X" && casas[1][8] == "X") || (casas[1][2] == "O" && casas[1][5] == "O" && casas[1][8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][0] == "X" && casas[1][4] == "X" && casas[1][8] == "X") || (casas[1][0] == "O" && casas[1][4] == "O" && casas[1][8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[1][2] == "X" && casas[1][4] == "X" && casas[1][6] == "X") || (casas[1][2] == "O" && casas[1][4] == "O" && casas[1][6] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    };

    if ((casas[0][0] == "X" && casas[0][1] == "X" && casas[0][2] == "X") || (casas[0][0] == "O" && casas[0][1] == "O" && casas[0][2] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][3] == "X" && casas[0][4] == "X" && casas[0][5] == "X") || (casas[0][3] == "O" && casas[0][4] == "O" && casas[0][5] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][6] == "X" && casas[0][7] == "X" && casas[0][8] == "X") || (casas[0][6] == "O" && casas[0][7] == "O" && casas[0][8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][0] == "X" && casas[0][3] == "X" && casas[0][6] == "X") || (casas[0][0] == "O" && casas[0][3] == "O" && casas[0][6] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][1] == "X" && casas[0][4] == "X" && casas[0][7] == "X") || (casas[0][1] == "O" && casas[0][4] == "O" && casas[0][7] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][2] == "X" && casas[0][5] == "X" && casas[0][8] == "X") || (casas[0][2] == "O" && casas[0][5] == "O" && casas[0][8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('9').innerHTML = "";
        document.getElementById('10').innerHTML = "";
        document.getElementById('11').innerHTML = "";
        document.getElementById('12').innerHTML = "";
        document.getElementById('13').innerHTML = "";
        document.getElementById('14').innerHTML = "";
        document.getElementById('15').innerHTML = "";
        document.getElementById('16').innerHTML = "";
        document.getElementById('17').innerHTML = "";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][0] == "X" && casas[0][4] == "X" && casas[0][8] == "X") || (casas[0][0] == "O" && casas[0][4] == "O" && casas[0][8] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    }else if ((casas[0][2] == "X" && casas[0][4] == "X" && casas[0][6] == "X") || (casas[0][2] == "O" && casas[0][4] == "O" && casas[0][6] == "O")){
        document.getElementById("vez").innerHTML = quem_joga[0] + " GANHOU!!!!";
        document.getElementById('9').style.border = "none";
        document.getElementById('10').style.border = "none";
        document.getElementById('11').style.border = "none";
        document.getElementById('12').style.border = "none";
        document.getElementById('13').style.border = "none";
        document.getElementById('14').style.border = "none";
        document.getElementById('15').style.border = "none";
        document.getElementById('16').style.border = "none";
        document.getElementById('17').style.border = "none";
        document.getElementById('1').innerHTML = quem_joga[0];
        return
    };
    /*
    casas[0].forEach(function(casa){
        var indice = casas.indexOf(casa);
        var id = toString(indice+9);
        casas[0][indice] = document.getElementById('9').innerHTML=id;
    });
    casas[1].forEach(function(casa){
        var indice = casas.indexOf(casa);
        var id = toString(indice+18);
        casas[1][indice] = document.getElementById('18').innerHTML=id;
    });
    */
    
    console.log(casas);
    
    
    /*Comando para poder mudar entre X e O */

    if (quem_joga[0] == "X"){
        quem_joga[0] = "O";
        document.getElementById("vez").innerHTML = "Vez do O";
    } else {
        quem_joga[0] = "X";
        document.getElementById("vez").innerHTML = "Vez do X";
    }
};
