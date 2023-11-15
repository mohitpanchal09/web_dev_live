//web api=> which returns a promise

fetch('https://api.tvmaze.com/search/shows?q=girls')
.then((response)=>{
    console.log(response,'respononse')
    return response.json() //parses the data and returns a promise=>sare packet ka wait krega
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

