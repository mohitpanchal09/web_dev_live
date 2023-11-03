let songList = document.getElementById('song-list')
let progress = document.getElementById('progress-bar')

let playBtn = document.getElementById('play-button')
let forwardButton = document.getElementById('forward-button')
console.log(forwardButton)
let backwardButton = document.getElementById('backward-button')

let songs = [
    {
        name:'song1',
        id:1
    },
    {
        name:'song2',
        id:2
    },
    
]

let audio=new Audio('./assets/song1.mp3')
let currentId=0
progress.value=0
// show the song list in the ui

for (let song of songs){
    let li = document.createElement('li')
    console.log(li)
    li.innerText= song.name
    li.setAttribute('id',song.id)
    li.classList.add('song-item')
    songList.append(li)
}

//play button ka icon badlo or gana chalao
playBtn.addEventListener('click',()=>{
    
    audio.paused ? audio.play(): audio.pause();
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
        

    }else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')
    }
})

//current time ke hisab se range chale
audio.addEventListener('timeupdate',()=>{
    let currentProgress = audio.currentTime * 100/audio.duration
    progress.value=currentProgress
})

// drag krne se gana chale when progress we change
progress.addEventListener('change',()=>{
    let updatedtime = audio.duration*progress.value/100
    audio.currentTime=updatedtime;
})

songList.addEventListener(('click'),(e)=>{
    let songId = e.target.getAttribute('id')
    audio.src=`./assets/song${songId}.mp3`
    audio.currentTime=0;
    audio.play()
    playBtn.children[0].classList.add('fa-pause')
    playBtn.children[0].classList.remove('fa-play')
    currentId=songId
})

forwardButton.addEventListener('click',()=>{
    currentId=(currentId+1)%songs.length
    
    console.log(currentId)
    audio.src=`./assets/song${songs[currentId].id}.mp3`
    audio.currentTime=0
    audio.play()
    playBtn.children[0].classList.add('fa-pause')
    playBtn.children[0].classList.remove('fa-play')
    
})
backwardButton.addEventListener('click',()=>{
    currentId=currentId-1
    if(currentId<0){
        currentId=songs.length-1
    }
    audio.src=`./assets/song${songs[currentId].id}.mp3`
    audio.play()
    playBtn.children[0].classList.add('fa-pause')
    playBtn.children[0].classList.remove('fa-play')
})