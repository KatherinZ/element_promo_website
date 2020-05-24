let blocks = [...document.querySelectorAll('.block_1')].map(function(el) {
  el.style.transform = `translate(${anime.random(5, 100)}vw, ${anime.random(0, 50)}vh)`
})
let randomItem = blocks[Math.floor(Math.random() * blocks.length)]


document.getElementById('burger_menu')
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }

document.body.onclick = function(){
  randomItem.style.display = 'block'
}
