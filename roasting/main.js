document.getElementById('burger_menu')
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }

 dragElement(document.getElementById("first_box"))
 dragElement(document.getElementById("second_box"))
 dragElement(document.getElementById("third_box"))
 dragElement(document.getElementById("fourth_box"))
 dragElement(document.getElementById("fifth_box"))
 dragElement(document.getElementById("sixth_box"))
 dragElement(document.getElementById("seventh_box"))
 dragElement(document.getElementById("eighth_box"))

 function dragElement(elmnt) {
   let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0
   if (document.getElementById(elmnt.id + "header")) {
     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown
   } else {
     elmnt.onmousedown = dragMouseDown
   }

   function dragMouseDown(e) {
     e = e || window.event
     e.preventDefault()
     pos3 = e.clientX
     pos4 = e.clientY
     document.onmouseup = closeDragElement
     document.onmousemove = elementDrag
   }

   function elementDrag(e) {
     e = e || window.event
     e.preventDefault()
     pos1 = pos3 - e.clientX
     pos2 = pos4 - e.clientY
     pos3 = e.clientX
     pos4 = e.clientY
     elmnt.style.top = (e.clientY - 370) + 'px'
     elmnt.style.left = (e.clientX - 850) + 'px'
     let cover = elmnt.style.zIndex
     elmnt.style.zIndex = cover + '100'
   }

   function closeDragElement() {

     document.onmouseup = null
     document.onmousemove = null
   }
 }

 // 
 // let colorPalette = document.querySelectorAll('.palette .color')
 // let textPalette = document.querySelectorAll('.palette p')
 //
 // Array.from(colorPalette).forEach(element => {
 //
 //   let childText = element.querySelector('p')
 //
 //   element.onclick = function(){
 //     childText.style.display = 'block'
 //     element.style.opacity = '0'
 //   }
 //   element.onmouseleave = function(){
 //     childText.style.display = 'none'
 //     element.style.opacity = '1'
 //   }
 //
 // })
