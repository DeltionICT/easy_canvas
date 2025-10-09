---
title: Opdrachten
date: 2022-04-03
---

::: section
### Opdrachten

In dit onderdeel vind je verschillende opdrachten om te oefenen met Python.  
Dit zijn relatief 'makkelijke' opdrachten. Dat wil zeggen: Als je iets voor het eerst doet is het natuurlijk moeilijk, maar met AI kun je de antwoorden makkelijk vinden. Toch is het de bedoeling dat je de opdrachten zo veel mogelijk zelf maakt. Gebruik AI alleen om iets uit te laten leggen.
Het gaat er dus niet om dat je alle opdrachten 'af' moet hebben, het gaat er om dat je leert om zelf 'eenvoudige' python-programma's te maken en te begrijpen.


:::

::: section
### Variabelen

#### Opdracht 1
> Stop onderstaande waarden als `list` in een variabele `my_list`  
> Zorg ervoor dat de `my_list` wordt geprint op het scherm.
> 
> 13  
> "wat een weertje"  
> 12.5  
> 8

**Output**
```python
print(lst)
[13, 'wat een weertje', 12.5, 8]
```

___


#### Opdracht 2
> Ken onderstaande waarden toe aan een variabele `my_tuple` van het type tuple.
> Zorg ervoor dat de tuple wordt geprint.
> 
> 11   
> "Oh een tuple"   
> 13.5   
> 8009 

**Output**
```python
print(my_tuple)
(11, "Oh een tuple", 13.5, 8009)
```
---

#### Opdracht 3

> Ken onderstaande waarden toe aan een variabele `my_dict` van het type dictionary  
> Zorg ervoor dat de dictionary wordt geprint.
> 
> naam = willem  
> achternaam = van de Broek  
> leeftijd = 23  
> favoriete kleur = blauw 

**Output** 
```python
print(my_dict)
{"naam": "willem", "achternaam": "van de Broek", "leeftijd": 23, "favoriete kleur": "blauw"}
```

---

:::

::: section
### Tekstfuncties
#### Opdracht 4

