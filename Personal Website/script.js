//----------------display chess.com elo---------------------
const chess_elo = fetch("https://api.chess.com/pub/player/mrneko-og/stats")
.then(response => response.json())
.then(data => document.getElementById("chess").innerHTML = data.chess_rapid.last.rating)







