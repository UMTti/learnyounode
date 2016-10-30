Kirjoita ohjelma joka tekee HTTP GET -pyynnön URLiin joka annetaan ensimmäisenä komentoriviargumenttina. Kerää **kaikki** data palvelimelta (ei vain ensimmäistä "data" -tapahtumaa) ja sitten kirjoita kaksi riviä konsoliin (stdout).

Ensimmäinen tulostettava rivi tulee olla vain integer joka kertoo palvelimelta saatujen merkkien määrän. Toisen rivin tulee sisältää koko merkkijono palvelimelta saaduista merkeistä. 
----------------------------------------------------------------------
## NEUVOJA

Tälle ongelmalle on kaksi lähestymistapaa: 

**1)** Kerää data useista "data" -tapahtumista ja kerää tulokset yhteen tulostaaksesi lopputuloksen. Käytä "end" -tapahtumaa tunnistaaksesi kun stream on loppunut ja voit tulostaa lopputuloksen. 

**2)** Use a third-party package to abstract the difficulties involved in collecting an entire stream of data. Two different packages provide a useful API for solving this problem (there are likely more!): `bl` (Buffer List) and `concat-stream`; take your pick!

**2)** Käytä kolmannen osapuolen pakettia abstrahoidaksesi vaikeudet liittyen koko datastreamin keräämiseen. Kaksi eri pakettia tarjoavat hyödyllisen APIn tämän ongelman ratkaisemiseen (on varmaan muitakin!): `bl` (Buffer List) ja `concat-stream`; valitse omasi!

  <https://npmjs.com/bl>
  <https://npmjs.com/concat-stream>

Asentaaksesi Node-paketin, käytä Node Package Manageria, nimeltään `npm`. Kirjoita: 

```sh
$ npm install bl
```

Ylläoleva lataa ja asentaa paketin viimeisimmän version alihakemistoon nimeltään `node_modules`. Mikä tahansa paketti tässä alihakemistossa joka sijaitsee samassa kansiossa pääohjelmasi kanssa, voidaan ladata `require` -syntaksilla ilman etuliitettä './': 

```js
var bl = require('bl')
```

Node etsii pakettia ensin core-moduuleista ja sen jälkeen `node_modules` -kansiosta. 

Jos sinulla ei ole Internet-yhteyttä, yksinkertaisesti tee `node_modules` -kansio ja kopioi koko kansio paketille jota haluat käyttää {appname} -kansion asennuskansion sisältä: 

  {rootdir:/node_modules/bl}
  {rootdir:/node_modules/concat-stream}

Sekä `bl` että `concat-stream` voivat sisältää streamin *putkitettuna* niihin ja ne keräävät datan sinulle. Kun stream loppuu, callback laukaistaan datalla: 

```js
response.pipe(bl(function (err, data) { /* ... */ }))
// or
response.pipe(concatStream(function (data) { /* ... */ }))
```

Muista että saatat tarvita `data.toString()` -metodia konvertoidaksesi datan Buffer-oliosta.

Dokumentaatio molemmille näistä moduuleista on asennettu yhdessä {appname} :n kanssa järjestelmääsi ja dokumentaatiot voi lukea menemällä selaimella osoitteeseen: 

  {rootdir:/docs/bl.html}
  {rootdir:/docs/concat-stream.html}

----------------------------------------------------------------------