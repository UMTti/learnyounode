Kirjoita ohjelma joka käyttää yhtä **asynkronista** tiedostojärjestelmäoperaatiota lukeakseen tiedoston, ja tulosta sen sisältämien rivinvaihtojen määrä konsoliin (stdout), sama kuin ajaisi `cat file | wc -l`.

Koko polku luettavaan tiedostoon annetaan ensimmäisenä komentoriviargumenttina. 

----------------------------------------------------------------------
# NEUVOJA

Ratkaisu tähän tehtävään on *lähes* sama kuin aiempaan tehtävään, paitsi että sinun täytyy nyt tehdä se **Node.js-tapaan**: asynkronisesti. 

`fs.readFileSync()` sijaan haluat käyttää `fs.readFile()` ja sen sijaan että käyttäisit tämän metodin paluuarvoa, sinun pitää kerätä arvo takaisinkutsufunktiosta jonka annat toisena argumenttina. Oppiaksesi lisää takaisinkutuista, katso: https://github.com/maxogden/art-of-node#callbacks.

Muista että idiomaattiset Node.js takaisinkutsut normaalisti ovat muotoa:

```js
function callback (err, data) { /* ... */ }
```

jotta voit katsoa onko virhe ilmaantunut katsomalla evaluoituuko ensimmäinen argumentti todeksi. Jos ei ole virhettä, sinulla pitää olla `Buffer` -olio toisena argumenttina. Kuten `readFileSync()` kanssakin, voit antaa 'utf8' toisena argumenttina ja takaisinkutsun kolmantena argumenttina, lopputuloksena saat tällöin `String` :n `Buffer` -olion sijaan. 

Dokumentaatio `fs` -moduuliin löytyy menemällä selaimella osoitteeseen:
  {rootdir:/node_apidoc/fs.html}

----------------------------------------------------------------------
