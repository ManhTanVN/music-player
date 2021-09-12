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
musicCurrentTimer = wrapper.querySelector('.progress-area .timer .current'),
musicDurationTimer = wrapper.querySelector('.progress-area .timer .duration'),
controls = wrapper.querySelector('.controls'),
repeat = wrapper.querySelector('#repeat'),
prevBtn = wrapper.querySelector('#prev'),
nextBtn = wrapper.querySelector('#next'),
moreMusic = wrapper.querySelector('#more-music'),
playPauseBtn = wrapper.querySelector('.play-pause');


let musicIndex = 1

window.addEventListener('load', () => {
    loadMusics(musicIndex)
    // mainAudio.play()
    

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


// click Play
playPauseBtn.addEventListener('click', () => {
    const isMusicPaused = wrapper.classList.contains('paused')
    isMusicPaused ? pauseMusic() : playMusic()
})


// click next song
nextBtn.addEventListener('click', () => {
    nextMusic()
})

// click next song
prevBtn.addEventListener('click', () => {
    prevMusic()
})

// set timer
mainAudio.addEventListener('timeupdate', (e) => {
    const currentTime = e.currentTime()
    const durationTime = e.duration()
    
    // const width = `(${currentTime} / ${durationTime*100})%`
    // console.log(width)
    console.log(currentTime)
    
})