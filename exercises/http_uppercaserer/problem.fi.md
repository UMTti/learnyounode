Kirjoita **HTTP-palvelin** joka vastaanottaa POST-pyyntöjä ja konvertoi tulevat POST body -merkit isoiksi kirjaimiksi ja palauttaa ne asiakkaalle. 

Palvelimesi pitää kuunnella porttia joka annetaan ensimmäisenä komentoriviargumenttina.

----------------------------------------------------------------------
## NEUVOJA

On paljon helpompaa, kun et ole rajoittunut käyttämään vain `request` -ja `response`-olioiden streaming-ominaisuuksia. 

Npm:ssä on erilaisia paketteja joita voit käyttää *"muuntaaksesi"* stream-datan kun sitä tulee. Tälle tehtävälle `through2-map`-paketti tarjoaa yksinkertaisimman APIn. 

`through2-map`:n avulla voit *muuntaa streamin* käyttämällä vain yhtä funktiota joka ottaa palan dataa ja palauttaa palan dataa. Se on suunniteltu toimimaan kuten `Array#map()` mutta streameille: 

```js
var map = require('through2-map')
inStream.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('')
})).pipe(outStream)
```

Ylläolevassa esimerkissä `inStream`:sta tuleva data konvertoidaan merkkijonoksi (jos se ei ole sitä vielä), merkit käännetään ja tulos annetaan `outStream`:lle. Joten nyt olemme tehneet merkkienkääntäjän! Muista että et voi kontrolloida sisääntulevan datan kokoa tai sisältöä. 

Asentaaksesi `through2-map`-paketin kirjoita:

```sh
$ npm install through2-map
```

Jos sinulla ei ole Internet-yhteyttä, yksinkertaisesti tee `node_modules` -kansio ja kopioi koko kansio moduulille jota haluat käyttää {appname} -asennuskansiosta:

  {rootdir:/node_modules/through2-map}

Dokumentaatio through2-map:lle on asennettu {appname}:n mukana järjestelmääsi ja voit lukea sitä menemällä selaimella osoitteeseen: 

  {rootdir:/docs/through2-map.html}

----------------------------------------------------------------------