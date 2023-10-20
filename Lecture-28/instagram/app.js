// wrong or right (YOU DECIDE)=>wrong way we lost the control to the program

// function step1(){
//     console.log('selecting image from the gallery')

//     setTimeout(function(){
//         return 'selected image'
//     })
    
// }




// function step2(image){
//     console.log(`applying filter to the ${image} please wait`)

//     setTimeout(function(){
//         return 'filter applied'
//     },2000)
// }
// let image=step1() 
// console.log(image)
// let filteredImage=step2(image)
// console.log(filteredImage)


// ---------------------(RIGHT WAY)---------------------

// function step1(fn){
//     console.log('please wait image is being selected')
//     setTimeout(()=>{
//         console.log('image is selected now')
//         fn('photo.png'); //step2 ka function
//     },4000)
// }

// function step2(image,fn){
//     console.log(`applying filter to ${image}`)
//     setTimeout(()=>{
//         console.log(`filter is applied to ${image}`)
//         fn('filtered.png') //step3 ka function
//     },2000)
// }

// function step3(filter,fn){
//     console.log(`writing caption the ${filter}`)
//     setTimeout(()=>{
//         console.log('caption done')
//         fn(`captionedImage.png`) //step4 ka function
//     },3000)
// }
// function step4(captionedImage){
//     console.log(`uploading your ${captionedImage}`)
//     setTimeout(()=>{
//         console.log(`${captionedImage} is posted`)
//     },5000)
// }

// step1(function(image){
//     step2(image,function(filter){
//         step3(filter,function(captionedImage){
//             step4(captionedImage)
//         });
//     });
// })


function step1(fn){
    console.log('selecting the image')
    setTimeout(()=>{
        console.log('your image is selected')
        fn('photo.png')
    },4000)
}

function step2(image,fn){
    console.log(`applying filter to ${image}`)
    setTimeout(()=>{
        console.log(`filter is applied to ${image}`)
        fn('filteredImage.png')
    },2000)
}
function step3(filterdImage,fn){
    console.log(`applying caption to the ${filterdImage}`)
    setTimeout(()=>{
        console.log(`caption done`)
        fn('captionedImage.png')
    })
}
function step4(captionedImage){
    console.log(`uploading your ${captionedImage}`)
    setTimeout(()=>{
        console.log(`your ${captionedImage} is uploaded now`)
    },3000)
}

step1(function(image){
    step2(image,function(filterdImage){
        step3(filterdImage,function(captionedImage){
            step4(captionedImage)
        })
    })
})