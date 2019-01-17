var http = require('http'); //Funksjon med navn på model
var dt = require('./myfirstmodule'); //Henter info fra en annen fil

//Lager et server objekt
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'}); //Displayer tekst som html
    res.write(dt.myDateTime()); //Skriver et til klienten
    res.end(); //Avslutter svaret
}).listen(8000); //Server objeket ligger på port 8000