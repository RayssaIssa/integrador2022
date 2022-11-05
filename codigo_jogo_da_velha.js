/*-----------------------------------------------------*/
/*-------------PERGUNTAS E RESPOSTAS-------------------*/
/*-----------------------------------------------------*/

const perguntas_danton = [
    "<i>Danton, famoso representante da revolução Francesa, era aliado de qual partido?</i><br><input name='resposta' type='radio' value='a'> Jacobinos<br><input name='resposta' type='radio' value='b'> Girondinos<br> <input name='resposta' type='radio' value='c'> Planície",
    "<i>Conhecido por ter uma eloquência invejável, Danton foi o responsável por vários discursos triunfantes. Um desses discursos foi responsável por dar fim a um período temoroso da revolução. Indique esse período.</i><br> <input name='resposta' type='radio' value='a'> Absolutismo Francês<br> <input name='resposta' type='radio' value='b'> Revolução Haitiana<br><input name='resposta' type='radio' value='c'> O Terror",
    "<i>Durante os primeiros anos da Revolução Francesa, Danton foi uma figura revolucionária e nomeada para vários cargos que teve sua fama variando de:</i><br><input name='resposta' type='radio' value='a'> Patriota e Caridoso para traidor e usurpador<br><input name='resposta' type='radio' value='b'> Corrupto e traidor para generoso e patriota<br><input name='resposta' type='radio' value='c'> Patriota corrupto para traidor corrupto"
];

const repostas_danton = [
    "a", "c", "b"
];

const perguntas_napoleao = [
    "<i>Sabendo que Napoleão Bonaparte foi a favor da Revolução Francesa e dos Jacobinos, quais foram as consequências da posição adotada por ele na revolução?</i><br><input name='repostas' type='radio' value='a'> Executado na guilhotina em praça pública<br><input name='repostas' type='radio' value='b'> Exilado para Inglaterra, acusado de traição à Coroa<br><input name='repostas' type='radio' value='c'> Preso em 1974 e solto posteriormente",
    "<i>Sabendo que Napoleão Bonaparte foi a favor da Revolução Francesa e dos Jacobinos, marque o principal grupo que o ajudou a dar o golpe político em 1799.</i><br><input name='resposta' type='radio' value='a'> Jacobinos<br><input name='resposta' type='radio' value='b'> Proto-burguesia<br><input name='resposta' type='radio' value='c'> Proletariado",
    "<i>Apesar de ter se tornado imperador da França em 1804 após a Revolução Francesa, Napoleão não nasceu em território continental francês, mas em uma das províncias do antigo Estado absolutista da França. Onde Bonaparte nasceu?</i><br><input name='resposta' type='radio' value='a'> Em Ajaccio, na Ilha de Córsega<br><input name='resposta' type='radio' value='b'> Em uma província da Guiana Francesa, colônia da França<br><input name='resposta' type='radio' value='c'> Em Braunau am Inn, na Áustria",
    "<i>Em 1804, na cerimônia de coroação de Napoleão Bonaparte, um fato inusitado ocorreu:</i><br><input name='resposta' type='radio' value='a'>Napoleão abdicou do trono, pois queria ser general do exército<br><input name='resposta' type='radio' value='b'>Não houve coroação, pois os Jacobinos estavam iniciando a Revolução Francesa<br><input name='resposta' type='radio' value='c'>Napoleão auto coroou-se"
];

const respostas_napoleao = [
    "c", "b", "a", "c"
];

const perguntas_robespierre = [
    "<i>Maximilien Robespierre foi uma grande figura na revolução francesa. De acordo com os seus princípios, ele era lider:</i><br><input name='resposta' type='radio' value='a'> Dos girondinos<br><input name='resposta' type='radio' value='b'> Dos jacobinos<br><input name='resposta' type='radio' value='c'> Da burguesia",
    "<i>Maximilien Robespierre defendia a filosofia de:</i><br><input name='resposta' type='radio' value='a'> Rousseau<br><input name='resposta' type='radio' value='b'> John Locke<br><input name='resposta' type='radio' value='c'> Denis Diderot"
];

const repostas_robespierre = [
    "b", "a"
];

