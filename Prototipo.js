const quem_joga = ['X'];
const casa1 = [
    document.getElementById('9').innerHTML,
    document.getElementById('10').innerHTML,
    document.getElementById('11').innerHTML,
    document.getElementById('12').innerHTML,
    document.getElementById('13').innerHTML,
    document.getElementById('14').innerHTML,
    document.getElementById('15').innerHTML,
    document.getElementById('16').innerHTML,
    document.getElementById('17').innerHTML,
]

function clicou(casa){
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
    console.log(casa1);

    if (quem_joga[0] == "X"){
        quem_joga[0] = "O";
        document.getElementById("vez").innerHTML = "Vez do O";
    } else {
        quem_joga[0] = "X";
        document.getElementById("vez").innerHTML = "Vez do X";
    }
};
