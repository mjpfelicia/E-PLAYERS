// inicializa o jQuery
$(document).ready(function(){
    
    $(".btn").click(function(){
        
        // //pegar os dados dos campos
        
        let nome = $("#nome").val();
        let usuario = $("#usuario").val();
        let senha = $("#senha").val();

        if(nome.trim() == "" || usuario.trim() == "" || senha == ""){
            $(".mensagem").text("Favor preencher todos os campos!");

        } else {
            $(".mensagem").text("Dados enviado com sucesso.");
        }
    });
});