let ul = document.getElementById('movie-list')
let searchButton = document.querySelector('#search-button')
console.log(searchButton)
let movies;
async function movieFetch(search){
    movies = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`).then((res)=>{
        return res.json()
    })
    renderMovies(movies)
    

    
}
function renderMovies(movies){
    for(let movie of movies){
        console.log(movie)
        let div=document.createElement('div')
        div.classList.add('card')
        div.setAttribute('style','width: 18rem;')
    
        let img = document.createElement('img')
        img.src = movie.show.image.medium
        img.classList.add('card-img-top')
        let innerDiv= document.createElement('div')
        innerDiv.classList.add('card-body')
        let p = document.createElement('p')
        p.classList.add('card-text')
        p.textContent=movie.summary
        innerDiv.appendChild(p)
        div.appendChild(img)
        div.appendChild(innerDiv)
        ul.appendChild(div)
    }
}
searchButton.addEventListener('click',()=>{
    
    let searchText= document.getElementById('search-text')
    if(searchText.value!==''){
        movieFetch(searchText.value)

    }
    
})
