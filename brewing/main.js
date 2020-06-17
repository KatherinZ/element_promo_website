
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }

document.getElementsByClassName('line').onclick = function(){
   document.getElementsByClassName('line').style.animationPlayState = 'paused'
 }

 let arr = [...document.querySelectorAll('.square_1, .square_x')].map(function(el) {

 // рандом через anime

   el.style.transform = `translate(${anime.random(5, 70)}vw, ${anime.random(0, 30)}vh)`



 //рандомный ховер

 let palette = ['#210E0E', '#3D2828', '#483A3A', '#645252', '#8A7C7C', '#928176', '#B5A399', '#DDDAD6']

  el.onmouseenter  = function(){
    el.style.background = palette[Math.floor(Math.random() * palette.length)]
  }
  el.onmouseleave = function(){
    el.style.background = 'none'
  }


 // открытие-закрытие рандомных окон
 let squareOneList = document.querySelectorAll('.inside_0 .square_1', '.inside_1 .square_1')
 let squareTwoList = document.querySelectorAll('.inside_0 .square_2', '.inside_1 .square_2')

 Array.from(squareOneList).forEach(element => {

   let childSquareTwo = element.querySelector('.inside_0 .square_2', '.inside_1 .square_2')
   let closeBtn = childSquareTwo.querySelector('.close')

   element.onclick = function(){
     childSquareTwo.style.display = 'block'
     childSquareTwo.style.zIndex = 'this.style.zIndex + 50'
   }
   closeBtn.onclick = function(e){
     e.stopPropagation()
     childSquareTwo.style.display = 'none'
   }
 })

 })






  // анимация свг внутри больших квадратов

 let svg2 = document.querySelectorAll('.all_elements svg')
 let path2 = document.querySelectorAll('.all_elements path')
 for (let i = 0; i < path2.length; i++){
   let pathOne = path2[i]
   let offset = anime.setDashoffset(pathOne)
   pathOne.setAttribute('stroke-dashoffset', offset)
   anime({
     targets: pathOne,
     strokeDashoffset: [offset, 0],
     duration: 4000,
     delay: 500,
     loop: true,
     direction: 'alternate',
     easing: 'easeInOutSine',
     autoplay: true
   })
 }
