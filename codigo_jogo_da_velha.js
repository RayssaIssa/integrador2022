/*-----------------------------------------------------*/
/*-------------PERGUNTAS E RESPOSTAS-------------------*/
/*-----------------------------------------------------*/

const perguntas_danton = [
    "<i>Danton, famoso representante da revolução Francesa, era aliado de qual partido?</i><br><br><input onclick=\"pergunta(\'danton\', 0)\" name='resposta' type='radio' value='a'> Jacobinos<br><input onclick=\"pergunta(\'danton\', 0)\" name='resposta' type='radio' value='b'> Girondinos<br><input onclick=\"pergunta(\'danton\', 0)\" name='resposta' type='radio' value='c'> Planície",
    "<i>Conhecido por ter uma eloquência invejável, Danton foi o responsável por vários discursos triunfantes. Um desses discursos foi responsável por dar fim a um período temoroso da revolução. Indique esse período.</i><br><br><input onclick=\"pergunta(\'danton\', 1)\"  name='resposta' type='radio' value='a'> Absolutismo Francês<br><input onclick=\"pergunta(\'danton\', 1)\"  name='resposta' type='radio' value='b'> Revolução Haitiana<br><input onclick=\"pergunta(\'danton\', 1)\"  name='resposta' type='radio' value='c'> O Terror",
    "<i>Durante os primeiros anos da Revolução Francesa, Danton foi uma figura revolucionária e nomeada para vários cargos que teve sua fama variando de:</i><br><br><input onclick=\"pergunta(\'danton\', 2)\"  name='resposta' type='radio' value='a'> Patriota e Caridoso para traidor e usurpador<br><input onclick=\"pergunta(\'danton\', 2)\"  name='resposta' type='radio' value='b'> Corrupto e traidor para generoso e patriota<br><input onclick=\"pergunta(\'danton\', 2)\"  name='resposta' type='radio' value='c'> Patriota corrupto para traidor corrupto",
    "<i>Quais eram os ideais de Danton?</i><br><br><input onclick=\"pergunta(\'danton\', 3)\"  name='resposta' type='radio' value='a'> Apoiava a implementação de uma monarquia constitucionalista<br><input onclick=\"pergunta(\'danton\', 3)\" name='resposta' type='radio' value='b'> Defendeu o fim da monarquia e apoiou a criação do exército revolucionário<br><input onclick=\"pergunta(\'danton\', 3)\" name='resposta' type='radio' value='c'> Apoiava o Rei Luís XIV e condenava a desobediência e a rebelião.",
    "<i>De que forma Danton foi acusado e sentenciado à morte?</i><br><br><input onclick=\"pergunta(\'danton\', 4)\" name='resposta' type='radio' value='a'> Acusado por atos de corrupção<br><input onclick=\"pergunta(\'danton\', 4)\" name='resposta' type='radio' value='b'> Deixou de acreditar nos ideais da Revolução<br><input onclick=\"pergunta(\'danton\', 4)\" name='resposta' type='radio' value='c'> Profanou mentiras a respeito do líder da Revolução",
    "<i>Qual artifício Danton utilizava um para conseguir instigar a população e convencê-los a participar da Revolução?</i><br><br><input onclick=\"pergunta(\'danton\', 5)\" name='resposta' type='radio' value='a'> Utilizava técnicas de coerção<br><input onclick=\"pergunta(\'danton\', 5)\" name='resposta' type='radio' value='b'> Se aproveitava de sua influência por ser advogado do rei<br><input onclick=\"pergunta(\'danton\', 5)\" name='resposta' type='radio' value='c'> Capacidade de proferir discursos"
];

const repostas_danton = [
    "a", "c", "b", "b", "a", "c"
];

