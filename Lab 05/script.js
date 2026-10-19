let GameMusicLibrary = [
{
    genre: "JRPG",
    games: [
        {
        name: "Persona 4",
        songs: ["Specialist", "Heartbeat"]
        },
        {
        name: "Nier: Automata",
        songs: ["City Ruins", "Weight of The World"]
        },
        {
            name: "Yakuza",
            songs: ["Bakamitai", "24 Hour Cinderella"]
            },
            {
                name: "Fire Emblem: Three Houses",
                songs: ["A Gentle Breeze", "Hungry March"]
                }
    ]
},
{
    genre: "Horror",
    games: [
        {
        name: "Silent Hill",
        songs: ["Promise: Reprise", "City"]
        },
        {
        name: "Untill Down",
        songs: ["OST 1", "OST 2"]
        }
    ]
},
];

function getRandomSong() {
    let i = Math.floor(Math.random() * GameMusicLibrary.length);
    let r = a[i]
    console.log(r)
}
getRandomSong()






