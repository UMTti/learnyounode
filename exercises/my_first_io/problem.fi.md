Kirjoita ohjelma joka käyttää yhtä **synkronista** tiedostojärjestelmäoperaatiota lukeakseen tiedoston, ja tulosta tiedoston sisältämien rivinvaihtojen (\n) määrä konsoliin (stdout), sama kuin ajaisi `cat file | wc -l`.

Koko polku luettavaan tiedostoon annetaan ensimmäisenä komentoriviargumenttina (process.argv[2]). Sinun ei tarvitse tehdä omaa testitiedostoa.

----------------------------------------------------------------------
## NEUVOJA

Suorittaaksesi tiedostojärjestelmäoperaation tulet tarvitsemaan `fs` -moduulia Noden core-kirjastosta. Ladataksesi tällaisen moduulin tai minkä tahansa muun "global" -moduulin, käytä seuraavaa koodia:

```js
var fs = require('fs')
```

Nyt sinulla on koko `fs` -moduuli saatavilla muuttujassa nimeltään `fs`.

Kaikki synkroniset (tai blokkaavat) tiedostojärjestelmämetodit `fs` -moduulissa loppuvat päätteeseen 'Sync'. Lukeaksesi tiedoston, sinun täytyy käyttää `fs.readFileSync('/path/to/file')`. Tämä metodi palauttaa `Buffer` -olion joka sisältää tiedoston koko sisällön. 

Dokumentaatio `fs` -moduuliin löytyy menemällä selaimella osoitteeseen:
  {rootdir:/node_apidoc/fs.html}

`Buffer` -oliot ovat Noden tapa esittää mielivaltaisia listoja dataa, olkoonpa se asciita, binääriä tai jotakin muuta formaattia. `Buffer` -oliot voidaan konvertoida merkkijonoiksi yksinkertaisesti kutsumalla niille `toString()` -metodia. esimerkiksi `var str = buf.toString()`.

Dokumentaatio `Buffer` -olioon löytyy menemällä selaimella osoitteeseen:
  {rootdir:/node_apidoc/buffer.html}

Jos etsit helppoa tapaa laskea rivinvaihtojen määrä merkkijonossa, palauta mieleesi että JavaScriptissä `String` voidaan `.split()` listaksi osamerkkijonoja niin että '\n' voidaan käyttää erotinmerkkinä. Muista että testitiedostossa ei ole rivinvaihtoa viimeisen rivin lopussa, joten tätä metodia käyttämällä tulet päätymään listaan jossa on yksi elementti enemmän kuin rivinvaihtojen määrä. 

----------------------------------------------------------------------
