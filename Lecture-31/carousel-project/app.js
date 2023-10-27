let image=document.querySelector('img')
console.log(image)
let sources=[
'https://plus.unsplash.com/premium_photo-1697504578956-fdb28e11933c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8',
'https://images.unsplash.com/photo-1698089650324-a1b02d97b1fd?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8','https://images.unsplash.com/photo-1697799759368-2853eed5af65?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8','https://images.unsplash.com/photo-1694310457196-a73c0de14d95?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
]

let index=0
let id=setInterval(()=>{
    image.setAttribute('src',sources[index])
    index=(index+1)%sources.length;
},2000)

setTimeout(()=>{
    clearInterval(id)
},30000)