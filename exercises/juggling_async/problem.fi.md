Tämä ongelma on sama kuin edellinen (HTTP COLLECT) jossa sinun piti käyttää `http.get()` -metodia. Kuitenkin tällä kertaa sinulle annetaan **kolme** URLia ensimmäisenä kolmena komentoriviargumenttina. 

Sinun täytyy kerätä koko sisältö jonka saat vastauksena joka URLista ja tulostaa se konsoliin (stdout). Sinun ei tarvitse tulostaa vastauksen pituutta, vain data merkkijonona (String); yksi rivi per URL. Sinun **täytyy** tulostaa vastaukset samassa järjestyksessä kuin URLit annetaan komentoriviargumentteina. 

----------------------------------------------------------------------
## NEUVOJA

Älä oleta että nämä kolme palvelinta toimivat mukavasti! Ne eivät tule antamaan vastauksia siinä järjestyksessä kuin toivot, joten et voi naiivisti vain tulostaa vastauksia kun saat ne, koska ne eivät tule olemaan oikeassa järjestyksessä. 

Sinun täytyy laittaa vastaukset jonoon ja pitää kirjaa kuinka monta URLia on antanut vastauksen. Vasta kun sinulla on kaikki vastaukset, voit tulostaa datan konsoliin. 

Takaisinkutsujen laskeminen on yksi perustapoja asynkronisuuden hallintaan Nodessa. Mieluummin kuin teet sen itse, saatat kokea mukavammaksi luottaa kolmansien osapuolien kirjastoihin kuten [asynciin](https://npmjs.com/async) tai [afteriin](https://npmjs.com/after). Mutta tee tämä tehtävä ilman ulkoisia apukirjastoja. 

----------------------------------------------------------------------