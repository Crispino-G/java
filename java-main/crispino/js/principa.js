alert("o arquivo separado está funcionando")

//-----------------------------------------------
//daqui para baixo começa o js do site

//busca no site pelo titulo e armezena ele dentro da variavel titulo
let titulo = document.querySelector(".titulo");
//mostra no devtroos(f12) o conteudo do texto da variavel titulo
console.log(titulo.textContent);
//altera o conteudo da varial titulo para o texto desejado
titulo.textContent = "Pica Grande Nutição";