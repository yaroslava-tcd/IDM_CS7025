//Game Music Library
let GameMusicLibrary = [
{
    category: "Energetic",
    games: [
        {
        name: "Persona 4",
        songs: ["Specialist", "Signs of Love"],
        file: ["music/specialist.mp3", "music/signs-of-love.mp3"]
        },
        {
        name: "Yakuza 0",
        songs: ["Friday Night", "JUDGEMENT"],
        file: ["music/friday-night.mp3", "music/judgement.mp3"]
        }
    ]
},
{
    category: "Ambient",
    games: [
        {
        name: "Nier: Automata",
        songs: ["City Ruins", "Amusement Park"],
        file: ["music/city-ruins.mp3", "music/amusement-park.mp3"]
        },
        {
        name: "Witcher 3",
        songs: ["Kaer Morhen", "The Vagabond"],
        file: ["music/kaer-morhen.mp3", "music/the-vagabond.mp3"]
        }
    ]
},
{
    category: "Cozy",
    games: [
        {
        name: "Stardew Valley",
        songs: ["The Smell Of Mushroom", "Festival Game"],
        file: ["music/the-smell-of-mushroom.mp3", "music/festival-game.mp3"]
        },
        {
        name: "Zelda: Skyward Sword",
        songs: ["Skyloft", "Faron Woods"],
        file: ["music/skyloft.mp3", "music/faron-woods.mp3"]
        }
    ]
}
];


//Function to display music based on selected category
function showMusic() {
    const list = document.getElementById("music-list");
    const selectedCategory = document.getElementById("category").value;

    list.innerHTML = "";

    for (let i = 0; i < GameMusicLibrary.length; i++) {

        if (selectedCategory === "All categories" ||
            GameMusicLibrary[i].category === selectedCategory) {

           

            for (let j = 0; j < GameMusicLibrary[i].games.length; j++) {

                

                for (let k = 0; k < GameMusicLibrary[i].games[j].songs.length; k++) {
 list.innerHTML += `
 <div class="song-container">
 <h2>${GameMusicLibrary[i].category}</h2>
<h3>${GameMusicLibrary[i].games[j].name}</h3>          
<p class="song-display">
${GameMusicLibrary[i].games[j].songs[k]}
</p>
                    
                        <div class="song-display">
                            <button onclick="playSong('${GameMusicLibrary[i].games[j].file[k]}', '${GameMusicLibrary[i].games[j].songs[k]}')">
                               Play
                            </button>
                        </div>
                        </div>
                    `;
                }
            }
        }
    }
}


//Function to play a song
function playSong(file, name) {
    const player = document.getElementById("audio-player");

    player.src = file;
    document.getElementById("now-playing").textContent =
        "Now playing: " + name;

    player.play();
}


//Function to generate a random playlist
function randomPlaylist() {

    const playlist = document.getElementById("music-random-list");

    //Empty array for all songs
    let allSongs = [];

    //Going through the GameMusicLibrary to get all songs
    for (let i = 0; i < GameMusicLibrary.length; i++) {

        //Go through every artist
        for (let j = 0; j < GameMusicLibrary[i].games.length; j++) {

            //Go through every song
            for (let k = 0; k < GameMusicLibrary[i].games[j].songs.length; k++) {

                allSongs.push({
                    songs: GameMusicLibrary[i].games[j].songs[k],
                    name: GameMusicLibrary[i].games[j].name,
                    category: GameMusicLibrary[i].category,
                    file: GameMusicLibrary[i].games[j].file[k]
                });

            }
        }
    }

  
    //Clear the previous playlist
    playlist.innerHTML = "<h2>Your Random Playlist</h2>";

    //Generate 3 random songs 
    for (let i = 0; i < 3; i++) {

        let randomIndex = Math.floor(Math.random() * allSongs.length);

        let randomSong = allSongs[randomIndex];

        playlist.innerHTML += `
            <div class="song">
                <h3>${randomSong.songs}</h3>
                <p>Game: ${randomSong.name}</p>
                <p>Category: ${randomSong.category}</p>
                <button onclick="playSong('${randomSong.file}', '${randomSong.songs}')"> Play </button>
            </div>
        `;

        //Remove song so it cannot appear again
        allSongs.splice(randomIndex, 1);
    }
}








