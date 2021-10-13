const $btnUp = document.querySelector('#btnUp'),
      $btnDown = document.querySelector('#btnDown'),
      $imgUp = document.querySelector('#imgUp'),
      $imgLevi = document.querySelector('#levi');// переменная для задания номер2

$btnDown.addEventListener('click', ()=>{
    $imgUp.style.top =33+'px'
});

$btnUp.addEventListener('click', ()=>{
    $imgUp.style.top = 0
});

// задание №"2
$imgLevi.addEventListener('animationend',()=>{
    $imgLevi.classList.remove('fade1')
    $imgLevi.classList.add('fade2')
})