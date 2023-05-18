

    /* intro */
let intro = document.querySelector('.intro');
let innerBtn1 = document.querySelector('#inner_btn1');
let innerBtn2 = document.querySelector('#inner_btn2');
let innerBtn3 = document.querySelector('#inner_btn3');
let innerBtn4 = document.querySelector('#inner_btn4');

innerBtn1.addEventListener('click', ()=>{
    innerBtn1.classList.remove('active');
    innerBtn2.classList.remove('active');
    innerBtn3.classList.remove('active');
    innerBtn4.classList.remove('active');
    innerBtn1.classList.add('active');
    intro.style.background = 'url(./assets/images/intro1.jpg) center no-repeat';
});

innerBtn2.addEventListener('click', ()=>{
    innerBtn1.classList.remove('active');
    innerBtn2.classList.remove('active');
    innerBtn3.classList.remove('active');
    innerBtn4.classList.remove('active');
    innerBtn2.classList.add('active');
    intro.style.background = 'url(./assets/images/intro2.jpg) center no-repeat';
});

innerBtn3.addEventListener('click', ()=>{
    innerBtn1.classList.remove('active');
    innerBtn2.classList.remove('active');
    innerBtn3.classList.remove('active');
    innerBtn4.classList.remove('active');
    innerBtn3.classList.add('active');
    intro.style.background = 'url(./assets/images/intro3.jpg) center no-repeat';
});

innerBtn4.addEventListener('click', ()=>{
    innerBtn1.classList.remove('active');
    innerBtn2.classList.remove('active');
    innerBtn3.classList.remove('active');
    innerBtn4.classList.remove('active');
    innerBtn4.classList.add('active');
    intro.style.background = 'url(./assets/images/intro4.jpg) center no-repeat';
});
// console.log(innerBtn);




// document.querySelector('#inner_btn1').onclick = function () {
//     intro.style.background = 'url(./assets/images/intro1.jpg) center no-repeat';
// }
// document.querySelector('#inner_btn2').onclick = function () {
//     intro.style.background = 'url(./assets/images/intro2.jpg) center no-repeat';
// }
// document.querySelector('#inner_btn3').onclick = function () {
//     intro.style.background = 'url(./assets/images/intro3.jpg) center no-repeat';
// }
// document.querySelector('#inner_btn4').onclick = function () {
//     intro.style.background = 'url(./assets/images/intro4.jpg) center no-repeat';
// }



