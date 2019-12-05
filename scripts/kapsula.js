$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

sessionStorage.setItem('resultadoFinal', '');

const colors = {
        Branco: 'rgb(255,255,255)',        
        Vermelho: 'rgb(214, 79, 90)',
        VermelhoAlaranjado: 'rgb(242,95,27)',
        Laranja: 'rgb(247,145,29)',
        LaranjaAmarelado: 'rgb(252,193,15)',
        Amarelo: 'rgb(255,238,3)',
        AmareloEsverdeado: 'rgb(138,196,61)',
        Verde: 'rgb(2,163,80)',
        VerdeAzulado: 'rgb(2,168,154)',
        Azul: 'rgb(0,170,237)',
        AzulVioleta: 'rgb(0,112,186)',
        Violeta: 'rgb(100,44,145)',
        VermelhoVioleta: 'rgb(145,36,144)',
        Preto: 'rgb(0,0,0)',
}

let cores = [
    'rgb(255, 255, 255)', // Branco
    'rgb(237, 26, 44)', //Vermelho
    'rgb(242, 95, 27)', // Vermelho Alaranjado
    'rgb(247, 145, 29)', // Laranja
    'rgb(252, 193, 15)', // Laranja Amarelado
    'rgb(255, 238, 3)', // Amarelo
    'rgb(138, 196, 61)', // Amarelo Esverdeado
    'rgb(2, 163, 80)', //Verde
    'rgb(2, 168, 154)', // Verde Azulado
    'rgb(0, 170, 237)', // Azul
    'rgb(0, 112, 186)', // Azul Violeta
    'rgb(100, 44, 145)', // Violeta
    'rgb(145, 36, 144)',// Vermelho Violeta
    'rgb(0, 0, 0)' // Preto
    
    
];

function changeBackgroundColor(elemtIdPicker, blockId) {

    $(elemtIdPicker).spectrum({
        showPaletteOnly: true,
        showPalette:true,
        color: 'blanchedalmond',
        palette: [cores],            
        change: function(color) {
            let cor1 = color.toRgbString(color);
            document.querySelector(blockId).style.backgroundColor = color.toRgbString(color);
            document.querySelector('#bloco2').style.backgroundColor = document.querySelector('#bloco1').style.backgroundColor;
            document.querySelector('#bloco4').style.backgroundColor = document.querySelector('#bloco1').style.backgroundColor;
            }
        
    });
}

function changeTextColor(elemtIdPicker, blockId) {

    $(elemtIdPicker).spectrum({
        showPaletteOnly: true,
        showPalette:true,
        color:'blanchedalmond',
        palette: [cores],            
        change: function(color) {
            let cor1 = color.toRgbString(color);
            document.querySelector(blockId).style.color = color.toRgbString(color);
            }        
    });
}

function toRgb() {
    return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
}

document.querySelector('#bloco1').style.backgroundColor = cores[0];
document.querySelector('#bloco2').style.backgroundColor = cores[0];
document.querySelector('#bloco3').style.backgroundColor = cores[0];
document.querySelector('#bloco4').style.backgroundColor = cores[0];

changeBackgroundColor("#mudarCorCard01", '#bloco1');
changeTextColor("#mudarCorCard02", '#bloco2');
changeBackgroundColor("#mudarCorCard03", '#bloco3');
changeTextColor("#mudarCorCard04", '#bloco4');

//As funções de verificação de harmonia cromática funcionam da seguinte forma:
//Passando-se duas cores como parâmetro, a função verifica se os índices daquelas cores 
//(esses desenhados em cima do circulo) obedecem a uma certa ordem matemática, que irá 
//indicar se elas duas têm alguma harmonia.
//Ex: Para que duas cores sejam análogas basta que a outra tenha seis de acrécimo ou decrécimo do seu índice. Como isso pode acontecer 
//com o contrário, foi necessário colocar os dois casos e admitir o valor absoluto para elas.

//PS:Para adicionar subcores, com diferentes brilhos e saturações( de acordo com os padroes de hsl), bastaria
//ser implementado uma matriz bidimensional com base na extrutua [cor[n-variações]] e ultilizados os valores predeterminados
// de cores dentro das matrizes.

function pegarCores(){ // Pega as cores na hora de fazer a análise de harmonia.
    cor1 = document.querySelector('#bloco1').style.backgroundColor;
    cor2 = document.querySelector('#bloco2').style.color;
    cor3 = document.querySelector('#bloco3').style.backgroundColor;
    cor4 = document.querySelector('#bloco4').style.color;
    
    //iCor <- Indice da cor!
    iCor1 = cores.indexOf(cor1);
    iCor2 = cores.indexOf(cor2);
    iCor3 = cores.indexOf(cor3);
    iCor4 = cores.indexOf(cor4);
}

//INICIO DOS CALCULOS DE HARMONIA DE ACORDO COM A ENUMERAÇÂO DE CORES, PARTINDO DO BRANCO COMO INDICE ZERO, VERMELHO INDICE 1 ATÈ PRETO INDICE 14

