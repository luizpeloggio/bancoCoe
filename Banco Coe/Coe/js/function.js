//JavaScript
window.onload = function() {
    var span1 = document.querySelector(".bnt"); // Seleciona o span com a classe "bnt"
    span1.addEventListener('click', function() {
        var w50P = document.querySelector(".w50 article p"); // Seleciona o parágrafo dentro do artigo
        w50P.classList.toggle('mostrar');
    });

    function smartphone(){
        let menu = document.querySelector(".interativa .smartphone-interativa .smartphone .body-smartphone .menu-displaySmartphone");
        let voltar = document.querySelector(".interativa .smartphone-interativa .smartphone .body-smartphone .menu-displaySmartphone .voltar span");
        let click = document.querySelector(".interativa .smartphone-interativa .smartphone .header-smartphone .menu-smartphone");
        click.addEventListener('click', ()=>{
            menu.classList.add("ative");
        });
        voltar.addEventListener('click', ()=>{
            menu.classList.remove("ative");

        });
    }smartphone();

    function opcoeSmartphone(){
      
        $("#emprestimos").click(function(){
            $(".emprestimos").toggle();
        });

        $("#fatura").click(function(){
            $(".fatura").toggle();
        });

        $("#cofrinho").click(function(){
            $(".cofrinho").toggle();
        });
        
        $("#pix").click(function(){
            $(".pix").toggle();
        });
        
    }
    opcoeSmartphone();

    function linkTeste(){
        let link = $(".body-smartphone .textoCartao a");
        link.click(function (event) {
            event.preventDefault(event); 
        });

        let link2 = $(".cartao-banco .cartao-single .card .textoCartao a");
        link2.click(function (event) {
            event.preventDefault(event);
        })
    }linkTeste();

function telaExpande() {
    const $momentos   = $(".banco_momentos .container .momentos_singular");
    const $paragrafos = $(".banco_momentos .centro_banco .momentos_singular_artigos");

    $momentos.off("click").on("click", function () {
        const index = $momentos.index(this);

        // Expande/fecha o card clicado
        $(this).toggleClass("expandir");
        $momentos.not(this).removeClass("expandir");

        // Mostra/oculta o parágrafo correspondente
        $paragrafos.eq(index).toggleClass("aparecer");
        $paragrafos.not($paragrafos.eq(index)).removeClass("aparecer");
    });
}

telaExpande();
};



//Jquery
$(function(){
        //console.log($('.declaracao').html());
});

