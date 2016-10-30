Tee **TCP aikapalvelin**!

Palvelimesi täytyy kuunnella TCP-yhteyksiä portista joka annetaan ensimmäisenä komentoriviargumenttina ohjelmallesi. Jokaiselle yhteydelle sinun täytyy kirjoittaa tämänhetkinen päivämäärä & tarkka aika seuraavassa formaatissa:

```
"YYYY-MM-DD hh:mm"
```

niin että sitä seuraa **rivinvaihtomerkki**. Kuukausi, päivä, tunti ja minuutti pitää täyttää tarvittaessa *nollilla* jotta niissä on 2 numeroa. Esimerkiksi:

```
"2013-07-06 17:42"
```

Kun olet lähettänyt merkkijonon, sulje yhteys. 

----------------------------------------------------------------------
## NEUVOJA

Tätä tehtävää varten luodaan raaka TCP-palvelin. HTTP:tä ei sisälly tähän joten meidän pitää käyttää `net` -moduulia, joka sisältää perusverkkotoiminnot, Noden ytimestä. 

`net` -moduulilla on metodi nimeltään `net.createServer()`, joka ottaa funktion parametrina. Funktio joka sinun täytyy antaa `net.createServer()` -funktiolle, on yhteyskuuntelija jota kutsutaan enemmän kuin yhden kerran. Jokainen yhteys jonka palvelimesi vastaanottaa, laukaisee kuuntelijan kutsun. Kuuntelijafunktiolla on seuraava muoto: 

```js
function listener(socket) { /* ... */ }
```

`net.createServer()` palauttaa instanssin `server` :stäsi. Sinun täytyy kutsua `server.listen(portNumber)` aloittaaksesi tietyn portin kuuntelun. 

Tyypillinen Node TCP-palvelin näyttää tältä: 

```js
var net = require('net')
var server = net.createServer(function (socket) {
  // socket handling logic
})
server.listen(8000)
```

Muista käyttää porttinumerona ensimmäistä komentoriviargumenttia. 

`socket` -olio sisältää paljon metadataa yhteyteen liittyen, mutta se on myös Noden duplex Stream, eli sitä voidaan lukea ja siihen voidaan kirjoittaa. Tässä tehtävässä meidän täytyy ainoastaan kirjoittaa dataa ja sitten sulkea socket. 

Käytä `socket.write(data)` -funktiota kirjoittaaksesi dataa socketiin ja `socket.end()` -funktiota sulkeaksesi socketin. Vaihtoehtoisesti, `.end()` myös voi ottaa parametrina data-objektin joten voit yksinkertaisesti kirjoittaa: `socket.end(data)`.

Dokumentaatio `net` -moduuliin löytyy menemällä selaimella osoitteeseen:

  {rootdir:/node_apidoc/net.html}

Luodaksesi päiväyksen, sinun täytyy luoda erillinen muoto `new Date()` -oliosta. Hyödyllisiä metodeja ovat: 

```js
date.getFullYear()
date.getMonth()     // alkaa 0:sta
date.getDate()      // palauttaa kuukauden päivän
date.getHours()
date.getMinutes()
```

Tai, jos haluat seikkailla, käytä `strftime` -pakettia npm:stä. `strftime(fmt, date)` -funktio ottaa päivämääräformaatit samalla tavalla kuin unixin `date` -komento. Voit lukea lisää strftime:stä osoitteessa https://github.com/samsonjs/strftime. 

----------------------------------------------------------------------