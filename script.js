let agora = new Date();
let dia = agora.getDate();
let mes = agora.getMonth() + 1;
let ano = agora.getFullYear();
console.log(`${dia} de ${mes} de ${ano}`);

let resultado = `${dia} / ${mes} / ${ano}`;

let seletordiv = (document.getElementById("res").style.background = "white");
let mostrares = (document.getElementById("res").innerHTML = resultado);

function clickMenu() {
  var navMobile = document.getElementById("nav-mobile");
  if (navMobile.style.display === "block") {
    navMobile.style.display = "none";
  } else {
    navMobile.style.display = "block";
  }
  console.log("clicou");
}

function clickSubMenu() {
  var listMobile = document.getElementById("main-list-mobile");
  if (listMobile.style.display === "block") {
    listMobile.style.display = "none";
  } else {
    listMobile.style.display = "block";
  }
  console.log("clicou no 2° menu");
}

  //Fechar menu quando clicado em outro menu (DESKTOP, GRANDES TELAS!)
  // Selecionar todos os links do menu
const menuLinks = document.querySelectorAll(".main-opçoes .dropdown-container a");

  // Adicionar um evento de clique a cada link
  menuLinks.forEach(link => {
    link.addEventListener("click", function (event) {
      // Evitar que o link redirecione para outra página
      event.preventDefault();

      // Fechar todos os menus
      const allDropdowns = document.querySelectorAll(".main-opçoes .dropdown-content");
      allDropdowns.forEach(dropdown => {
        dropdown.style.display = "none";
        });

      // Abrir o menu associado ao link clicado
      const dropdown = this.nextElementSibling;
          dropdown.style.display = "block";
      });
  });

