// step1
// let canvas =document.querySelector('canvas')
// ctx=canvas.getContext('2d')

// let cellSize=50;
// let boardHeight=600
// let boardWidth=1000;
// //snake draw
// function draw(){


// }

// //update snake
// function update(){

// }

// setInterval(()=>{
//     update()
//     draw()
// },200)

// --------------------------------------

//step2
// let canvas =document.querySelector('canvas')
// let ctx=canvas.getContext('2d')

// let cellSize=50;
// let boardHeight=600
// let boardWidth=1000;

// //snakeCells
// let snakeCells=[[0,0]] 

// //snake draw
// function draw(){
//     //erase poora board
//     ctx.clearRect(0,0,boardWidth,boardHeight)
//     for(let cell of snakeCells){
//         ctx.fillStyle='blue'
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize)
//     }
// }

// //update snake
// function update(){
//     let headX=snakeCells[snakeCells.length-1][0];
//     let headY=snakeCells[snakeCells.length-1][1];
//     let newHeadX= headX+cellSize
//     let newHeadY= headY;
//     snakeCells.push([newHeadX,newHeadY])
//     snakeCells.shift()
// }

// setInterval(()=>{
//     update()
//     draw()
// },200)

// step3---------------------------------------------------------------
let canvas =document.querySelector('canvas')
let ctx=canvas.getContext('2d')

let cellSize=50;
let boardHeight=600
let boardWidth=1000;

//snakeCells
let snakeCells=[[0,0]] 

//snake draw
function draw(){
    //erase poora board
    ctx.clearRect(0,0,boardWidth,boardHeight)
    for(let cell of snakeCells){
        ctx.fillStyle='blue'
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize)
    }
}

//update snake
function update(){
    let headX=snakeCells[snakeCells.length-1][0];
    let headY=snakeCells[snakeCells.length-1][1];
    let newHeadX= headX+cellSize
    let newHeadY= headY;
    snakeCells.push([newHeadX,newHeadY])
    snakeCells.shift()
}

setInterval(()=>{
    update()
    draw()
},200)