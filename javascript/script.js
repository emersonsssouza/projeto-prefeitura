    let agora = new Date()
    let dia = agora.getDate();
    let mes = agora.getMonth() +1;
    let ano = agora.getFullYear();
    console.log(`${dia} de ${mes} de ${ano}`);

    let resultado = `${dia} / 0${mes} / ${ano}`;

    let seletordiv = document.getElementById('res').style.background = 'white';
    let mostrares = document.getElementById('res').innerHTML = resultado;

    