const perguntas_napoleao = [
    "<i>Sabendo que Napoleão Bonaparte foi a favor da Revolução Francesa e dos Jacobinos, quais foram as consequências da posição adotada por ele na revolução?</i><br><br><input onclick=\"pergunta(\'napoleao\', 0)\" name='resposta' type='radio' value='a'> Executado na guilhotina em praça pública<br><input onclick=\"pergunta(\'napoleao\', 0)\" name='resposta' type='radio' value='b'> Exilado para Inglaterra, acusado de traição à Coroa<br><input onclick=\"pergunta(\'napoleao\', 0)\" name='resposta' type='radio' value='c'> Preso em 1974 e solto posteriormente",
    "<i>Sabendo que Napoleão Bonaparte foi a favor da Revolução Francesa e dos Jacobinos, marque o principal grupo que o ajudou a dar o golpe político em 1799.</i><br><br><input onclick=\"pergunta(\'napoleao\', 1)\" name='resposta' type='radio' value='a'> Jacobinos<br><input onclick=\"pergunta(\'napoleao\', 1)\" name='resposta' type='radio' value='b'> Proto-burguesia<br><input onclick=\"pergunta(\'napoleao\', 1)\" name='resposta' type='radio' value='c'> Proletariado",
    "<i>Apesar de ter se tornado imperador da França em 1804 após a Revolução Francesa, Napoleão não nasceu em território continental francês, mas em uma das províncias do antigo Estado absolutista da França. Onde Bonaparte nasceu?</i><br><br><input onclick=\"pergunta(\'napoleao\', 2)\" name='resposta' type='radio' value='a'> Em Ajaccio, na Ilha de Córsega<br><input onclick=\"pergunta(\'napoleao\', 2)\" name='resposta' type='radio' value='b'> Em uma província da Guiana Francesa, colônia da França<br><input onclick=\"pergunta(\'napoleao\', 2)\" name='resposta' type='radio' value='c'> Em Braunau am Inn, na Áustria",
    "<i>Em 1804, na cerimônia de coroação de Napoleão Bonaparte, um fato inusitado ocorreu:</i><br><br><input onclick=\"pergunta(\'napoleao\', 3)\" name='resposta' type='radio' value='a'>Napoleão abdicou do trono, pois queria ser general do exército<br><input onclick=\"pergunta(\'napoleao\', 3)\" name='resposta' type='radio' value='b'>Não houve coroação, pois os Jacobinos estavam iniciando a Revolução Francesa<br><input onclick=\"pergunta(\'napoleao\', 3)\" name='resposta' type='radio' value='c'>Napoleão auto coroou-se",
    "<i>Onde Napoleão Bonaparte estava quando estourou a Revolução Francesa?</i><br><br><input onclick=\"pergunta(\'napoleao\', 4)\" name='resposta' type='radio' value='a'>Na Córsega, envolvido em conflitos <br><input onclick=\"pergunta(\'napoleao\', 4)\" name='resposta' type='radio' value='b'>Ao lado de Luís XVI, fazendo a proteção pessoal do rei com militares<br><input onclick=\"pergunta(\'napoleao\', 4)\" name='resposta' type='radio' value='c'>Decapitando nobres, por ordens de Robespierre",
    "<i>A expansão territorial da 'Era Napoleônica' teve como objetivo o fortalecimento do Estado francês. Coube a Napoleão a tarefa de: </i><br><br><input onclick=\"pergunta(\'napoleao\', 5)\" name='resposta' type='radio' value='a'>Arrecadar mais dinheiro para o rei Luis XVI, tendo em vista que a nobreza estava gastando mais dinheiro do que podia.<br><input onclick=\"pergunta(\'napoleao\', 5)\" name='resposta' type='radio' value='b'>Eliminar judeus e outros povos considerados fracos e insignificantes perante a raça Francesa.<br><input onclick=\"pergunta(\'napoleao\', 5)\" name='resposta' type='radio' value='c'>Consolidar internamente e difundir externamente algumas das principais conquistas da Revolução Francesa."
];

const respostas_napoleao = [
    "c", "b", "a", "c", "a", "c"
];

