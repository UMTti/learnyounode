Tee **HTTP-palvelin** joka palauttaa saman tekstitiedoston jokaiselle pyynnölle jonka se vastaanottaa sisältäen tiedostopolun.

Palvelimesi tulee kuunnella porttia joka annetaan ensimmäisenä komentoriviargumenttina ohjelmallesi. 

Sinulle annetaan tiedostopolku tiedostoon toisena komentoriviargumenttina. Sinun **täytyy** käyttää `fs.createReadStream()` -metodia vuodattaaksesi tiedostosisällön vastaukseen. 

----------------------------------------------------------------------
## NEUVOJA

Koska meidän täytyy luoda tätä tehtävää varten HTTP-palvelin mieluummin kuin geneerinen TCP-palvelin, meidän täytyy käyttää `http` -moduulia Noden ytimestä. Kuten `net` -moduuli, `http`:llä on myös metodi nimeltään `http.createServer()` mutta tämä luo palvelimen joka juttelee HTTP:llä. 

`http.createServer()` ottaa parametrina takaisinkutsun jota kutsutaan jokaiselle yhteydelle jonka palvelimesi vastaanottaa. Takaisinkutsu on muotoa: 

```js
function callback (request, response) { /* ... */ }
```

Tässä kaksi argumenttia ovat olioita jotka vastaavat HTTP-pyyntöä sekä lähetettävää vastausta. `request` -oliota käytetään saadaksemme tietoja kuten headerin ja pyyntömerkkijonon, `response` -oliota taas käytetään datan lähettämiseen asiakkaalle, siis sekä headerin että bodyn lähettämiseen. 

Sekä `request` että `response` ovat Noden streameja! Se tarkoittaa että voit käyttää streaming-abstrahointeja lähettääksesi ja vastaanottaaksesi dataa jos ne sopivat käyttötarkoitukseesi. 

`http.createServer()` palauttaa instanssin `server` -oliostasi. Sinun täytyy kutsua `server.listen(portNumber)` aloittaaksesi tietyn portin kuuntelun. 

Tyypillinen Node HTTP-palvelin näyttää tältä:

```js
var http = require('http')
var server = http.createServer(function (req, res) {
  // request handling logic...
})
server.listen(8000)
```

Dokumentaatio `http` -moduuliin löytyy menemällä selaimella osoitteeseen: 
  {rootdir:/node_apidoc/http.html}

`fs` -ydinmoduulilla on myös streamping API:ja tiedostoille. Sinun täytyy käyttää `fs.createReadStream()` -metodia luodaksesi streamin joka lukee tiedoston jonka saat komentoriviargumenttina. Metodi palauttaa stream-olion jota voit käyttää `src.pipe(dst)` -funktiolla putkittaaksesi datan `src` -streamista `dst` -streamiin. Tällä tavalla voit yhdistää tiedostojärjestelmästreamin HTTP-vastausstreamiin. 

----------------------------------------------------------------------