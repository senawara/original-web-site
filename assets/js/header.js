// 全てに接続
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

$('.nav-items__item').on("click",function(){
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});