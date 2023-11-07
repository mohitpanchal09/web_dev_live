// white board
let canvas=document.querySelector('canvas')

//brush
let ctx = canvas.getContext('2d');

//dip the brush in paint
// ctx.fillStyle='red'

// //draw rectangle
// ctx.fillRect(120,120,50,50) //x,y,w,h

// // --------------------------------------

// //brush ko dubao and outline do
// ctx.strokeStyle='purple'
// // outline dena
// ctx.strokeRect(60,60,50,50)

// ------------------------------------------

// lets draw paths
// ctx.beginPath();
// ctx.moveTo(20,20)
// ctx.lineTo(120,130);
// ctx.lineTo(20,130)
// ctx.lineTo(130,50)
// ctx.fillStyle='blue'
// ctx.stroke()
// // ctx.fill()
// ctx.closePath()

// -------------------------------------------

// let's draw text
ctx.fillStyle='red'
ctx.font='28px cursive'
ctx.fillText('Samarth',250,250)