const allMusics =[
    {
        name: 'Bang Bang',
        artist: 'Rita Ora, Imanbek',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/e/2/f/3/e2f3da512dcd104613f3b4151ce67438.jpg',
        src: './assets/songs/Bang\ Bang\ -\ Rita\ Ora\,\ Imanbek\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Break Up Song',
        artist: 'Little Mix',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/b/1/2/9b12a6502af50460f5985626d7e654da.jpg',
        src: './assets/songs/Break\ Up\ Song\ -\ Little\ Mix\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Confetti',
        artist: 'Little Mix, Saweetie',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/1/b/c/3/1bc338c18c17a847b3e8f0bc633a5785.jpg',
        src: './assets/songs/Confetti\ -\ Little\ Mix\,\ Saweetie\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Hanvana',
        artist: 'Camila Cabello, Young Thug',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/7/9/8/4/7984d7bdc2c530d4e32cc1f432ddf4f7.jpg',
        src: './assets/songs/Havana\ -\ Camila\ Cabello\,\ Young\ Thug\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Hello',
        artist: 'Adele',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_png/cover/c/2/8/5/c2850432d76d6575e1399216c38edf57.png',
        src: ' ./assets/songs/Hello\ -\ Adele\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Rolling in the Deep',
        artist: 'Adele',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_png/cover/c/2/8/5/c2850432d76d6575e1399216c38edf57.png',
        src: './assets/songs/Rolling\ in\ the\ Deep\ -\ Adele\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Señorita',
        artist: 'Shawn Mendes, Camila Cabello',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/8/5/a/5/85a53f3a6ddb48f53d2602f5f7cbda69.jpg',
        src: './assets/songs/Señorita\ -\ Shawn\ Mendes\,\ Camila\ Cabello\ -\ Bài\ hát\,\ lyrics.mp3'
    },
    {
        name: 'Space Melody',
        artist: 'VIZE, Alan Walker, Leony, Edward Artemyev',
        img: 'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/0/e/2/7/0e27b22918709998c294fd94d5115fd4.jpg',
        src: './assets/songs/Space\ Melody\ \(Edward\ Artemyev\)\ -\ Nhiều\ nghệ\ sĩ\ -\ Bài\ hát\,\ lyrics.mp3'
    },
]

const wrapper = document.querySelector('.wrapper'),
musicImg = wrapper.querySelector('.img-area img'),
musicName = wrapper.querySelector('.song-details .name'),
musicArtist = wrapper.querySelector('.song-details .artist'),
mainAudio = wrapper.querySelector('#main-audio'),
musicProgress = wrapper.querySelector('.progress-area .progress-bar'),
musicProgressClick = wrapper.querySelector('.progress-area'),
musicCurrentTimer = wrapper.querySelector('.progress-area .timer .current'),
musicDurationTimer = wrapper.querySelector('.progress-area .timer .duration'),
controls = wrapper.querySelector('.controls'),
repeatBtn = wrapper.querySelector('#repeat'),
prevBtn = wrapper.querySelector('#prev'),
nextBtn = wrapper.querySelector('#next'),
playPauseBtn = wrapper.querySelector('.play-pause'),
showMore = wrapper.querySelector('#more-music'),
closeShowMore = wrapper.querySelector('#close'),
musicList = wrapper.querySelector('.music-list'),
songListBar = musicList.querySelector('.song-list'),
audioDurationBar = musicList.querySelector('.audio-duration');







let musicIndex = 1

window.addEventListener('load', () => {
    loadMusics(musicIndex)
    // loadSongList()
    playingSongBar()
    


})

// load musics 
function loadMusics(indexNumb) {
    musicImg.src = allMusics[indexNumb - 1].img
    musicName.textContent = allMusics[indexNumb - 1].name
    musicArtist.textContent = allMusics[indexNumb - 1].artist
    mainAudio.src = allMusics[indexNumb - 1].src
}

// define playMusic
function playMusic() {
    wrapper.classList.add('paused')
    playPauseBtn.querySelector('i').innerText = 'pause'
    mainAudio.play()
}

// Pause Mucic
function pauseMusic() {
    wrapper.classList.remove('paused')
    playPauseBtn.querySelector('i').innerText = 'play_arrow'

    mainAudio.pause()
}

// Next music
function nextMusic() {
    musicIndex ++
    musicIndex > allMusics.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusics(musicIndex)
    playMusic()

}
// prev music
function prevMusic() {
    musicIndex --
    musicIndex < 1 ? musicIndex = allMusics.length : musicIndex = musicIndex

    loadMusics(musicIndex)
    playMusic()

}
// shuffle music
function shuffMusic() {
    let currentMusicIndex
    do {
        currentMusicIndex = Math.floor(Math.random()*allMusics.length)

    } while(musicIndex == currentMusicIndex)

    musicIndex = currentMusicIndex + 1
    loadMusics(musicIndex)
    playMusic()
}



