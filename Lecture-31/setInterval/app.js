let Id= setInterval(()=>{
    console.log('helllo')
},2000)

setTimeout(()=>{
    clearInterval(Id)
},10000)