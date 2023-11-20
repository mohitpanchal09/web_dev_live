// using fetch

// fetch('https://api.tvmaze.com/search/shows?q=girls')
// .then((res)=>{
//     return res.json()
// })
// .then((res)=>{
//     console.log(res)
// })

//using axios

// axios.get('https://api.tvmaze.com/search/shows?q=girls')
// .then((res)=>{
//     console.log(res.data)
// })

//adding event listener to get shows when search button clicked
let searchButton=document.querySelector(`button`)
let input = document.querySelector('input')
let list = document.querySelector('#list')
searchButton.addEventListener('click',()=>{
    let cat = input.value;
    let data=fetchData(cat)
    input.value=''
    
})

function fetchData(cat){
    axios.get(`https://api.tvmaze.com/search/shows?q=${cat}`)
    .then((res)=>{
        renderShows(res.data)
    })
}

function renderShows(shows){
    // list.innerHTML=''
    // or
    while(list.firstChild){
        list.firstChild.remove()
    }
    for(let show of shows){
        let figure = document.createElement('figure')
        figure.innerHTML=`
        <div class="card" style="width: 18rem; ">
        <img src=${show.show.image.medium} class="card-img-top" />
        <div class="card-body">
        <p class='card-text'>Name :${show.show.name}</p>
        <p lass='card-text'>Language: ${show.show.language}</p>
        </div>
        </div>
        `
        list.appendChild(figure)
        // img.setAttribute('src',show.)
    }
}