// click Play
playPauseBtn.addEventListener('click', () => {
    const isMusicPaused = wrapper.classList.contains('paused')
    isMusicPaused ? pauseMusic() : playMusic()
})


// click next song
nextBtn.addEventListener('click', () => {
    let getText = repeatBtn.innerText //get innerText of this element for checking
    if(getText == 'shuffle') {
        shuffMusic()
    }
    nextMusic()
})

// click next song
prevBtn.addEventListener('click', () => {
    let getText = repeatBtn.innerText //get innerText of this element for checking
    if(getText == 'shuffle') {
        shuffMusic()
    }
    prevMusic()
})

// set timer
mainAudio.addEventListener('timeupdate', (e) => {
    let findcurrentTime = e.target.currentTime

    let durationTime = e.target.duration
    let widthProgress = (findcurrentTime / durationTime) * 100
    musicProgress.style.width = `${widthProgress}%`

    
    mainAudio.addEventListener('loadeddata', () => {
        const songDuration = mainAudio.duration
        let durationMinute = `${Math.floor(songDuration / 60)}`
        let durationSecond = `${Math.floor(songDuration % 60)}`
        if(durationSecond < 10) {
            durationSecond = `0${durationSecond}`
        }
        // set Duration Timer
        musicDurationTimer.innerText = `${durationMinute}:${durationSecond}`
    })


    let currentTimeMinute = `${Math.floor(findcurrentTime / 60)}`
    let currentTimeSec = `${Math.floor(findcurrentTime % 60)}`
    if(currentTimeSec < 10) {
        currentTimeSec = `0${currentTimeSec}`
    }
    // set current TImeer
    musicCurrentTimer.innerText = `${currentTimeMinute}:${currentTimeSec}`
})


// click on progress bar to play song on the specific time selected
musicProgressClick.addEventListener('click', (e) => {
    const progressWidthval = musicProgressClick.clientWidth // remember this
    let clickOffSetX = e.offsetX
    let durationSong = mainAudio.duration
    mainAudio.currentTime = (clickOffSetX / progressWidthval) * durationSong
    playMusic()
})

// repeat song
repeatBtn.addEventListener('click', () => {
    let getText = repeatBtn.innerText //get innerText of this element for checking
    switch(getText) {
       case 'repeat':
            repeatBtn.innerText = 'repeat_one'
            repeatBtn.setAttribute('title', 'Song looped')
            break;
       case 'repeat_one':
            repeatBtn.innerText = 'shuffle'
            repeatBtn.setAttribute('title', 'playback shuffle')
            break;
       case 'shuffle':
            repeatBtn.innerText = 'repeat'
            repeatBtn.setAttribute('title', 'Playlist looped')
            break;
    }

})


// when song ended => the next song will depend on what the user has set
mainAudio.addEventListener('ended', () => {
    let getText = repeatBtn.innerText //get innerText of this element for checking
    switch(getText) {
       case 'repeat':
            nextMusic()
            break;
       case 'repeat_one':
            mainAudio.play()
            break;
       case 'shuffle':
            shuffMusic()
            break;
    }
})

// show list bar
showMore.addEventListener('click', () => {
    musicList.classList.toggle('show')
})
// close list bar
closeShowMore.addEventListener('click', () => {
    showMore.click()
} )

// render songlist from allMusic 
const ulTag = wrapper.querySelector('ul')

for(let i = 0; i < allMusics.length; i++) {
    let html = `
            <li data-index = "${i+1}">
                <div class="row">
                    <span>${allMusics[i].name}</span>
                    <p>${allMusics[i].artist}</p>
                </div>
                <audio class="no-${i}" src="${allMusics[i].src}"></audio>
                <div id="no-${i}" class="audio-duration">3:50</div>
            </li>
        
        `
        ulTag.insertAdjacentHTML("beforeend", html)
        let getDuration = ulTag.querySelector(`.no-${i}`)
        let addDuration = ulTag.querySelector(`#no-${i}`)
        getDuration.addEventListener('loadeddata',
        () => {
            let duration = getDuration.duration
            let minute = Math.floor(duration/60)
            let second = Math.floor(duration%60)
            if (second < 10) {
                second = `0${second}`
            }
            addDuration.innerText = `${minute}:${second}`
        })
}

let liSong = ulTag.querySelectorAll('li')
function playingSongBar() {
    for (let j = 0; j < liSong.length; j++) {
        //if the song is already playing so add it a class playing
        if (liSong[j].getAttribute('data-index') == musicIndex) {
            liSong[j].classList.add('playing')
            let duration = liSong[j].querySelector('.audio-class')

        } else {
            liSong[j].classList.remove('playing')
        }
        liSong[j].setAttribute('onclick', 'clicked(this)')
    }
}

function clicked(e) {
    let getliIndex = e.getAttribute('data-index')
    
    musicIndex = getliIndex
    loadMusics(musicIndex)
    playingSongBar()
    playMusic()
}   

