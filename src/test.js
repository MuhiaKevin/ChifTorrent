const fs = require('fs');
const bencode = require('bencode');
const crypto = require('crypto'); 

function getFiles(){
    const torrent = bencode.decode(fs.readFileSync('Darksiders.III.Update.2-CODEX-[rarbg.to].torrent'));
    let files = torrent;
    // console.log(torrent);

    // for(let i = 0; i < files.length; i++){
    //     console.log(files[i].path.toString());
    // }

    return torrent.info;
}

let filee = getFiles();

let filebencode = bencode.encode(filee);

// console.log(filebencode);

let hash = crypto.createHash('sha1').update(filebencode).digest('hex')
console.log(hash);