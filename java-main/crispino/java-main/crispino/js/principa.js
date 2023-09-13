//-----------------------------------------------
//daqui para baixo começa o js do site

//busca no site pelo titulo e armezena ele dentro da variavel titulo
let titulo = document.querySelector(".titulo");
//mostra no devtroos(f12) o conteudo do texto da variavel titulo
console.log(titulo.textContent);
//altera o conteudo da varial titulo para o texto desejado
titulo.textContent = "Pica Grande Nutição";

//mudanças na tabela
//armazena os dados do paciente os dados do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
//mostra no console o valor da variavel paciente
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura*altura);
console.log(imc);

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;