const perguntas_robespierre = [
    "<i>Maximilien Robespierre foi uma grande figura na revolução francesa. De acordo com os seus princípios, ele era lider:</i><br><br><input onclick=\"pergunta(\'robespierre\', 0)\" name='resposta' type='radio' value='a'> Dos girondinos<br><input onclick=\"pergunta(\'robespierre\', 0)\" name='resposta' type='radio' value='b'> Dos jacobinos<br><input onclick=\"pergunta(\'robespierre\', 0)\" name='resposta' type='radio' value='c'> Da burguesia",
    "<i>Maximilien Robespierre defendia a filosofia de:</i><br><br><input onclick=\"pergunta(\'robespierre\', 1)\" name='resposta' type='radio' value='a'> Rousseau<br><input onclick=\"pergunta(\'robespierre\', 1)\" name='resposta' type='radio' value='b'> John Locke<br><input onclick=\"pergunta(\'robespierre\', 1)\" name='resposta' type='radio' value='c'> Denis Diderot",
    "<i>Como Robespierre faleceu?</i><br><br><input onclick=\"pergunta(\'robespierre\', 2)\" name='resposta' type='radio' value='a'> Assasinato<br><input onclick=\"pergunta(\'robespierre\', 2)\" name='resposta' type='radio' value='b'> Executado na guilhotina<br><input onclick=\"pergunta(\'robespierre\', 2)\" name='resposta' type='radio' value='c'> Pisoteado",
    "<i>Qual era a profissão de Robespierre?</i><br><br><input onclick=\"pergunta(\'robespierre\', 3)\" name='resposta' type='radio' value='a'> Banqueiro<br><input onclick=\"pergunta(\'robespierre\', 3)\" name='resposta' type='radio' value='b'> Político<br><input onclick=\"pergunta(\'robespierre\', 3)\" name='resposta' type='radio' value='c'> Advogado",
    "<i>Em extimativa, quantas pessoas Robespierre mandou executar na guilhotina?</i><br><br><input onclick=\"pergunta(\'robespierre\', 4)\" name='resposta' type='radio' value='a'> 17.000<br><input onclick=\"pergunta(\'robespierre\', 4)\" name='resposta' type='radio' value='b'> 10.000<br><input onclick=\"pergunta(\'robespierre\', 4)\" name='resposta' type='radio' value='c'> 5.000",
    "<i>Robespierre foi muito importante por ser o responsável por um forte período na França, qual período foi esse?</i><br><br><input onclick=\"pergunta(\'robespierre\', 5)\" name='resposta' type='radio' value='a'> O Grande Medo<br><input onclick=\"pergunta(\'robespierre\', 5)\" name='resposta' type='radio' value='b'> O Diretório<br><input onclick=\"pergunta(\'robespierre\', 5)\" name='resposta' type='radio' value='c'> O Terror"
];

const repostas_robespierre = [
    "b", "a", "b", "c", "a", "c"
];

const perguntas_maria_antonieta = [
    "<i>Com quem  Maria Antônia Josefa Joana de Habsburgo-Lorena casou- se ?</i><br><br><input onclick=\"pergunta(\'maria_antonieta\', 0)\" name='resposta' type='radio' value='a'> Luís XV<br><input onclick=\"pergunta(\'maria_antonieta\', 0)\"name='resposta' type='radio' value='b'> Luíz XVI<br><input onclick=\"pergunta(\'maria_antonieta\', 0)\"name='resposta' type='radio' value='c'> Luís XIV",
    "<i>Qual foi o ano em que Maria Antonieta se tornou Rainha da França?</i><br><br><input onclick=\"pergunta(\'maria_antonieta\', 1)\" name='resposta' type='radio' value='a'> 1798<br><input onclick=\"pergunta(\'maria_antonieta\', 1)\"name='resposta' type='radio' value='b'> 1865<br><input onclick=\"pergunta(\'maria_antonieta\', 1)\"name='resposta' type='radio' value='c'> 1774",
    "<i>O casamento de Maria Antonieta foi parte de um acordo para aproximar Portugal e França?</i><br><br><input onclick=\"pergunta(\'maria_antonieta\', 2)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta(\'maria_antonieta\', 2)\" name='resposta' type='radio' value='b'> Falso",
    "<i>Com que idade Maria Antonieta se casou?</i><br><br><input onclick=\"pergunta(\'maria_antonieta\', 3)\" name='resposta' type='radio' value='a'> 17 anos<br><input onclick=\"pergunta(\'maria_antonieta\', 3)\"name='resposta' type='radio' value='b'> 15 anos<br><input onclick=\"pergunta(\'maria_antonieta\', 3)\"name='resposta' type='radio' value='c'> 14 anos",
    "<i>Maria Antonieta Foi uma rainha impopular, sendo odiada pela nobreza e pelo povo, e ficou marcada pela vida de luxos que levou?</i><br><br><input onclick=\"pergunta(\'maria_antonieta\', 4)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta(\'maria_antonieta\', 4)\" name='resposta' type='radio' value='b'> Falso",
    "<i>Em que ano Maria Antonieta foi morta na guilhotina?</i><br><br><input onclick=\"pergunta(\'maria_antonieta\', 5)\" name='resposta' type='radio' value='a'> 1735<br><input onclick=\"pergunta(\'maria_antonieta\', 5)\"name='resposta' type='radio' value='b'> 1786<br><input onclick=\"pergunta(\'maria_antonieta\', 5)\"name='resposta' type='radio' value='c'> 1793"
];

const respostas_maria_antonieta = [
    "b", "c", "b", "c", "a", "c"
];

