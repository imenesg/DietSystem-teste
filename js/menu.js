const menu = document.querySelector(".menu");
const x = document.querySelector(".x");

menu.addEventListener("click", mostraMenu);
x.addEventListener("click",mostraMenu);

var contador = 0;
function mostraMenu(){
    
    const menuUl = document.querySelector(".lista-opcoes");

    menuUl.classList.toggle("hide");

   
    
}
