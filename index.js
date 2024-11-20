console.log("Welcome to Musicify");
// Inititalise the Vaiable
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');

let songs=[
    {songName: "Aaj Ki Raat", filePath:"1.mp3", coverPath: "2.jpg"},
    {songName: "Allah Maaf Kare - Desi Boyz", filePath:"2.mp3", coverPath: "3.jpg"},
    {songName: "Dope Shope - Yo Yo Honey Singh", filePath:"3.mp3", coverPath: "4.jpg"},
    {songName: "Let it be - Desi Boyz", filePath:"4.mp3", coverPath: "68155_4.jpg"},
    {songName: "Make Some Noise For Desi Boyz", filePath:"5.mp3", coverPath: "5.jpg"},
    {songName: "Subah Hone Na De - Desi Boyz", filePath:"6.mp3", coverPath: "6.jpg"},
    {songName: "This party Getting Hot - Yo Yo Honey Singh", filePath:"7.mp3", coverPath: "7.jpg"},
    {songName: "Tu Mera Hero - Desi Boyz", filePath:"8.mp3", coverPath: "8.jpg"},
]
audioElement.play();

// Handle Play / Pause Click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
}) 

// Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    // Update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');

    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        gif.style.opacity=1;
        masterSongName.innerHTML=songs[songIndex].songName;
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        audioElement.currentTime=0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
            songIndex=0
    }
    else{
        songIndex+=1;
    }
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
            songIndex=0
    }
    else{
        songIndex-=1;
    }
        audioElement.src=`${songIndex+1}.mp3`;
        masterSongName.innerHTML=songs[songIndex].songName;
        masterSongName.innerHTML=songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})