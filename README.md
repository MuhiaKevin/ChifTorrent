# ChifTorrent

An implementation of a torrent client in Node.js 

Decided to feed my curiosity of a how bittorrent actually works by building a simple torrent client in Node Js.
Happy Coding.

This tool has the following features:
-	Read and parse torrent file
-	Scrape udp trackers
-	Connect to peers

### Installation
You can run the following command to install the dependencies using npm
`npm install `

### Running the program
Run the following command to download a torrent file

`node main.js star-wars-the-rise-of-skywalker-2019-hdts-xvid-etrg.torrent`

### TODO
These are some of the additional features i plan to reasearch and implement:

- Use magnet links to download files
- Use Distributed Hash tables instead of trackers
- Allow for more than one downloads
- Create a graphical interface
- Support pausing and resuming downloads
- Use WebRTC to create direct connection to peers

### Resources 
I would have made very little progress without the help of this sources 

* http://www.kristenwidman.com/blog/33/how-to-write-a-bittorrent-client-part-1/

* https://allenkim67.github.io/programming/2016/05/04/how-to-make-your-own-bittorrent-client.html

* https://www.morehawes.co.uk/the-bittorrent-protocol

* https://www.seanjoflynn.com/research/bittorrent.html 

* https://www.bittorrent.org/beps/bep_0015.html

* https://www.libtorrent.org/udp_tracker_protocol.html 