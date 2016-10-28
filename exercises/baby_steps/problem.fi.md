Kirjoita ohjelma joka hyväksyy yhden tai useampia numeroita komentoriviargumentteina ja tulostaa näiden numeroiden summan konsoliin (stdout). 

----------------------------------------------------------------------
## NEUVOJA

Pääset käsiksi komentoriviargumentteihin globaalin `process` -olion kautta. `process` -oliolla on `argv` -ominaisuus, joka on lista sisältäen koko komentorivin, esimerkki `process.argv`.

Aloittaaksesi kirjoita ohjelma joka yksinkertaisesti sisältää:

```js
console.log(process.argv)
```

Aja se komennolla `node program.js` ja joillakin numeroilla komentoriviargumentteina. esim:

```sh
$ node program.js 1 2 3
```

Tässä tapauksessa tulostus olisi lista näyttäen tältä:

```js
[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
```

Sinun täytyy pohtia miten käydä läpi kaikki numeroargumentit, jotta voit tulostaa niiden summan. Ensimmäinen elementti process.argv -listassa on aina 'node', ja toinen elementti on aina polku program.js -tiedostoosi, joten sinun pitää aloittaa kolmannesta elementistä (indeksi 2), lisäten jokainen elementti summaan kunnes saavutat listan lopun.

Tiedosta myös että kaikki elementit `process.argv` -listassa ovat merkkijonoja ja sinun saattaa täytyä *konvertoida* ne numeroiksi. Voit tehdä tämän lisäämällä alkuun `+` tai antamalla argumentiksi `Number()` -funktiolle, esimerkiksi `+process.argv[2]` tai `Number(process.argv[2])`.

{appname} antaa argumentteja ohjelmallesi kun ajat `{appname} verify program.js` joten sinun ei tarvitse antaa niitä itse. Testataksesi ohjelmaasi ilman sen oikeellisuuden varmentamista, voit kutsua sitä `{appname} run program.js`. Kun käytät `run`, kutsut testiympäristöä jonka {appname} perustaa jokaiselle tehtävälle.

----------------------------------------------------------------------
