
// alert("o javascript do arquivo externo está sendo executado");


function cadastrarNewsLetter() {

    let email = document.getElementById("campo-email").value
    alert(email);
}

function mostrarMenu() {

    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {

        menu.style.display = 'flex';
    } else {

        menu.style.display = 'none';
    }
}