Tämä harjoitus on sama kuin aiempi, mutta esittelee **moduulien** konseptin. Tehtävän ratkaisemiseen sinun täytyy luoda kaksi tiedostoa. 

Tee ohjelma joka tulostaa listan tiedostoista annetussa kansiossa, suodatettuna tiedostopäätteellä. Ensimmäinen argumentti on kansion nimi ja toinen tiedostopääte. Tulosta tiedostolista (yksi tiedosto per rivi) konsoliin. Sinun **täytyy** käyttää asynkronista I/O:ta. 

Sinun täytyy tehdä *moduuli*tiedosto tekemään suurimman osan työstä. Moduulin täytyy *julkaista* yksi funktio joka ottaa **kolme** argumenttia: kansion nimen, tiedostopäätemerkkijonon ja takaisinkutsufunktion, tässä järjestyksessä. Tiedostopääteargumentin täytyy olla sama kuin mikä annetaan ohjelmallesi. Älä muokkaa sitä RegExp:ksi tai lisää alkuun "." tai tee mitään muutakaan kuin anna se argumenttina moduulillesi, jossa voit tehdä kaiken tarvittavan suodatuksen. 

Takaisinkutsufunktiota pitää kutsua käyttäen idiomaattista node(err, data) -muotoa. Tämä muoto vaatii että jos ei ole virhettä, ensimmäinen takaisinkutsufunktion argumentti on null, ja toinen on datasi. Tässä harjoituksessa data tulee olemaan suodatettu tiedostolistasi listana. Jos vastaanotat virheen, esimerkiksi kutsusta `fs.readdir()`, takaisinkutsua tulee kutsua virheellä, ja vain virheellä, ensimmäisenä argumenttina. 

**Et voi* tulostaa konsoliin suoraan moduulitiedostostasi, vain pääohjelmastasi.  

Tapauksessa jossa virhe ilmaantuu pääohjelmaasi, yksinkertaisesti tarkista se ja tulosta informatiivinen viesti konsoliin. 

Sinun täytyy seurata näitä neljää ohjetta.

1. Julkaise yksi funktio joka ottaa argumenttina aiemmin kerrotut muuttujat.
2. Kutsu takaisinkutsua vain virheellä tai datalla kuten kerrottu aiemmin. 
3. Älä muuta mitään muuta, kuten globaaleja muuttujia tai stdoutia. 
4. Käsittele kaikki virheet ja anna ne takaisinkutsufunktiolle.

Näiden ohjeiden hyöty on se, että kuka tahansa joka tietää nämä voi käyttää moduuliasi. Joten kuka tahansa joka tekee learnyounodea voisi käyttää moduuliasi. 

----------------------------------------------------------------------
## NEUVOJA

Luo moduuli tekemällä yksi tiedosto joka sisältää vain sinun kansionluku- ja suodatusfunktiosi. Määritelläksesi *yhden dunktion* *julkaisun*, määrittele funktiosi `module.exports` -oliolle: 

```js
module.exports = function (args) { /* ... */ }
```

Tai voit käyttää nimettyä funktiota ja antaa sen nimen `module.exports` -oliolle.

Käyttääksesi uutta moduuliasi pääohjelmassasi, käytä `require()` -kutsua samalla tavalla kuin käytit `require('fs')` ladataksesi `fs` -moduulin. Ainoa ero on että paikalliset moduulit täytyy alkaa merkkijonolla './'. Joten, jos moduulitiedostosi nimi on mymodule.js tee näin: 

```js
var mymodule = require('./mymodule.js')
```

'.js' on vapaavalintainen ja usein se jätetään pois. 

Nyt sinulla on `module.exports` -olio asetettuna `mymodule` -muuttujaan. Kun olet julkaissut yhden funktion moduulissasi, `mymodule` on funktio jota voit kutsua!

Muista myös idiomaattinen tapa tarkistaa virheet ja tehdä aikainen paluu takaisinkutsulla: 

```js
function bar (callback) {
  foo(function (err, data) {
    if (err)
      return callback(err) // early return

    // ... no error, continue doing cool things with `data`

    // all went well, call callback with `null` for the error argument

    callback(null, data)
  })
}
```

----------------------------------------------------------------------