const perguntas_luis_xvi = [
    "<i>Para onde o rei Luis XVI tentou fugir em 1791?</i><br><input onclick=\"pergunta(\'rei_luis_xvi\', 0)\" name='resposta' type='radio' value='a'> Paris<br><input onclick=\"pergunta(\'rei_luis_xvi\', 0)\" name='resposta' type='radio' value='b'> Montmédy<br><input onclick=\"pergunta(\'rei_luis_xvi\', 0)\" name='resposta' type='radio' value='c'> Giverny",
    "<i>Em que ano o rei Luis XVI foi condenado a morte?</i><br><input onclick=\"pergunta(\'rei_luis_xvi\', 1)\" name='resposta' type='radio' value='a'> 1723<br><input onclick=\"pergunta(\'rei_luis_xvi\', 1)\" name='resposta' type='radio' value='b'> 1753<br><input onclick=\"pergunta(\'rei_luis_xvi\', 1)\" name='resposta' type='radio' value='c'> 1793",
    "<i>Qual a solução tomada por Luís XVI na reunião da Assembléia dos Notáveis, para amenizar a crise econômica da França?</i><br><input onclick=\"pergunta(\'rei_luis_xvi\', 2)\" name='resposta' type='radio' value='a'> Criar impostos para o 1° e 2° Estados<br><input onclick=\"pergunta(\'rei_luis_xvi\', 2)\" name='resposta' type='radio' value='b'> Aumentar ainda mais os impostos do 3° Estado<br><input onclick=\"pergunta(\'rei_luis_xvi\', 2)\" name='resposta' type='radio' value='c'> Criação de uma Assembléia dos Estados Gerais, que regiria a economia da França",
    "<i>Luís XVI convocou a Assembléia dos Estados Gerais após quantos anos de inatividade?</i><br><input onclick=\"pergunta(\'rei_luis_xvi\', 3)\" name='resposta' type='radio' value='a'> 75 anos<br><input onclick=\"pergunta(\'rei_luis_xvi\', 3)\" name='resposta' type='radio' value='b'> 104 anos<br><input onclick=\"pergunta(\'rei_luis_xvi\', 3)\" name='resposta' type='radio' value='c'> 161 anos",
    "<i>Luís XVI tinha a fama de um caráter fraco, e que constantemente colocava a França em situações de dívida.</i><br><input onclick=\"pergunta(\'rei_luis_xvi\', 4)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta(\'rei_luis_xvi\', 4)\" name='resposta' type='radio' value='b'> Falso",
    "<i>Em qual cidade Luís XVI e sua família foram mantidos após sua tentativa de fuga?</i><br><input onclick=\"pergunta(\'rei_luis_xvi\', 5)\" name='resposta' type='radio' value='a'> Varennes<br><input onclick=\"pergunta(\'rei_luis_xvi\', 5)\" name='resposta' type='radio' value='b'> Paris<br><input onclick=\"pergunta(\'rei_luis_xvi\', 5)\" name='resposta' type='radio' value='c'> Versalhes"
];

const respostas_luis_xvi = [
    "b", "c", "b", "c", "a", "a"
];

const perguntas_olympe = [
    "<i>Em 1971, Olympe de Gourges publicou um documento em protesto à Declaração dos Direitos do Homem de do Cidadão, este documento foi:</i><br><input onclick=\"pergunta(\'olympe\', 0)\" name='resposta' type='radio' value='a'> O Manifesto Feminista<br><input onclick=\"pergunta(\'olympe\', 0)\" name='resposta' type='radio' value='b'> O Diário da marcha das mulheres à Versalhes<br><input onclick=\"pergunta(\'olympe\', 0)\" name='resposta' type='radio' value='c'> A Declaração dos Direitos da Mulher e da Cidadã",
    "<i>Olympe de Gouges foi um nome adotado após se tornar viúva, o verdadeiro nome da revolucionária, segundo os documentos, era:</i><br><input onclick=\"pergunta(\'olympe\', 1)\" name='resposta' type='radio' value='a'> Madeline Lefranc<br><input onclick=\"pergunta(\'olympe\', 1)\" name='resposta' type='radio' value='b'> Emilie Biétix<br><input onclick=\"pergunta(\'olympe\', 1)\" name='resposta' type='radio' value='c'> Marie Gouze", 
    "<i>Olympe defendia a instauração do divórcio e de um contrato anual para cônjuges.</i><br><input onclick=\"pergunta(\'olympe\', 2)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta(\'olympe\', 2)\" name='resposta' type='radio' value='b'> Falso", 
    "<i>Apesar de apoiar a liberdade de todos, ela não era a favor do abolicionismo.</i><br><input onclick=\"pergunta(\'olympe\', 3)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta(\'olympe\', 3)\" name='resposta' type='radio' value='b'> Falso", 
    "<i>Durante o período do Terror, Olympe distribuia um folhetim com o título de:</i><br><input onclick=\"pergunta(\'olympe\', 4)\" name='resposta' type='radio' value='a'> O Jornal Político das Mulheres<br><input onclick=\"pergunta(\'olympe\', 4)\" name='resposta' type='radio' value='b'> A Gazeta de Debate<br><input onclick=\"pergunta(\'olympe\', 4)\" name='resposta' type='radio' value='c'> As Três Urnas", 
    "<i>Após um julgamento acirrado, o advogado de Olympe não consegue ganhar o caso e ela é condenada a morte na guilhotina.</i><br><input onclick=\"pergunta(\'olympe\', 5)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta(\'olympe\', 5)\" name='resposta' type='radio' value='b'> Falso"
];7

