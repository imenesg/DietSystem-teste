var img = document.querySelector(".img-refeicao");
var body = document.querySelector("body")

img.addEventListener("click", aumentaFoto)

function aumentaFoto(){
    body.classList.toggle("blur")
    img.classList.toggle("grayscale");
    img.classList.toggle("img-refeicao");
    img.classList.toggle("img-refeicao-maior");
    
}