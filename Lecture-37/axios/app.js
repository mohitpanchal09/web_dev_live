

// axios=returns a promise,3rd party library and waits for the entire data at once
axios.get('https://api.tvmaze.com/search/shows?q=girls')
.then((res)=>{
    console.log(res)
    console.log(res.data)
})
.catch((err)=>{
    console.log(err)
})