const respostas_olympe = [
    "c", "c", "a", "b", "c", "b"
]

const perguntas_gerais = [
    "<i>A Declaração dos Direitos do Homem e do Cidadão foi aprovada pela Assembleia em 26 de Agosto de 1789, onde assegurava os princípios da liberdade, da igualdade, da fraternidade (“Liberté, égalité, fraternité” - lema da Revolução), além do direito à propriedade. A Constituição ficou pronta em setembro de 1791. Quais das alternativas a seguir esta correta de acordo com o artigo:</i><br><br><input onclick=\"pergunta_aleatoria(0)\" name='resposta' type='radio' value='a'> Foi abolida a escravidão nas colônias<br><input onclick=\"pergunta_aleatoria(0)\" name='resposta' type='radio' value='b'> O governo foi transformado em monarquia absolutista<br><input onclick=\"pergunta_aleatoria(0)\" name='resposta' type='radio' value='c'> O poder executivo caberia ao rei, limitado pelo legislativo, constituído pela Assembleia",
    "<i>A Revolução Francesa e as mudanças colocadas em prática com a queda do absolutismo naquele país foram influenciadas pelo?</i><br><br><input onclick=\"pergunta_aleatoria(1)\" name='resposta' type='radio' value='a'> Anarquismo<br><input onclick=\"pergunta_aleatoria(1)\" name='resposta' type='radio' value='b'> Socialismo<br><input onclick=\"pergunta_aleatoria(1)\" name='resposta' type='radio' value='c'> Iluminismo",
    "<i>A sociedade francesa possuía três divisões de estados, no qual um deles pressionava para que as votações das leis fossem individuais e não por Estado. Fazendo com que, essa divisão procurasse meios que favorecessem eles no sistema. Qual é o estado e o classe dos indivíduos ali inseridos?</i><br><br><input onclick=\"pergunta_aleatoria(2)\" name='resposta' type='radio' value='a'> Primeiro estado, composto pela nobreza<br><input onclick=\"pergunta_aleatoria(2)\" name='resposta' type='radio' value='b'> Segundo estado, formado pelo alto clero<br><input onclick=\"pergunta_aleatoria(2)\" name='resposta' type='radio' value='c'> Terceiro estado, composto pela burguesia",
    "<i>Dentro do período da Convenção Nacional existe um ano extremamente violento, onde as pessoas suspeitas de serem contrarrevolucionárias eram condenadas à guilhotina. Isto foi possível pela aprovação da Lei dos Suspeitos que autorizava a prisão e morte dos considerados antirrevolucionários. Nessa mesma altura, as igrejas eram encerradas e os religiosos obrigados a deixar seus conventos. Aqueles que recusavam a jurar a Constituição Civil do Clero eram executados. Além da guilhotina, os suspeitos eram afogados no Rio Loire. Essa fase anterior ao Diretório ficou conhecida como:</i><br><br><input onclick=\"pergunta_aleatoria(3)\" name='resposta' type='radio' value='a'> O Terror<br><input onclick=\"pergunta_aleatoria(3)\" name='resposta' type='radio' value='b'> Assembleia Nacional Constituinte<br><input onclick=\"pergunta_aleatoria(3)\" name='resposta' type='radio' value='c'> Consulado",
    "<i>Apos assinar a carta que leva o rei a guilhotina, os jacobinos usam a intimidação e a coordenação a morte para continuarem no poder. Esse período ficou conhecido como:</i><br><br><input onclick=\"pergunta_aleatoria(4)\" name='resposta' type='radio' value='a'> Período de terror<br><input onclick=\"pergunta_aleatoria(4)\" name='resposta' type='radio' value='b'> Período da salvação<br><input onclick=\"pergunta_aleatoria(4)\" name='resposta' type='radio' value='c'> Período da revolucao monárquica",
    "<i>A Assembléia dos Notáveis aconteceu no ano de 1787.Na reunião estavam presentes:</i><br><br><input onclick=\"pergunta_aleatoria(5)\" name='resposta' type='radio' value='a'> Representantes do 1º e do 3º Estados<br><input onclick=\"pergunta_aleatoria(5)\" name='resposta' type='radio' value='b'> O Rei e os representantes do 1º Estado<br><input onclick=\"pergunta_aleatoria(5)\" name='resposta' type='radio' value='c'> O rei e os representantes do 1º e 2º estados",
    "<i>1792 foi o ano em que a monarquia foi abolida na França.</i><br><br><input onclick=\"pergunta_aleatoria(6)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta_aleatoria(6)\" name='resposta' type='radio' value='b'> Falso",
    "<i>Os Monarcas Franceses foram executados na guilhotina sob a acusação de corrupção.</i><br><br><input onclick=\"pergunta_aleatoria(7)\" name='resposta' type='radio' value='a'> Verdadeiro<br><input onclick=\"pergunta_aleatoria(7)\" name='resposta' type='radio' value='b'> Falso"
]

