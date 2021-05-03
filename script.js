let text = document.getElementById('text');
let bird1 = document.getElementById('bird1');
let bird2 = document.getElementById('bird2');
let forest = document.getElementById('forest');
let rocks = document.getElementById('rocks');
let water = document.getElementById('water');
let btn = document.getElementById('btn');
let header = document.getElementById('header');

let textAbout = document.getElementById('text-about');
let imgAbout = document.getElementById('img-about');

let containerCards = document.getElementById('container-cards');
let imageFundo = document.getElementById('image-fundo');
let tituloAventura = document.getElementById('titulo-aventura');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.top = 37 + value * -0.5 + '%';
    bird1.style.top = 50 + value * -1.5 + 'px';
    bird1.style.left = value * 2 + 'px';
    bird2.style.top = value * -1.5 + 'px';
    bird2.style.left = value * -5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = 100 + value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';

    // textAbout.style.transform = `translateX(${value * 1 / 100 + 'px'})`;
    // console.log(textAbout.style.transform = `translateX(${value * 1 + 'px'})`);
});

var cards = [
    {
        nome: 'Camping',
        img: '/img/adventure.webp'
    },
    {
        nome: 'Snowboard',
        img: '/img/snow.png'
    },
    {
        nome: 'Climbing',
        img: '/img/escalada.webp'
    },
    {
        nome: 'Safari',
        img: '/img/safari.webp'
    },
    {
        nome: 'Parachute',
        img: '/img/jump.webp'
    },
    {
        nome: 'Diving',
        img: '/img/diving-19_4x.png'
    },
];

window.addEventListener('load', (e) => {

    cards.forEach((card) => {
        containerCards.innerHTML += `
            <div class="card" id='${card.nome}' onclick='alternarConteudo(this);'>
                <img src="${card.img}" alt="image">
                <p>${card.nome}</p>
            </div>
        `;
    });

});

const alternarConteudo = (e) => {
    var img = document.querySelector(`#${e.innerText} > img`).getAttribute('src');

    imageFundo.setAttribute('src', img)
    tituloAventura.innerText = e.innerText;

    var cardSelecionado = document.querySelector(`#${e.innerText}`);
    var cardAtivo = document.querySelector('.card.active');

    if(cardAtivo !== null) {
        cardAtivo.classList.remove('active');
    }

    cardSelecionado.classList.add('active');
}