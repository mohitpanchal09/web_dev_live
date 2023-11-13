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
let direction='right'


// food generate

function foodGenerate(){
    return [Math.round((Math.random()*(boardWidth-cellSize))/cellSize)*cellSize,
    Math.round((Math.random()*(boardHeight-cellSize))/cellSize)*cellSize
]
}
let food = foodGenerate()

//snake draw
function draw(){
    //erase poora board
    ctx.clearRect(0,0,boardWidth,boardHeight)
    for(let cell of snakeCells){
        ctx.fillStyle='blue'
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize)
    }
    ctx.fillStyle='yellow'
    ctx.fillRect(food[0],food[1],cellSize,cellSize)
}

//update snake
function update(){
    let headX=snakeCells[snakeCells.length-1][0];
    let headY=snakeCells[snakeCells.length-1][1];

    let newHeadX;
    let newHeadY;
    if(direction==='right'){
        newHeadX=headX + cellSize
        newHeadY=headY

    }else if(direction==='left'){
        newHeadY=headY
        newHeadX=headX-cellSize
    }else if(direction==='up'){
        newHeadX=headX
        newHeadY=headY-cellSize
    }else{
        newHeadX=headX
        newHeadY=headY+cellSize
    }
    snakeCells.push([newHeadX,newHeadY]) 
    if(food[0]===newHeadX && food[1]===newHeadY){
        food=foodGenerate()
    }else{
    snakeCells.shift()
    
    }
     
}




// to move up down bottom and left 

document.addEventListener('keydown',(e)=>{
    console.log(e)
    if(e.key==='ArrowUp'){
        direction='up'
    }else if(e.key==='ArrowRight'){
        direction='right'
    }else if(e.key==='ArrowDown'){
        direction='down'
    }else if(e.key==='ArrowLeft'){
        direction='left'
    }

})

setInterval(()=>{
    update()
    draw()
},200)