const perguntas_maria_antonieta = [
    "<i>Com quem  Maria Antônia Josefa Joana de Habsburgo-Lorena casou- se ?</i><br><input name='resposta' type='radio' value='a'> Luís XV<br><input name='resposta' type='radio' value='b'> Luíz XVI<br><input name='resposta' type='radio' value='c'> Luís XIV",
    "<i>Qual foi o ano em que Maria Antonieta se tornou Rainha da França?</i><br><input name='resposta' type='radio' value='a'> 1798<br><input name='resposta' type='radio' value='b'> 1865<br><input name='resposta' type='radio' value='c'> 1774",
    "<i>O casamento de Maria Antonieta foi parte de um acordo para aproximar Portugal e França?</i><br><input name='resposta' type='radio' value='a'> Verdadeiro<br><input name='resposta' type='radio' value='b'> Falso",
    "",
    "",
    ""
];

const respostas_maria_antonieta = [

];

jogador1 = [localStorage.getItem('user1_nome'), 6, 0,];
jogador2 = [localStorage.getItem('user2_nome'), 6, 0,];

document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];


matriz_jogo = ['','','','','','','','',''];
const vez = ['user1_nome'];
pode_jogar = true;

jogadas_para_pergunta = Math.floor(Math.random() * 4) *2;
var paridade = '';

if (localStorage.getItem('personagem_jogador1') == "maria_antonieta"){
    document.getElementById('avatar1').innerHTML = "<img src='rainha.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "rei_luis_xvi"){
    document.getElementById('avatar1').innerHTML = "<img src='rei.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "olympe"){
    document.getElementById('avatar1').innerHTML = "<img src='olympe.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "sanson"){
    document.getElementById('avatar1').innerHTML = "<img src='sanson.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "marat"){
    document.getElementById('avatar1').innerHTML = "<img src='marat.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "robespierre"){
    document.getElementById('avatar1').innerHTML = "<img src='robesppierre.png' width='80px'>";
};

if (localStorage.getItem('personagem_jogador2') == "maria_antonieta"){
    document.getElementById('avatar2').innerHTML = "<img src='rainha.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "rei_luis_xvi"){
    document.getElementById('avatar2').innerHTML = "<img src='rei.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "olympe"){
    document.getElementById('avatar2').innerHTML = "<img src='olympe.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "sanson"){
    document.getElementById('avatar2').innerHTML = "<img src='sanson.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "marat"){
    document.getElementById('avatar2').innerHTML = "<img src='marat.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "robespierre"){
    document.getElementById('avatar2').innerHTML = "<img src='robesppierre.png' width='80px'>";
};