function verificarAnalogas(corA,corB){

    iCorA = cores.indexOf(corA);
    iCorB = cores.indexOf(corB);
    if (iCorA != 0 && iCorA !=13 && iCorB!=0 && iCorB!=13){ // Garante que as cores preto e branco não serão pegues.
        if(Math.abs(iCorB - iCorA) == Math.abs(1) || Math.abs(iCorA - iCorB) == Math.abs(1) ){
            return true;
        }else{
            return false;
        }
    }
    
}

function verificarComplementares(corA,corB){

    iCorA = cores.indexOf(corA);
    iCorB = cores.indexOf(corB);

    if (iCorA != 0 && iCorA !=13 && iCorB!=0 && iCorB!=13){ // Garante que as cores preto e branco não serão pegues.
        if(Math.abs(iCorB - iCorA) == Math.abs(6) || Math.abs(iCorA - iCorB) == Math.abs(6) ){
            return true;
        }else{
            return false;
        }
    }
}

function verificarPrimarias(corA,corB){

    iCorA = cores.indexOf(corA);
    iCorB = cores.indexOf(corB);

    if (iCorA != 0 && iCorA !=13 && iCorB!=0 && iCorB!=13){ // Garante que as cores preto e branco não serão pegues.
        if(Math.abs(iCorB - iCorA) == Math.abs(4) || Math.abs(iCorA - iCorB) == Math.abs(4) ){
            return true;
        }else{
            return false;
        }
    }
}

function verificarSecundarias(corA,corB){

    iCorA = cores.indexOf(corA);
    iCorB = cores.indexOf(corB);
    if (iCorA != 0 && iCorA !=13 && iCorB!=0 && iCorB!=13){ // Garante que as cores preto e branco não serão pegues.
        if(Math.abs(iCorB - iCorA) == Math.abs(5) || Math.abs(iCorA - iCorB) == Math.abs(5) ){
            return true;
        }else{
            return false;
        }
    }
}

function verificarIntermediarias(corA,corB){

    iCorA = cores.indexOf(corA);
    iCorB = cores.indexOf(corB);

    if (iCorA != 0 && iCorA !=13 && iCorB!=0 && iCorB!=13){ // Garante que as cores preto e branco não serão pegues.
        if(Math.abs(iCorB - iCorA) == Math.abs(2) || Math.abs(iCorA - iCorB) == Math.abs(2) ){
            return true;
        }else{
            return false;
        }
    }
}

function verificaQuente(corA){
    iCorA = cores.indexOf(corA);

    if(iCorA >= 0 && iCorA <= 7)
    {
         return true;
    } 
        return false;
    
}

function verificarTetradicas(corA,corB,corC,corD){
    if (verificarIntermediarias(corA,corB) && verificarIntermediarias(corC,corD) || verificarIntermediarias(corA,corC) && verificarIntermediarias(corB,corD) || verificarIntermediarias(corC,corB) && verificarIntermediarias(corA,corD)){
        return true;
    }
        return false;
}

//FIM DOS CÁLCULOS DE HARMONIA CROMÁTICA

function exibirResultado(){

    document.querySelector('#resultados').innerText = " "
    pegarCores();
    
    cor = [cor1,cor2,cor3,cor4];

    for(i=0;i<4;i++)
    {
        if(verificaQuente(cor[i])){
            document.querySelector('#resultados').innerText += `A cor do elemento ${i+1} é quente`;
            document.querySelector('#resultados').innerHTML += '<br>'
        }else{
            document.querySelector('#resultados').innerText += `A cor do elemento ${i+1} é fria`;
            document.querySelector('#resultados').innerHTML += '<br>'
        }

        for(j=0;j<4;j++)
        {
            if (i<j){
                if (verificarComplementares(cor[i],cor[j])){
                    document.querySelector('#resultados').innerText += `As cores dos elementos ${i+1} e ${j+1} são complementares! `;
                    document.querySelector('#resultados').innerHTML += '<br>'
                }
                else if (verificarAnalogas(cor[i],cor[j])){
                    document.querySelector('#resultados').innerText += `As cores dos elementos ${i+1} e ${j+1} são Analogas `;
                    document.querySelector('#resultados').innerHTML += '<br>'
                }
                else if (verificarPrimarias(cor[i],cor[j])){
                    document.querySelector('#resultados').innerText += `As cores dos elementos ${i+1} e ${j+1} são Primarias! `;
                    document.querySelector('#resultados').innerHTML += '<br>'
                }
                else if (verificarSecundarias(cor[i],cor[j])){
                    document.querySelector('#resultados').innerText += `As cores dos elementos ${i+1} e ${j+1} são Secundarias `;
                    document.querySelector('#resultados').innerHTML += '<br>'
                }
                else if (verificarIntermediarias(cor[i],cor[j])){
                    document.querySelector('#resultados').innerText += `As cores dos elementos ${i+1} e ${j+1} são Intermediarias `;
                    document.querySelector('#resultados').innerHTML += '<br>'
                }
            }
        }
    }
}

