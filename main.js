// let blocks = [...document.querySelectorAll('.block_1')].map(function(el) {
//
//   el.style.transform = `translate(${anime.random(5, 100)}vw, ${anime.random(0, 50)}vh)`
//
//   for(i = 0; i < 8; i++){
//
//     document.body.onclick = function(){
//       el.style.display = 'block'
//     }
//   }
//   let rand = Math.floor(Math.random() * blocks.length)
//
// })

let arr = [...document.querySelectorAll('.block_1')].map(function(el) {

// рандом через anime

  el.style.transform = `translate(${anime.random(5, 95)}vw, ${anime.random(0, 80)}vh)`
})



document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }



 let cezveEl =  document.getElementById('element_j')
 let cezve = anime({
  targets: cezveEl,
  translateY: -10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
let espressoEl =  document.getElementById('element_es')
let espresso = anime({
  targets: espressoEl,
  translateX: -10,
  translateY: 10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
let rafEl =  document.getElementById('element_ra')
let raf = anime({
  targets: rafEl,
  translateX: 10,
  translateY: 10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
let voronkaEl =  document.getElementById('element_vo')
let voronka = anime({
  targets: voronkaEl,
  translateY: 10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
let capuccinoEl =  document.getElementById('element_kp')
let capuccino = anime({
  targets: capuccinoEl,
  translateX: 10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
let latteEl =  document.getElementById('element_la')
let latte = anime({
  targets: latteEl,
  translateX: -10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})
let vEl =  document.getElementById('element_v')
let v60 = anime({
  targets: vEl,
  translateX: -10,
  translateY: -10,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
})

document.getElementsByClassName('h1').onclick = function(){
  el.style.filter = 'none'
}

// создать массив с элементами

//выбрать рандомный элемент

//задать ему рандомное местоположение

//отобразить его по клику
