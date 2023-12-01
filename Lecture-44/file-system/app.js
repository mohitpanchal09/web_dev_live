let fs = require('fs') //object
 
let data = 'my name is samarth'

// create=> writeFile()
//4 arguements
fs.writeFile('abc.txt',data,
{
    //optional arguement
    encoding:'utf-8',
    flag:'w'
},
(err)=>{
    if(err){
        throw err
        
    }
    console.log('file written succesfully')
})


//read - > readFile()

fs.readFile('def.txt',

// {
//     encoding:'utf-8',
//     flag:'r'
// },
(err,data)=>{
    if(err){
        throw err
    }
    console.log(data.toString()) //data is returned in buffer form=>change to string
    
})

//update -> appendFile()

fs.appendFile('abc.txt','bhaukali samarth bhaiya',

// {},
(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('file editted successfully')
    }
})

//delete -> unlink()

fs.unlink('def.txt',(err)=>{
    if(err){
        throw err
    }
    console.log('deleted succesfully')
})