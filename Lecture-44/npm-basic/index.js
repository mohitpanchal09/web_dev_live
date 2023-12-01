const jokes=require('give-me-a-joke')
const figlet = require('figlet');
const colors= require('colors')
jokes.getRandomDadJoke((joke)=>{
    console.log(joke)
})

figlet("samarth bhaiya",function(err,data){
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data.rainbow);
})

