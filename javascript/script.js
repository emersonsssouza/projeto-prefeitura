    let agora = new Date()
    let dia = agora.getDate();
    let mes = agora.getMonth() +1;
    let ano = agora.getFullYear();
    console.log(`${dia} de ${mes} de ${ano}`);

    let resultado = `${dia} / 0${mes} / ${ano}`;

    let seletordiv = document.getElementById('res').style.background = 'white';
    let mostrares = document.getElementById('res').innerHTML = resultado;

    function mudouTamanho() {
        if (window.innerWidth >= 768) {
            itens.style.display = 'block'
        }

        else{
            itens.style.display  = 'none'
        }
    }

    function clickMenu() {
     
        if (itens.style.display == 'block') {
            itens.style.display = 'none'
        } 

        else {
            itens.style.display = 'block'
        }
    }

    function clickSidebar() {
     
        if (sidebar.style.display == 'block') {
            sidebar.style.display = 'none'
        } 

        else {
            sidebar.style.display = 'block'
        }
    }

    