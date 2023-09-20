

//-----------------------------------------------
//daqui para baixo começa o js do site

//busca no site pelo titulo e armezena ele dentro da variavel titulo
let titulo = document.querySelector(".titulo");
//mostra no devtroos(f12) o conteudo do texto da variavel titulo
console.log(titulo.textContent);
//altera o conteudo da varial titulo para o texto desejado
titulo.textContent = " Grande Nutrição";

//mudanças de tabela


//armazena no array pacientes os dados de todos os pacientes
let pacientes = document.querySelectorAll(".paciente");

//criação do looping for
for (i = 0; i < pacientes.length; i ++) {

let paciente = pacientes[i];
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;


console.log(imc); 

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

//validação de dados

let pesoEhValido = true;
let alturaEhValida = true;
let  

(peso<= 0) ; {
console.log("peso invaldio");
pesoEhValido = false 
}

if(altura <=0 || altura >= 3) {
    tdImc.textContent = "altura invalida" 
    alturaEhValida = false;                         
}

if(pesoEhValido && alturaEhValida){
let imc = peso / (altura*altura);
}
    
}

