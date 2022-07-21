
// mostra e esconde menu javascript
const click = document.querySelector("#menu-bars");

click.addEventListener("click", function () {
    let navbar = document.querySelector(".menu");
    navbar.classList.toggle("mostraEscondeMenu");
})

// percorendo  os btn da paginas suas funções jQuery

$(document).ready(function () {

    $(".btn-liga").click(function () {
        alert("Este produto não está disponível");
    });

});



// validando o email jQuery
$(document).ready(function () {
    $("strong").hide();
    $('#verificar-email').click(function () {
        //desabilitando o submit do form
        $("form").submit(function () { return false; });
        //atribuindo o valor do campo
        const sEmail = $("#email").val();
        // filtros
        const emailFilter = /^.+@.+\..{2,}$/;
        const illegalChars = /[\(\)\<\>\,\;\:\\\/\"\[\]]/
        // condição
        if (!(emailFilter.test(sEmail)) || sEmail.match(illegalChars)) {
            $("strong").show().removeClass("ok").addClass("erro")
                .text('Por favor, informe um email válido.');
        } else {
            $("strong").show().addClass("ok")
                .text('E-mail enviado com sucesso.');
        }
    });
    $('#email').focus(function () {
        $("p.erro").hide();
    });
});

