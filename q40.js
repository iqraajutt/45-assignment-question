"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album("Sadaf", "Album Title 1");
let album2 = make_album("Iqra", "Album Title 2");
let album3 = make_album("Alisha", "Album Title 3", 30);
console.log(album1);
console.log(album2);
console.log(album3);
