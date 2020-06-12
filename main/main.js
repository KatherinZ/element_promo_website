let blocks = [...document.querySelectorAll('.block_1')].map(function(el) {

  el.style.transform = `translate(${anime.random(5, 100)}vw, ${anime.random(0, 50)}vh)`

  for(i = 0; i < 8; i++){

    document.body.onclick = function(){
      el.style.display = 'block'
    }
  }
})

let rand = Math.floor(Math.random() * blocks.length)



document.getElementById('burger_menu')
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }


// создать массив с элементами

//выбрать рандомный элемент

//задать ему рандомное местоположение

//отобразить его по клику
