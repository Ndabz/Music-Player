// Get references to elements
const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const progressBar = document.querySelector('.progress-bar');
const audio = document.getElementById('audio');
const trackName = document.querySelector('.track-name');
const trackArtist = document.querySelector('.track-artist');
const albumCover = document.getElementById('album-cover');

// Sample track info with cover images
const tracks = [
    { 
        name: 'Lerato La hau', 
        artist: 'Rofhiwa Manyaga', 
        file: 'Lerato La Hau.mp4', 
        cover: "Lerato La hau.jpeg" 
    }, 
    { 
        name: 'Biri Marung', 
        artist: 'Mr Pilato, Ego Slimflow & Tebogo G Mashego - Biri Marung', 
        file: 'BiriMarung.mp4',
        cover: "maxresdefault.jpg"
    },
   /* { 
        name: 'Hekele Heke', 
        artist: 'Joe Shirimani', 
        file: 'Joe Shirimani - Hekele Heke.mp4',
        cover: "Hekele.jpeg"
    }*/
];

let currentTrack = 0;

// Function to load and play the track
function loadTrack() {
    audio.src = tracks[currentTrack].file;
    trackName.textContent = tracks[currentTrack].name;
    trackArtist.textContent = tracks[currentTrack].artist;
    albumCover.src = tracks[currentTrack].cover; // Update cover photo
}

// Play/pause the track
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸️'; // Change to Pause icon
        albumCover.classList.add('playing'); // Add rotation effect
    } else {
        audio.pause();
        playBtn.textContent = '▶️'; // Change to Play icon
        albumCover.classList.remove('playing'); // Remove rotation effect
    }
}

// Update progress bar
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Update audio time when progress bar changes
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Next and previous track functionality
nextBtn.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack();
    audio.play();
    playBtn.textContent = '⏸️';
});

prevBtn.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
    loadTrack();
    audio.play();
    playBtn.textContent = '⏸️';
});

// Toggle play/pause when the play button is clicked
playBtn.addEventListener('click', togglePlayPause);

// Load the initial track
loadTrack();
