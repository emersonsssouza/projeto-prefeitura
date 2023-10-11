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

function municipio() {
  var municipio = document.getElementById("menu-municipio");
  if(municipio.style.display === "block") {
    municipio.style.display = "none"
  } else {
    municipio.style.display = "block"
  }
}
