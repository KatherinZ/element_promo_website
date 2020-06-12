let controller = new ScrollMagic.Controller()

document.getElementById('burger_menu')
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }

//path-анимация дерева
 let svgy = document.querySelectorAll('.svg_anim svg')
 let pathy = document.querySelectorAll('.svg_anim path')
 for (let i = 0; i < pathy.length; i++){
   let pathOne = pathy[i]
   let offset = anime.setDashoffset(pathOne)
   pathOne.setAttribute('stroke-dashoffset', offset)
   anime({
     targets: pathOne,
     strokeDashoffset: [offset, 0],
     duration: 7000,
     delay: 500,
     loop: true,
     direction: 'alternate',
     easing: 'easeInOutSine',
     autoplay: true
   })
 }
 new ScrollMagic.Scene({
   triggerElement: offset,
   triggerHook: "onLeave",
   duration: 7000,
   offset: 1000
 })
