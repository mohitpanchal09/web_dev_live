// select picture
// filter
// caption
// upload

// whenever you assign any function to any variable then it is called first class functions
let step1 = function(){
    console.log('selecting the image')

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve('photo.png')
        },4000)
    })
}

let step2 = function(image){
    console.log(`applying filter to ${image}`)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('filtered.jpg')
        },4000)
    })
}

let step3 = function(filter){
    console.log('adding caption to image')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve('captioned.png')
            
        },3000)
    })
}

let step4= function(captioned){
    console.log('image is being uploaded')
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('image uploaded')

    },2000)
    })
}
// promise chaining
step1()
.then(function(image){
    console.log('image selected')
    return step2(image)
})
.then(function(filter){
    console.log('filter applied')
    return step3(filter)
})
.then(function(captioned){
    console.log(`applied caption to ${captioned}`)
    return step4(captioned)
})
.then(function(final){
    console.log(final)
})
.catch((err)=>{
    console.log(err)
})