function jogar(identificador){

    console.log(vez[0]);
    console.log(jogadas_para_pergunta);
    console.log(paridade);

    if (document.getElementById(identificador).innerHTML == ''){

        if (jogadas_para_pergunta == 0){
            resposta_aleatoria = prompt("Olá! Eu sou uma pergunta aleatória!");
            jogadas_para_pergunta = Math.floor(Math.random() * 4) *2;
            if (resposta_aleatoria.toLowerCase() != "certo"){
                pode_jogar = false;
            }else{
                if (vez[0] == "user1_nome"){
                    jogador1[2] += 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                    pode_jogar = true;
                }else{
                    jogador2[2] += 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                    pode_jogar = true;
                };
            };
        }else{
            jogadas_para_pergunta -= 1;
            pode_jogar = true;
        }
        
        if (pode_jogar == true){
            if (vez[0] == 'user1_nome'){
                document.getElementById(identificador).innerHTML = "<img class='imagem' src='coroa.png' width='200px' height='120px' margin-left='50px' margin-top='50px'></img>";
            }else{
                document.getElementById(identificador).innerHTML = "<img class='imagem' src='pao.png' width='200px' height='120px' margin-left='50px' margin-top='50px'></img>";
            };
            
        
            if (identificador == "SE"){
                matriz_jogo[0] = vez[0];
            }else if (identificador == "SM"){
                matriz_jogo[1] = vez[0];
            }else if (identificador == "SD"){
                matriz_jogo[2] = vez[0];
            }else if (identificador == "ME"){
                matriz_jogo[3] = vez[0];
            }else if (identificador == "MM"){
                matriz_jogo[4] = vez[0];
            }else if (identificador == "MD"){
                matriz_jogo[5] = vez[0];
            }else if (identificador == "IE"){
                matriz_jogo[6] = vez[0];
            }else if (identificador == "IM"){
                matriz_jogo[7] = vez[0];
            }else if (identificador == "ID"){
                matriz_jogo[8] = vez[0];
            };
        }
    }else{
        alert("Erro: Essa casa já está ocupada")
    };

        if ((matriz_jogo[0] != '') && (matriz_jogo[1] != '') && (matriz_jogo[2]!= '') && (matriz_jogo[0] == matriz_jogo[1]) && (matriz_jogo[1]== matriz_jogo[2])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[3] != '') && (matriz_jogo[4] != '') && (matriz_jogo[5]!= '') && (matriz_jogo[3] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[5])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[6] != '') && (matriz_jogo[7] != '') && (matriz_jogo[8] != '') && (matriz_jogo[6] == matriz_jogo[7]) && (matriz_jogo[7]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[0] != '') && (matriz_jogo[3] != '') && (matriz_jogo[6]!= '') && (matriz_jogo[0] == matriz_jogo[3]) && (matriz_jogo[3]== matriz_jogo[6])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[1] != '') && (matriz_jogo[4] != '') && (matriz_jogo[7]!= '') && (matriz_jogo[1] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[7])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[2] != '') && (matriz_jogo[5] != '') && (matriz_jogo[8]!= '') && (matriz_jogo[2] == matriz_jogo[5]) && (matriz_jogo[5]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[0] != '') && (matriz_jogo[4] != '') && (matriz_jogo[8]!= '') && (matriz_jogo[0] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[2] != '') && (matriz_jogo[4] != '') && (matriz_jogo[6]!= '') && (matriz_jogo[2] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[6])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
                }
            };
            matriz_jogo = ['','','','','','','','',''];
                document.getElementById("SE").innerHTML = "";
                document.getElementById("SM").innerHTML = "";
                document.getElementById("SD").innerHTML = "";
                document.getElementById("ME").innerHTML = "";
                document.getElementById("MM").innerHTML = "";
                document.getElementById("MD").innerHTML = "";
                document.getElementById("IE").innerHTML = "";
                document.getElementById("IM").innerHTML = "";
                document.getElementById("ID").innerHTML = "";
            
            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[0] != '')&&(matriz_jogo[1] != '')&&(matriz_jogo[2] != '')&&(matriz_jogo[3] != '')&&(matriz_jogo[4] != '')&&(matriz_jogo[5] != '')&&(matriz_jogo[6] != '')&&(matriz_jogo[7] != '')&&(matriz_jogo[8] != '')){
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                jogador1[1] -= 1;
            }
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                jogador2[1] -= 1;
            };
            document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            matriz_jogo = ['','','','','','','','',''];
            document.getElementById("SE").innerHTML = "";
            document.getElementById("SM").innerHTML = "";
            document.getElementById("SD").innerHTML = "";
            document.getElementById("ME").innerHTML = "";
            document.getElementById("MM").innerHTML = "";
            document.getElementById("MD").innerHTML = "";
            document.getElementById("IE").innerHTML = "";
            document.getElementById("IM").innerHTML = "";
            document.getElementById("ID").innerHTML = "";

            if ((jogador1[1]==0) && (jogador2[1] == 0)){
                localStorage.setItem('Vencedor', 'Empate');
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user2_nome'));
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                localStorage.setItem('Vencedor', localStorage.getItem('user1_nome'));
                window.location.replace('pagina_de_vencedor.html')
            };
        };
        console.log(matriz_jogo);
        if (vez[0] == "user2_nome"){
            vez[0] = "user1_nome";
            document.getElementById('texto_de_vez').innerHTML = "Vez de " + localStorage.getItem(vez[0]).toUpperCase();
        }else{
            vez[0] = "user2_nome";
            document.getElementById('texto_de_vez').innerHTML = "Vez de " + localStorage.getItem(vez[0]).toUpperCase();
        };
};

