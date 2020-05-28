
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }

document.getElementsByClassName('line').onclick = function(){
   document.getElementsByClassName('line').style.animationPlayState = 'paused'
 }
