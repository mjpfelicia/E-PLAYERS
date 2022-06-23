
    const click = document.querySelector(".navbar-toggler");

    click.addEventListener("click", function () {
        const mostra = document.querySelector(".menu-responsivo");
        if (mostra.style.display === "none")
            mostra.style.display = "flex";
        else {
            mostra.style.display = "none";
        }
    })

