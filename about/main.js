
document.getElementById('burger').onclick = function(){
   document.getElementById('burger_menu').style.display = 'block'
 }
document.getElementById('cross').onclick = function(){
   document.getElementById('burger_menu').style.display = 'none'
 }


//  let controller = new ScrollMagic.Controller();
// let zag2 = document.getElementById('zag_2')
// let play = function () { // wait for document ready
//   // build scene
//   let scene = new ScrollMagic.Scene({triggerElement: "#zag_2", duration: 300})
//           .setPin("#pin1")
//           .addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
//           .addTo(controller);
// }
