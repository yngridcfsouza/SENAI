
$(document).ready(function () {

    let slideAtual = 1
    let listaSlides = ["banner-principal", "banner-cs", "banner-lol"]

    setInterval(mudarSlide, 2000)

    function mudarSlide () {
        // Remover o slide atual
        if (slideAtual > 0) {
            $("#carrossel").removeClass(listaSlides[slideAtual - 1])
        } else {
            $("#carrossel").removeClass(slideAtual[(listaSlides.length - 1)])
        }

        // Exibir o slide atual
        $("#carrossel").addClass(listaSlides[slideAtual])

        // Indicar qual o slide atual
        console.log("Slide atual é:", slideAtual)

        slideAtual++

        if (slideAtual > listaSlides.length - 1) {
            slideAtual = 0
        }

    }


    $("#barras").click(function() {

        if ($("#menu").hasClass("menu-ativo")) {
            $("#menu").removeClass("menu-ativo")
        } else {
            $("#menu").addClass("menu-ativo")
        }
    })

})

function cadastrarNewsLetter() {

    let email = document.getElementById("campo-email").value
    alert(email);
}

function mostrarMenu() {

    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == 'none') {

        menu.style.display = 'flex'

    } else {

        menu.style.display = 'none'
    }
}