const respostas_gerais = [
    "c", "c", "c", "a", "a", "c", "a", "b"
]

var jogador1 = [localStorage.getItem('user1_nome'), 6, 0, localStorage.getItem('personagem_jogador1')];
var jogador2 = [localStorage.getItem('user2_nome'), 6, 0, localStorage.getItem('personagem_jogador2')];

document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];


matriz_jogo = ['','','','','','','','',''];
const vez = ['user1_nome'];
pode_jogar = true;
ultima_casa = [];
var_empate = false;

var personagem;
var indice;

jogadas_para_pergunta = Math.floor(Math.random() * 4) *2;
var paridade = '';

document.getElementById('texto_de_vez').innerHTML = "Vez de " + localStorage.getItem(vez[0]).toUpperCase();

if (localStorage.getItem('personagem_jogador1') == "maria_antonieta"){
    document.getElementById('avatar1').innerHTML = "<img src='rainha.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "rei_luis_xvi"){
    document.getElementById('avatar1').innerHTML = "<img src='rei.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "olympe"){
    document.getElementById('avatar1').innerHTML = "<img src='olympe.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "danton"){
    document.getElementById('avatar1').innerHTML = "<img src='danton.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "napoleao"){
    document.getElementById('avatar1').innerHTML = "<img src='napoleao.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador1') == "robespierre"){
    document.getElementById('avatar1').innerHTML = "<img src='robesppierre.png' width='80px'>";
};

if (localStorage.getItem('personagem_jogador2') == "maria_antonieta"){
    document.getElementById('avatar2').innerHTML = "<img src='rainha.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "rei_luis_xvi"){
    document.getElementById('avatar2').innerHTML = "<img src='rei.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "olympe"){
    document.getElementById('avatar2').innerHTML = "<img src='olympe.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "danton"){
    document.getElementById('avatar2').innerHTML = "<img src='danton.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "napoleao"){
    document.getElementById('avatar2').innerHTML = "<img src='napoleao.png' width='80px'>";
}else if (localStorage.getItem('personagem_jogador2') == "robespierre"){
    document.getElementById('avatar2').innerHTML = "<img src='robesppierre.png' width='80px'>";
};

function empate(){

    vez[0] = "user1_nome";
    document.getElementById('texto_de_vez').innerHTML = "Vez de " + localStorage.getItem(vez[0]).toUpperCase();
    document.getElementById('titulo_modal').innerHTML = "Empate! Pergunta para: " + localStorage.getItem('user2_nome');

    if (jogador1[3] == 'maria_antonieta'){
        document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[Math.floor(Math.random()*6)];
        var_empate = false;
    }else if(jogador1[3] == 'danton'){
        document.getElementById('perguntas').innerHTML = perguntas_danton[Math.floor(Math.random()*6)];
        var_empate = false;
    }else if(jogador1[3] == 'napoleao'){
        document.getElementById('perguntas').innerHTML = perguntas_napoleao[Math.floor(Math.random()*6)];
        var_empate = false;
    }else if(jogador1[3] == 'robespierre'){
        document.getElementById('perguntas').innerHTML = perguntas_robespierre[Math.floor(Math.random()*6)];
        var_empate = false;
    }else if(jogador1[3] == 'rei_luis_xvi'){
        document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[Math.floor(Math.random()*6)];
        var_empate = false;
    }else if(jogador1[3] == 'olympe'){
        document.getElementById('perguntas').innerHTML = perguntas_olympe[Math.floor(Math.random()*6)];
        var_empate = false;
    };

    document.getElementById('modal-container').style.display = "flex";
    document.getElementById('modal').style.display = "flex";
};

