jogador1 = [localStorage.getItem('user1_nome'), 6, 0];
jogador2 = [localStorage.getItem('user2_nome'), 6, 0];

document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];


matriz_jogo = ['','','','','','','','',''];
const vez = ['user1_nome'];
pode_jogar = true;

jogadas_para_pergunta = Math.floor(Math.random() * 4) *2;
var paridade = '';

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
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                    pode_jogar = true;
                }else{
                    jogador2[2] += 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
                    pode_jogar = true;
                };
            };
        }else{
            jogadas_para_pergunta -= 1;
            pode_jogar = true;
        }
        
        if (pode_jogar == true){
            if (vez[0] == 'user1_nome'){
                document.getElementById(identificador).innerHTML = "<img class='imagem' src='Coroas.png' width='200px' height='120px' margin-left='50px' margin-top='50px'></img>";
            }else{
                document.getElementById(identificador).innerHTML = "<img class='imagem' src='Pão.png' width='200px' height='120px' margin-left='50px' margin-top='50px'></img>";
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador1[2];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
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
            document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1] + "||| ACERTOS: " + jogador2[2];
            document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1] + "||| ACERTOS: " + jogador[2];
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
