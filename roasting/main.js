document.getElementById('burger_menu')
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }

 document.querySelector('.palette .color').onclick = function(){
    document.querySelector('.palette .color p').style.zIndex = '5'

  }