var resultadoFinal;

function mandaResultadoFinal(texto)
{
    resultadoFinal = sessionStorage.getItem('resultadoFinal');
    resultadoFinal  += ("<br>" + texto);
    sessionStorage.setItem('resultadoFinal', resultadoFinal);
}

var proposta = sessionStorage.getItem('proposta');
const Elementos = ['Background','Titulo','Elemento de Fundo','Paragrafo'];

function obterResposta(){
    sessionStorage.setItem('resultadoFinal', "");
   

    if(proposta==1){
    //Gostaria de cores análogas com predominancia de cores frias.
        pegarCores();
        cor = [cor1,cor2,cor3,cor4];

        for(i=0;i<4;i++){
            if(verificaQuente(cor[i])){
                mandaResultadoFinal(`A Cor do <strong>${Elementos[i]}</strong> é QUENTE! Não era bem oque eu esperava.`);
            }else{
                for(j=0;j<4;j++){
                    if(i!=j && i<j){
                        if(verificarAnalogas(cor[i],cor[j])){
                            mandaResultadoFinal(`Muito bem! A cor do elemento <strong>${Elementos[i]}</strong> é fria, assim como solicitado e é análoga ao elemento ${Elementos[j]}!`);
                        }else{  
                            mandaResultadoFinal(`As cores dos elementos <strong>${Elementos[i]}</strong> e <strong>${Elementos[j]}</strong> são frias porèm não são análogas! Não era bem assim...`);
                        }
                    }
                }
            }
        }
    }

    else if(proposta==2){
        //Gostaria que você utilizasse tons entre vermelho e o azul claro e que obedecessem o principio de cores analogas.
        pegarCores();
        cor = [cor1,cor2,cor3,cor4];
        
         
        for (i = 0; i < 4 ; i++ ){
            
            if(cores.indexOf(cor[i]) > 7 && cores.indexOf(cor[i]) < 13 || cores.indexOf(cor[i]) == 1){
                mandaResultadoFinal("Muito bem! As cores que você selecionou estão entre o vermelho e o azul claro, assim como foi solicitado!");
                for(j=0;j<4;j++){
                    if(i!=j && i<j){
                        if(verificarAnalogas(cor[i],cor[j])){
                            mandaResultadoFinal(`Muito bem! A cor do elemento <strong>${Elementos[i]}</strong> está entre as cores indicadas assim como solicitado e é análoga à cor do elemento ${Elementos[j]}`);
                        }else{  
                            mandaResultadoFinal(`As cores dos elementos <strong>${Elementos[i]}</strong> e <strong>${Elementos[j]}</strong> estão entre ás indicadas porèm não são análogas!`);
                        }
                    }
                }
            }else{
                mandaResultadoFinal("Você não selecionou as cores indicadas!Pedi que fossem cores entre o vermelho e o tom mais claro de azul.");
            }
        }



    } else if(proposta==3){
        //Gostaria de que você fizesse as cores do produto com dois pares de cores que obedeçam o principio de complementaridade.
        pegarCores();
        cor = [cor1,cor2,cor3,cor4];
        certo = 0;
        for (i = 0; i < 4 ; i++ ){
            for (j = 0; j < 4 ; j++ ){
                if(i!=j && i<j)    
                    if(verificarComplementares(cor[i],cor[j])){
                        certo += 1;
                        mandaResultadoFinal(`Muito bem! As cores dos elementos <strong>${Elementos[i]}</strong> e <strong>${Elementos[j]}</strong> são complementares assim como solicitado!`);
                    }else{
                        mandaResultadoFinal(`As cores dos elementos <strong>${Elementos[i]}</strong> e <strong>${Elementos[j]}</strong> não são complementares.`);
                    }
            }
        }if(certo == 2){
            mandaResultadoFinal(`<strong>Você atendeu as minhas expectativas!!!</strong>`);
        }
    }

    Swal.fire({
        title: 'Tem certeza?',
        text: "Você enviará para o cliente o resultado!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, enviar!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Enviado!',
            'Cliente recebeu seu trabalho.',
            'success'
          )

          setTimeout(function () {
            window.location = "final.html";
            }, 2000);
        }
      })
}

let dicas = ["Lembre-se...(preto, cinza, verde e azul)<br>Favorecem os beneficios funcionais de produtos.",
             "Lembre-se...(vermelho, rosa, roxo e amarelo)<br>Favorecem os beneficios  sociais ou sensoriais de produtos.",
             "Lembre-se...É interessante o uso de cores mais contrastantes em diferentes níveis e cores mais similares nos mesmos.",
             "Lembre-se...Cores frias são aquelas que se pode ver durante a noite!",
             "Lembre-se...Cores quentes são aquelas que se pode ver durante o dia!"]

function mudarDica(){
    

    setInterval(function () {
        document.querySelector('#balaoDica').innerHTML = "";
        document.querySelector('#balaoDica').innerHTML = dicas[Math.round(Math.random() * (dicas.length - 1) + 0)];
    }, 5000);
    
}