function pergunta_aleatoria(indice){
        if (respostas_gerais[indice] == document.querySelector("input[name=resposta]:checked").value){
            pode_jogar = true;
            if (vez[0] == "user1_nome"){
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else{
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }
            console.log(pode_jogar);
        }else{
            pode_jogar = false;
            console.log(pode_jogar);
            document.getElementById(ultima_casa).innerHTML = '';
            if (ultima_casa == "SE"){
                matriz_jogo[0] = '';
            }else if (ultima_casa == "SM"){
                matriz_jogo[1] = '';
            }else if (ultima_casa == "SD"){
                matriz_jogo[2] = '';
            }else if (ultima_casa == "ME"){
                matriz_jogo[3] = '';
            }else if (ultima_casa == "MM"){
                matriz_jogo[4] = '';
            }else if (ultima_casa == "MD"){
                matriz_jogo[5] = '';
            }else if (ultima_casa == "IE"){
                matriz_jogo[6] = '';
            }else if (ultima_casa == "IM"){
                matriz_jogo[7] = '';
            }else if (ultima_casa == "ID"){
                matriz_jogo[8] = '';
            }
        };
    document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
    document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
    document.getElementById('modal-container').style.display = "none";
    document.getElementById('modal').style.display = "none";
    document.getElementById('pergunta_aleatoria').reset();
};

function pergunta(personagem, indice){

    if (personagem == 'maria_antonieta'){
        
        if (respostas_maria_antonieta[indice] !=  document.querySelector("input[name=resposta]:checked").value){
            if (vez[0] == 'user2_nome'){
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }else{
            if (vez[0] == 'user2_nome'){
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }
    }else if (personagem == "danton"){
        if (repostas_danton[indice] !=  document.querySelector("input[name=resposta]:checked").value){
            if (vez[0] == 'user2_nome'){
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }else{
            if (vez[0] == 'user2_nome'){
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }
    }else if (personagem == "napoleao"){
        if (respostas_napoleao[indice] !=  document.querySelector("input[name=resposta]:checked").value){
            if (vez[0] == 'user2_nome'){
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }else{
            if (vez[0] == 'user2_nome'){
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }
    }else if (personagem == "robespierre"){
        if (repostas_robespierre[indice] !=  document.querySelector("input[name=resposta]:checked").value){
            if (vez[0] == 'user2_nome'){
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }else{
            if (vez[0] == 'user2_nome'){
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }
    }else if (personagem == "rei_luis_xvi"){
        if (respostas_luis_xvi[indice] !=  document.querySelector("input[name=resposta]:checked").value){
            if (vez[0] == 'user2_nome'){
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }else{
            if (vez[0] == 'user2_nome'){
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }
    }else if (personagem == "olympe"){
        if (respostas_olympe[indice] !=  document.querySelector("input[name=resposta]:checked").value){
            if (vez[0] == 'user2_nome'){
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }else{
            if (vez[0] == 'user2_nome'){
                jogador1[2] += 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            }else{
                jogador2[2] += 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }
        }
    }

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
    document.getElementById('modal-container').style.display = "none";
    document.getElementById('modal').style.display = "none";
    if (var_empate == true){
        empate();
    }
    document.getElementById('pergunta_aleatoria').reset();
}


function jogar(identificador){

    ultima_casa = identificador;
    console.log("ultima casa: " + ultima_casa);
    console.log(vez[0]);
    console.log(jogadas_para_pergunta);
    console.log(paridade);

    if (document.getElementById(identificador).innerHTML == ''){
        if (jogadas_para_pergunta == 0){
            document.getElementById('titulo_modal').innerHTML = "Pergunta para: " + localStorage.getItem(vez[0]);
            document.getElementById('perguntas').innerHTML = perguntas_gerais[Math.floor(Math.random()*8)]
            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
            jogadas_para_pergunta = Math.floor(Math.random() * 4) *2;
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

            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";

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
        }else if ((matriz_jogo[3] != '') && (matriz_jogo[4] != '') && (matriz_jogo[5]!= '') && (matriz_jogo[3] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[5])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[6] != '') && (matriz_jogo[7] != '') && (matriz_jogo[8] != '') && (matriz_jogo[6] == matriz_jogo[7]) && (matriz_jogo[7]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[0] != '') && (matriz_jogo[3] != '') && (matriz_jogo[6]!= '') && (matriz_jogo[0] == matriz_jogo[3]) && (matriz_jogo[3]== matriz_jogo[6])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[1] != '') && (matriz_jogo[4] != '') && (matriz_jogo[7]!= '') && (matriz_jogo[1] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[7])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[2] != '') && (matriz_jogo[5] != '') && (matriz_jogo[8]!= '') && (matriz_jogo[2] == matriz_jogo[5]) && (matriz_jogo[5]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[0] != '') && (matriz_jogo[4] != '') && (matriz_jogo[8]!= '') && (matriz_jogo[0] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[8])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador1[1]];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador1[1]];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador1[1]];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador1[1]];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador1[1]];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador1[1]];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[2] != '') && (matriz_jogo[4] != '') && (matriz_jogo[6]!= '') && (matriz_jogo[2] == matriz_jogo[4]) && (matriz_jogo[4]== matriz_jogo[6])){
            if (vez[0] == 'user1_nome'){
                jogador2[1] -= 1;
                document.getElementById('nome_usuario2').innerHTML = localStorage.getItem('user2_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador2[1] + "<br>" + " ACERTOS: " + jogador2[2];
            }else {
                jogador1[1] -= 1;
                document.getElementById('nome_usuario1').innerHTML = localStorage.getItem('user1_nome').toUpperCase() + "<br>" + " VIDAS: " + jogador1[1] + "<br>" + " ACERTOS: " + jogador1[2];
            };
            document.getElementById('titulo_modal').innerHTML = "O Jogador " + localStorage.getItem(vez[0]) + " ganhou a partida";
            
            if (vez[0] == "user1_nome"){
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[jogador2[1]];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[jogador2[1]];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[jogador2[1]];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[jogador2[1]];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[jogador2[1]];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[jogador2[1]];
                }
            }else{
                if (jogador1[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[Math.floor(Math.random()*7)];
                }else if(jogador1[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[Math.floor(Math.random()*7)];
                }else if(jogador1[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[Math.floor(Math.random()*7)];
                }else if(jogador1[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[Math.floor(Math.random()*7)];
                }else if(jogador1[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[Math.floor(Math.random()*7)];
                }else if(jogador1[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[Math.floor(Math.random()*7)];
                }
            }

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
        }else if ((matriz_jogo[0] != '')&&(matriz_jogo[1] != '')&&(matriz_jogo[2] != '')&&(matriz_jogo[3] != '')&&(matriz_jogo[4] != '')&&(matriz_jogo[5] != '')&&(matriz_jogo[6] != '')&&(matriz_jogo[7] != '')&&(matriz_jogo[8] != '')){
            
            var_empate = true;
            document.getElementById('titulo_modal').innerHTML = "Empate! Pergunta para: " + localStorage.getItem('user1_nome');
            
                if (jogador2[3] == 'maria_antonieta'){
                    document.getElementById('perguntas').innerHTML = perguntas_maria_antonieta[Math.floor(Math.random()*6)];
                }else if(jogador2[3] == 'danton'){
                    document.getElementById('perguntas').innerHTML = perguntas_danton[Math.floor(Math.random()*6)];
                }else if(jogador2[3] == 'napoleao'){
                    document.getElementById('perguntas').innerHTML = perguntas_napoleao[Math.floor(Math.random()*6)];
                }else if(jogador2[3] == 'robespierre'){
                    document.getElementById('perguntas').innerHTML = perguntas_robespierre[Math.floor(Math.random()*6)];
                }else if(jogador2[3] == 'rei_luis_xvi'){
                    document.getElementById('perguntas').innerHTML = perguntas_luis_xvi[Math.floor(Math.random()*6)];
                }else if(jogador2[3] == 'olympe'){
                    document.getElementById('perguntas').innerHTML = perguntas_olympe[Math.floor(Math.random()*6)];
                };
            

            document.getElementById('modal-container').style.display = "flex";
            document.getElementById('modal').style.display = "flex";
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