> Op [w3schools](https://www.w3schools.com/python/python_ref_string.asp) vind je verschillende functies die je op tekst toe kan passen. Gebruik ze bij de volgende opdracht.  
> * Maak gebruik van het bestand: opdr_1.py
> * Pas de code aan van opdr_1.py
> * Commit en push je code naar github
> 
> * Zorg dat de volgende zin op het scherm wordt getoond met de print-functie:
> O mamma mia, wat maak je toch heerlijke pizza's
> 
> * Ken de waarde 'Albert' toe aan de variabele `voornaam`
> * Ken de waarde 'Einstein' toe aan de variabele `achternaam` 
> * Combineer beide variabelen in een printopdracht zodat onderstaande op het scherm wordt getoond:

**Output** 
```python
Albert Einstein zei ooit: 'Als je niks fout doet, dan kun je ook niks leren!'
```

---

#### Opdracht 5

> Print op het scherm hoevaak de letter "t" voorkomt in onderstaande tekst.  
> Maak gebruik van een python string-methode om dit te berekenen.  
> Je vind meer uitleg over string-methoden op [w3schools python string-methods](https://www.w3schools.com/python/python_ref_string.asp)
> 
> `my_string` = "Tinus gaat op zijn tandem naar de hottentottententoonstelling"  
> 
> Zorg ervoor dat de volgende zin op het scherm verschijnt:

**Output** 
```python
De letter "t" komt 10x voor in my_string
```

---

#### Opdracht 6
> Met onderstaande code kun je een mooie kerstboom op het scherm tonen
> Aan jou de taak om vijf bomen naast elkaar te tekenen.
> 
> TIP: Maak gebruik van de mogelijkheid van python om met teksten een berekening uit te kunnen voeren

**Output** 
```python
print("    *")
print("   ***")
print("  ******")
print(" ********")
print("***********")
print("    ***")
print("    ***")
print("    ***")
```

:::

::: section
### Berekeningen

#### Opdracht 7
> Maak 3 variabelen met de namen van je beste vrienden en hun leeftijd:
> ```python
> joe = 23
> bob = 15
> fred = 22
> ```
> Maak berekeningen en geef de volgende gegevens weer op het scherm.
> Laat python het rekenwerk doen en ga het niet zelf uitrekenen!

**Output**
```python
Dit weten we over Joe, Bob en Fred:  
De totale waarde van alle leeftijden bij elkaar opgeteld = 60  
De gemiddelde leeftijd van deze Joe, Bob en Fred is: 20
```

---

#### Opdracht 8
> Zoek op internet op hoe je de temperatuur in Celcius naar Fahrenheit omrekent en andersom.
> 
> Maak 2 variabelen c en f voor respectievelijk Celsius en Fahrenheit:
> Geef de variabelen onderstaande waarde en zorg ervoor dat je programma de bijbehorende output genereerd
> ```python
> c = -12
> f = 102
> ```

```python
-12 graden Celsius is gelijk aan 10.4 graden Fahrenheit  
102 graden Fahrenheit is gelijk aan 38.9 graden Celcius
```
> ```python
> c = 62.2
> f = 96
> ```

```python
62.2 graden Celsius is gelijk aan 144 graden Fahrenheit  
96 graden Fahrenheit is gelijk aan 35.6 graden Celcius
```

:::

::: section
### Dictionaries
#### Opdracht 9
> Schrijf een programma waarin je een list aanmaakt.
> * Maak 4 dictionaries om gegevens van personen in op te slaan. Je mag zelf namen bedenken.  
> * Voorbeeld:
> ```python
> { "id": 0, "voornaam": "", "achternaam": "" }
> ```
> * Voeg de 4 dictionaries toe aan de list. Maak hierbij gebruik van een list-methode!
> * Print de volledige naam van de 2e persoon op het scherm door de juiste gegevens op de plek van de vraagtekens te zetten.
> ```python
> print(lijst[?][?], lijst[?][?])
> ```

---

#### Opdracht 10
> Maak een dictionary met een aantal grote rivieren en de landen waar ze doorheen stromen  
> Bij deze opdracht heb je ook een lijst nodig met de landen waar de rivieren door stromen.
> Die lijst kun je zo maken:
> ```python
> rivier_info = { 
>     "rijn": ["nederland", "duitsland", "Frankrijk"], 
>     "maas": ["nederland", "belgië", "duitsland"], 
>     "nijl": ["egypte", "soedan", "oeganda"] 
> }
> 
> rivieren = list(rivier_info.keys())  
> # rivieren is nu een list met alleen de riviernamen: ['rijn', 'maas', 'nijl']
> 
> ```
> 
> * Print de naam van de 1e rivier  
> * Print het 2e land waar de 1e rivier doorheen stroomt
> * Zowel land als rivier beginnen met een hoofdletter, gebruik hiervoor een tekstfunctie. 
> * Gebruik bij alle opdrachten deze code rivieren[?]. Vul in wat er op de plek van het vraagteken moet komen.  
> * Gebruik ook deze code rivier_info[?][?]. Vul in wat er op de plek van de vraaktekens moet komen.
 
**Output** 
```python
De rivier Rijn stroomt onder andere door Duitsland
```

> * Print de naam van de 2e rivier  
> * Print het 1e land waar de 1e rivier doorheen stroomt
> * Zowel land als rivier beginnen met een hoofdletter 

**Output** 
```python
De rivier Maas stroomt onder andere door Nederland
```
 
> Print de naam van de 3e rivier  
> Print het 3e land waar de 3e rivier doorheen stroomt
> Zowel land als rivier beginnen met een hoofdletter 

**Output** 
```python
De rivier Nijl stroomt onder andere door Oeganda
```
:::


::: section
### Gebruikersinput
#### Opdracht 11

> Schrijf een programma dat twee input variabelen accepteert. 
> * De variabelen stellen twee zijden van een rechthoekig driehoek voor. 
> * Bereken de lengte van de 3e zijde door gebruik te maken van de stelling van pythagoras. (effe googlen!)

**Output**

```python
Geef de lengte van de eerste zijde  
4  
Geef de lengte van de tweede zijde  
3   
De lengte van de schuine zijde is: 5
```
```python
Geef de lengte van de eerste zijde  
12 
Geef de lengte van de tweede zijde  
9   
De lengte van de schuine zijde is: 15
```
```python
Geef de lengte van de eerste zijde  
11 
Geef de lengte van de tweede zijde  
9  
De lengte van de schuine zijde is: 14.21267040355189
```
---

#### Opdracht 12
> * Je gaat uit eten met Paul, Kees, Marie en Hilda.
> * Je moet dit aan het restaurant doorgeven dus schrijf je een handig programma dat een lijstje gasten maakt. Maak zoveel mogelijk gebruik van [list-methods](https://www.w3schools.com/python/python_ref_list.asp)
> * Voeg jezelf ook toe aan de lijst en print de lijst op het scherm:
>
```python
["Jij", "Paul", "Kees", "Marie", "Hilda"]
```
> Nou belt Marie dat ze niet meer meegaat.
> Zorg ervoor dat Marie uit de lijst wordt gehaald.
```python
["Jij", "Paul", "Kees", "Hilda"]
```
> Even later belt George, hij wil ook mee. George wil naast Kees zitten!
> Zorg ervoor dat George naast Kees wordt toegevoegd.

```python
["Jij", "Paul", "Kees", "George", "Hilda"]
```

---


#### Opdracht 13
> * Gebruik de input functie om een lijst met minimaal 5 objecten te maken. Dat mag van alles zijn: games, voertuigen, motoren, snoep, whatever.  
> * Print de lijst gesorteerd in omgekeerde volgorde, dus woorden die met een z beginnen staan vooraan.
> 
> Stel je vraagt de gebruiker om steden in te vullen:  
> Amsterdam, Zwolle, Dronten, Haarlem, Zaanstad

**Output**
```python
["Zwolle", "Zaanstad", "Haarlem", "Dronten", "Amsterdam"]
```

:::


::: section
### Loops
#### Opdracht 14

> Maak een loop waarin je een lijst vult met de getallen van 1 t/m 10.
> Print de lijst op het scherm


**Output**
```python
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

#### Opdracht 15
> * Maak gebruik van een for-loop en een range-functie om de volgende list op het scherm te tonen:

**Output**
```python
[10, 20, 30, 40, 50]
```


---

#### Opdracht 16

> * Maak een for-loop met een range-functie die loopt van 3 tot 81 en iedere keer 3 optelt bij het vorige getal.
> * Doe alle getallen uit de range in het kwadraat en deel ze vervolgens door 3

**Output**
```python
[3.0, 12.0, 27.0, 48.0, 75.0, 108.0, 147.0, 192.0, 243.0, 300.0, 363.0, 432.0, 507.0, 588.0, 675.0, 768.0, 867.0, 972.0, 1083.0, 1200.0, 1323.0, 1452.0, 1587.0, 1728.0, 1875.0, 2028.0]
```
:::


::: section
### Listfuncties

#### Opdracht 17

> Gebruik precies twee regels code om de volgende opdracht te maken.  
> * Maak een comprehensive list waarbij de y waarde voor punten op een lijn worden berekend.
> * De formule voor de lijn is: y = 4x + 7
> * Bereken met een range van 1 tot 10 wat de uitkomst is voor y

**Output**
```python
[11, 15, 19, 23, 27, 31, 35, 39, 43]

```

---

#### Opdracht 18

> Maak een comprehensive list.
> * Gebruik een range met getallen van 1 tot 20
> * Vermenigvuldig alle getallen met 3
> * print alleen de eerste 6  getallen van de list.
> * Dit kan weer met maximaal 2 regels code!!


**Output**
```python
[3, 6, 9, 12, 15, 18]
```

---

#### Opdracht 19

> In deze opdracht ga je list-methoden gebruiken om een lijst pizza's aan te passen en te printen.
> * Gebruik deze lijst met pizza's:
> 
> ```python
> ['margharita', 'calzone', 'verdi', 'olivio', 'quattro stagioni']
> ```
> * Sorteer de lijst op alfabet
> ```python
> ['calzone', 'margharita', 'olivio', 'quattro stagioni', 'verdi']
> ```
> * Voeg naar eigen smaak nog een pizza toe
> ```python
> ['calzone', 'margharita', 'olivio', 'quattro stagioni', 'verdi', 'yo-favorito']
> ```
> * Verwijder de pizza die je het minst lekker vindt
> ```python
> ['calzone', 'margharita', 'quattro stagioni', 'verdi', 'yo-favorito']
> ```
> * Print de eerste 3 pizza's uit de lijst
> ```python
> ['calzone', 'margharita', 'quattro stagioni']  
> ```
> * Print alleen de middelste pizza uit de lijst  
> ```python
> ['quattro stagioni']
> ```
> * Print de laatste 3 pizza's uit de lijst
> ```python
> ['quattro stagioni', 'verdi', 'yo-favorito']
> ```

:::


::: section
### Condities
#### Opdracht 20

> * Maak een loop waarin je een lijst vult met de getallen van 1 t/m 10.
> * Print alleen de getallen die groter zijn dan 4 op het scherm.
> * Gebruik hiervoor de loop en het if-statement.

**Output**
```python
[5, 6, 7, 8, 9, 10]
```

---

#### Opdracht 21
> * Maak gebruik van een for-loop en een if-statement om de getallen die deelbaar zijn door 3 op het scherm te tonen
> * Gebruik deze getallen [43948, 878768, 38768, 87555, 765765]

---

#### Opdracht 22

> Bekijk de volgende dictionaries:
> ```python
> normale_toegangsprijs = 12.50
> kortings_percentages = { "baby": 100, "kinderen": 50, "volwassenen": 0, "ouderen": 30 }
> leeftijd = { "baby": (0,2), "kinderen": (3,18), "volwassenen": (19,64), "ouderen": (65,150) }
> ```
> Voor een attractiepark moet de toegangsprijs voor bezoekers worden berekend.  
> * Schrijf een programma dat gebruik maakt van de gegeven variabelen en een input functie waarmee de leeftijd van een bezoeker wordt gevraagd.  

**Output**

```python
Geef uw leeftijd in aantal jaar  
3  
U behoort tot de groep kinderen  
U krijgt 50% korting  
U betaalt daarom 6.25  

Geef uw leeftijd in aantal jaar   
23  
U behoort tot de groep volwassenen  
U krijgt 0% korting  
U betaalt daarom 12.5  

Geef uw leeftijd in aantal jaar   
89  
U behoort tot de groep ouderen  
U krijgt 30% korting  
U betaalt daarom 8.75  

```

---

#### Opdracht 23

> Je wilt extra topping voor op je pizza bestellen.
> * Maak een input functie waarmee je kunt kiezen uit een lijst met toppings.
> * Bouw de lijst op met behulp van de variabele toppings
>
> ```python
> toppings = [("olijven", 4.50), ("kaas", 3.50), ("salami", 3.00), ("pepperoni", 2.00) , ("ansjovis", 2.50)]
> ```
> Als je een keuze hebt gemaakt krijg je te zien wat je hebt gekozen en de prijs die je moet betalen.

**Output**
```python
Maak een keuze uit onze toppings: ['olijven', 'kaas', 'salami', 'pepperoni', 'ansjovis']   
salami  
U heeft salami besteld. Dat kost 3.0

Maak een keuze uit onze toppings: ['olijven', 'kaas', 'salami', 'pepperoni', 'ansjovis']  
sdfjsdf  
Uw keuze zit niet in ons assortiment
```
:::

::: section
### Tekstbestanden

#### Opdracht 24
> In deze opdracht ga je een korte enquete maken.  
> * Je hebt 3 vragen waar je graag antwoord op wil hebben.  
> * Dit zijn ze: 
>   * Wat vind je van de huidige regering?
>   * Wat vind je van de Python-lessen tot nu toe?
>   * Wat vind jij de mooiste stad van Nederland?

Als de 3 vragen zijn beantwoord worden de resultaten opgeslagen in een tekstbestand.

---

#### Opdracht 25

> In deze opdracht maak je het spel "Raad een nummertje"
> * Je programma verzint een random getal tussen de 1 en 100.
> * De gebruiker voert een getal in
> * Het programma antwoord met 'hoger' of 'lager' totdat de gebruiker het juiste getal heeft geraden!
> * De uitvoer van het programma geeft weer wat het te raden getal is
> * Het programma geeft het aantal keer dat de gebruiker moest raden weer.

**Output:**
```python
Raad mijn geheime getal   
50  
hoger  
Raad mijn geheime getal   
75  
Je hebt het getal geraden het is 75!  
Je hebt het in 2 keer gedaan
```

---

#### Opdracht 26

> In deze opdracht ga je een input-functie gebruiken om de feestgangers te bevragen.
> * Zet de vragen in een lijst (type list)
> * Geef de vragen genummerd weer op het scherm
> * De voornaam, achternaam, eten en drank van iedere feestganger sla je op in een dictionary
> * De antwoorden worden opgeslagen in een textbestand.
> 
> **Uitvoer op het scherm:**
> 1. Wat is je voornaam?  
> Bertus  
> 2. Wat is je achternaam?  
> Stijgerpijp  
> 3. Wat neem je mee aan drank?   
> Bier  
> 4. Wat neem je mee om te eten?  
> Patat 
>    
> Bedankt voor het invullen!  
> See you at the party.  

**Inhoud van tekstbestand**
```python
  
voornaam: Bertus  
achternaam: Stijgerpijp  
drank: Bier  
eten: Patat  

voornaam: Pieter  
achternaam: Boersma  
drank: Cognac  
eten: Lasagna  

```

:::


::: section
### Functies
#### Opdracht 27

> Schrijf een functie met de titel write_to_file.
> De functie accepteert 2 argumenten:
> 1. de naam van het bestand
> 2. de tekst die moet worden weggeschreven.
> 
> Als het bestand al bestaat moet de tekst worden toegevoegd aan de inhoud.
> 

**Output:**
```python
my_tekst = "Schrijf dit maar even in een bestandje"
my_file = "test.txt"
write_to_file(my_file, my_tekst)
```

---

#### Opdracht 28

> Schrijf 2 functies
> * De eerste functie berekent het opgegeven aantal kilometers om naar miles.
> * De tweede funtie doet het juist andersom, die berekent miles om naar kilometers.
> * 1 mile = 1.609344 km.   
> 
> De functies moet je op de volgende manier kunnen aanroepen:
> ```python
> kilometers = 1223
> miles 867
> miles = kilometers_naar_miles(kilometers)
> km = miles_naar_kilometers(miles)
> ```
**Output**
```python
1223 kilometers = 759.9369681062594 miles  
867 miles = 1395.301248 kilometers
```

---

#### Opdracht 29

> Schrijf 2 functies die het volume uitrekenen.  
> * De eerste functie berekent de inhoud van een kubus.  
> * Alle zijden van de kubus zijn even lang.  
> * [Zo bereken je het volume](https://nl.wikibooks.org/wiki/Wiskunde/Volume)  
> * De functie moet je op de volgende manier kunnen aanroepen:  
>
> ```python
> volume = kubus_vol(5)
> ```
> Output:
> De inhoud van deze kubus is: 125
>
> De tweede functie berekent het volume van een bol.  
> * [Zo bereken je het volume](https://nl.wikibooks.org/wiki/Wiskunde/Volume)  
> * Je hebt in ieder geval het getal pi nodig. 
> * Python heeft een eigen nauwkeurige versie van het getal pi namelijk math.pi
> 
> ```python
> volume = bol_vol(4)
> ```
> Output:
> De inhoud van deze bol is: 268.082573106329 

---

#### Opdracht 30

> Schrijf een functie die een lijst met dictionaries accepteert.
> Iedere dictionary bestaat uit 3 elementen:
> * voornaam
> * tussenvoegsel
> * achternaam

**Code**
```python
def volledige_naam(lijst_met_namen):
    # hier komt jouw code
    # LET OP: Er mogen geen dubbele spaties zitten tussen de voor- en achternaam!!
    ...

namen = [
    {"voornaam": "Willem", "tussenvoegsel": "van", "achternaam": "Dijk"},
    {"voornaam": "Klaas", "tussenvoegsel": "", "achternaam": "Wopstra"},
    {"voornaam": "Miep", "tussenvoegsel": "van der", "achternaam": "Plas"},
    {"voornaam": "Carla", "tussenvoegsel": "", "achternaam": "Hoogvliet"},
]

volledige_naam(namen)
```
**Output**
```python
Willem van Dijk  
Klaas Wopstra  
Miep van der Plas  
Carla Hoogvliet  
```

:::


::: section
### Modules

#### Opdracht 31
> * Gebruik de code uit het hoofdstuk over `modules`.
> * Maak hiermee zelf een eigen module en importeer je module in je programma-script.
> * Zorg ervoor dat je bestandsstructuur er zo uit komt te zien..
> ```python
> programma
>   |-- opdr_1.py
>   |-- my_modules # Je mag voor deze map ook zelf een naam verzinnen
>         |-- csv.py
> ```
> Zorg dat je het programma werkend krijgt zoals beschreven in het hoofdstuk `modules`

---

#### Opdracht 32

> Gebruik de code uit het hoofdstuk over `modules`
> Je gaat de bestaande functionaliteit van het programma uitbreiden
> * Je kunt de lijst filteren op basis van beginletters
> * Maak de functie `filter(persoon, filterveld, filter)`


```python
filter(persoon, "voornaam", "ja")

Jan Van Der Vliet  
Jan Jaap Siewers  
``` 
```python
filter(person, "voornaam", "Pie")

Piet De Vries 
```

```python
filter(person, "plaats", "d")

Griet Van Der Pol  
Jan Jaap Siewers 
```



:::
