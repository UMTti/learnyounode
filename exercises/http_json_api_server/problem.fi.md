Kirjoita **HTTP-palvelin** joka palauttaa JSON-dataa kun se vastaanottaa GET-pyynnön polkuun '/api/parsetime'. Oleta että pyyntö sisältää pyyntömerkkijonon avaimella 'iso' ja ISO-muotoisen ajan sen arvona. 

Esimerkiksi:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

JSON-vastauksen tulee sisältää ainoastaan 'hour', 'minute' ja 'second' -ominaisuudet. Esimerkiksi: 

```json
{
  "hour": 14,
  "minute": 23,
  "second": 15
}
```

Lisää toinen päätepiste polulle '/api/unixtime', joka hyväksyy saman pyyntömerkkijonon mutta palauttaa UNIX epoch ajan millisekunteina (millisekunnit sitten 1. tammikuuta 1970 00:00:00 UTC) ominaisuudessa 'unixtime'. Esimerkiksi:

```json
{ "unixtime": 1376136615474 }
```

Palvelimesi tulee kuunnella porttia joka annetaan ensimmäisenä komentoriviargumenttina ohjelmallesi.

----------------------------------------------------------------------
## NEUVOJA

`request` -oliolla HTTP-palvelimelta on `url` -ominaisuus jota tulet tarvitsemaan käyttääksesi *"reittiä"* pyynnöillesi kahteen päätepisteeseen.

Voit jäsentää URLin ja pyyntömerkkijonon Noden ytimen 'url' -moduulin avulla. `url.parse(request.url, true)` jäsentää request.urlin sisällön ja palauttaa sinulle olion jossa on hyödyllisiä ominaisuuksia. 

Esimerkiksi, komentorivillä kirjoita:

```sh
$ node -pe "require('url').parse('/test?q=1', true)"
```

Dokumentaatio `url` -moduuliin löytyy menemällä selaimella osoitteeseen:
  {rootdir:/node_apidoc/url.html}
  
Vastauksesi tulee olla JSON -merkkijonoformaatissa. Katso `JSON.stringify()` saadaksesi lisätietoa.


Sinun täytyy myös olla hyvä internetkansalainen ja sisällyttää vastaukseen Content-Type oikein:

```js
res.writeHead(200, { 'Content-Type': 'application/json' })
```

JavaScriptin `Date` -olio voi tulostaa päivämäärän ISO-formaatissa, esimerkiksi `new Date().toISOString()`. Se voi myös jäsentää tätä muotoa olevan merkkijonon jos annat sen parametrina `Date` -konstruktorille. `Date#getTime()` -voi myös olla hyödyllinen.

----------------------------------------------------------------------