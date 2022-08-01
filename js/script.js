//Script Menu
function Abrir(){
    document.getElementById('fechar').style.display = 'block';
}
function Closemenu(){
    document.getElementById('fechar').style.display =  'none';
}

//Script Tela Favoritos
function Abrirpopup(){
    document.getElementById('popup').style.display = 'block';
}
function Fecharpopup(){
    document.getElementById('popup').style.display =  'none';
}

//Script Scroll Slider
window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
    slidesToShow: 7,
        arrows: {
            prev: '.carousel-seguiente',
            next: '.carousel-proximo'
        }
    });
});

//Script Loading
var i = setInterval(function () {
    clearInterval(i);
    document.getElementById("loading").style.display = "none";
    document.getElementById("conteudo").style.display = "inline";
}, 3000);

  