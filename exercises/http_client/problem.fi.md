Kirjoita ohjelma joka tekee HTTP GET -pyynnön URLiin joka annetaan ensimmäisenä komentoriviargumenttina. Kirjoita **jokaisen** "data" -eventin merkkijonosisältö vastauksesta uudelle riville konsoliin (stdout).

----------------------------------------------------------------------
## NEUVOJA

Tässä tehtävässä sinun pitää käyttää `http` core-moduulia.

Dokumentaatio `http` -moduuliin löytyy menemällä selaimella osoitteeseen:
  {rootdir:/node_apidoc/http.html}

`http.get()` -metodi on yksinkertaistus GET requesteille, käytä sitä. Ensimmäinen argumentti `http.get()` -metodille voi olla URL johon haluat tehdä GET-pyynnön; anna takaisinkutsu toisena argumenttina.

Toisin kuin muut takaisinkutsufunktiot, tämä on muotoa:

```js
function callback (response) { /* ... */ }
```

Ylläolevassa `response` -olio on Noden **Stream** -olio. Voit kohdella Noden Streameja kuin olioina jotka lähettävät tapahtumia. Kolme mielenkiintoisinta tapahtumaa ovat: "data", "error" ja "end". Voit kuunnella tapahtumia näin:

```js
response.on("data", function (data) { /* ... */ })
```

"data" -tapahtuma lähetetään kun palanen dataa on valmiina prosessoitavaksi. Palasen koko riippuu datan lähteestä. 

`response` -oliolla / Streamilla jonka saat `http.get()` -metodilta, on myös `setEncoding()` -metodi. Jos kutsut tätä metodia parametrilla "utf8", "data" -tapahtumat lähettävät merkkijonoja eivätkä standardeja Noden `Buffer` -olioita jotka sinun täytyisi muuten eksplisiittisesti konvertoida merkkijonoiksi. 

----------------------------------------------------------------------
