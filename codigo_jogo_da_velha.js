jogador1 = [localStorage.getItem('user1_nome'), 6]
jogador2 = [localStorage.getItem('user2_nome'), 6]

document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];


matriz_jogo = ['','','','','','','','',''];
vez = ['user1_nome'];


function jogar(identificador){

    if (document.getElementById(identificador).innerHTML == ''){
        
        if (vez[0] == 'user1_nome'){
            document.getElementById(identificador).innerHTML = "<img class='imagem' src='Coroas.png'></img>";
        }else{
            document.getElementById(identificador).innerHTML = "<img class='imagem' src='Pão.png'></img>"
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

        if ((matriz_jogo[0] != '') && (matriz_jogo[1] != '') && (matriz_jogo[2]!= '') && (matriz_jogo[0] == matriz_jogo[1]) && (matriz_jogo[1]== matriz_jogo[2])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[3] != '') && (matriz_jogo[4] != '') && (matriz_jogo[5]!= '') && (matriz_jogo[3] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[5])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[6] != '') && (matriz_jogo[7] != '') && (matriz_jogo[8] != '') && (matriz_jogo[6] == matriz_jogo[7]) && (matriz_jogo[7]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[0] != '') && (matriz_jogo[3] != '') && (matriz_jogo[6]!= '') && (matriz_jogo[0] == matriz_jogo[3]) && (matriz_jogo[3]== matriz_jogo[6])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[1] != '') && (matriz_jogo[4] != '') && (matriz_jogo[7]!= '') && (matriz_jogo[1] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[7])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[2] != '') && (matriz_jogo[5] != '') && (matriz_jogo[8]!= '') && (matriz_jogo[2] == matriz_jogo[5]) && (matriz_jogo[5]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[0] != '') && (matriz_jogo[4] != '') && (matriz_jogo[8]!= '') && (matriz_jogo[0] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        }else if ((matriz_jogo[2] != '') && (matriz_jogo[4] != '') && (matriz_jogo[6]!= '') && (matriz_jogo[2] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[6])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
            };
            resposta = prompt('Olá, isso é uma pergunta:');
            if (resposta.toLowerCase() != "certo"){
                if (vez[0] == 'user1_nome'){
                    jogador1[1] -= 1;
                    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];
                }else{
                    jogador2[1] -= 1;
                    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
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
            document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "||| VIDAS: " + jogador2[1];
            document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "||| VIDAS: " + jogador1[1];

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
                alert("EMPATE!!! CORTEM-LHES A CABEÇA!!!!")
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador1[1] == 0){
                alert(localStorage.getItem('user2_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            }else if (jogador2[1] == 0){
                alert(localStorage.getItem('user1_nome').toUpperCase() + " GANHOU!!!!!");
                window.location.replace('pagina_de_vencedor.html')
            };
        };
        console.log(matriz_jogo);
        if (vez[0] == "user2_nome"){
            vez[0] = "user1_nome";
        }else{
            vez[0] = "user2_nome";
        };


    }else{
        alert('Erro: Essa casa já está ocupada')
    };
};
