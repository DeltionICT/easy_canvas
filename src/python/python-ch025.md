---
title: Uitleg
date: 2022-04-03
---


::: section
### {{title}}
In dit onderdeel vind je uitleg over het installeren van een ontwikkelomgeving voor Python. Daarnaast worden de basis programmeer principes van python uitgelegd. 
:::

::: section
### Installatie
Om in deze cursus met python te kunnen programmeren heb je het volgende nodig:
* Docker Desktop
* Visual Studio Code
* Python 3.xx
* Git en github
* Python 3.xx
* MariaDB of MySQL

#### Docker Desktop
Het installeren van Docker Desktop op Windows is tegenwoordig een stuk eenvoudiger dankzij **WSL 2** (Windows Subsystem for Linux). Dit zorgt ervoor dat Docker razendsnel en efficiënt werkt op je systeem.

### Stappenplan voor installatie
#### Stap 1: Virtualisatie controleren
Open je **Taakbeheer** (Ctrl + Shift + Esc), ga naar het tabblad **Prestaties** en kijk bij **CPU**. Er moet staan: `Virtualisatie: Ingeschakeld`. Als dit "Uitgeschakeld" is, moet je dit eerst in je computer-BIOS aanzetten.

#### Stap 2: WSL 2 installeren/updaten
Docker werkt het best op de WSL 2 engine.
1. Open **PowerShell** als Administrator (Rechtermuisknop op Start > Terminal/PowerShell).
2. Typ het volgende commando en druk op Enter:
`wsl --install`
3. **Herstart je computer** als de installatie klaar is.

#### Stap 3: Docker Desktop downloaden en installeren
1. Ga naar de officiële [Docker website](https://www.docker.com/products/docker-desktop/).
2. Klik op de knop **Download for Windows**.
3. Dubbelklik op de gedownloade installer (`Docker Desktop Installer.exe`).
4. Zorg dat in het installatiescherm de optie **"Use WSL 2 instead of Hyper-V"** is aangevinkt.
5. Voltooi de installatie en log (indien gevraagd) opnieuw in op Windows.

#### Stap 4: Docker Desktop starten
* Start de applicatie via het menu Start.
* Accepteer de servicevoorwaarden (**Service Agreement**).
* Wacht tot de status linksbeneden in het Docker-dashboard op groen springt ("Engine Running").

#### Stap 5: Start een python container
* Maak een nieuwe map bijv. `c:/school/info`
* Open powershell als administrator
* Navigeer naar de map `cd c:/school/info`
* Maak een bestand aan: `c:/school/info/main.py`
* Gebruik kladblok om de inhoud van main.py te veranderen naar: `print("hello world")`
* Start een container met python: `docker run -it --rm -v "${PWD}:/app" -w /app python:3 /bin/bash`
* Type nu: `python main.py` Als het goed is zie je nu `hello world` staan op het scherm!
* Installatie is gelukt!!

### Testen of het werkt


In [deze handleiding voor het installeren van Docker op Windows](https://www.youtube.com/watch?v=yv3Hv_K0fpc) zie je stap voor stap hoe je WSL 2 activeert en de software correct instelt.

#### Visual Studio Code
Om te beginnen met programmeren in Python met Visual Studio Code (VS Code), heb je een paar essentiële onderdelen nodig. VS Code is van zichzelf namelijk een tekstverwerker; om het echt slim te maken voor Python, moeten we een paar extra zaken toevoegen.

### Wat heb je nodig?

1. **De VS Code Installer:** De editor zelf.
2. **De Python Interpreter:** De "motor" die jouw code begrijpt en uitvoert.
3. **De Python Extensie:** Een plug-in voor VS Code die zorgt voor foutcontrole en hulp bij het typen.


#### Visual Studio Code


#### Stap 1: Python installeren

Voordat je de editor opent, moet Python op je computer staan.

* Ga naar [python.org](https://www.python.org/downloads/).
* Klik op de gele knop **Download Python**.
* **Belangrijk:** Tijdens de installatie op Windows moet je het vinkje aanruisen bij **"Add Python to PATH"**. Als je dit vergeet, kan VS Code Python later niet vinden.

#### Stap 2: Visual Studio Code installeren

* Ga naar [code.visualstudio.com](https://code.visualstudio.com/).
* Download de versie voor jouw besturingssysteem (Windows, macOS of Linux) en voer de installatie uit.

#### Stap 3: De Python Extensie toevoegen

Nu gaan we VS Code "leren" wat Python is.

* Open Visual Studio Code.
* Klik aan de linkerkant op het icoontje met de vierkantjes (de **Extensions Marketplace**).
* Typ bovenin de zoekbalk: `Python`.
* Zoek de extensie van **Microsoft** en klik op **Install**.

#### Stap 4: Je eerste script maken

* Ga naar `File` > `New Text File`.
* Sla het bestand direct op (Ctrl+S) als `hallo.py`. De extensie **.py** is essentieel.
* Typ de volgende code:
```python
print("Hallo wereld!")

```



#### Stap 5: De code uitvoeren

* Rechtsboven in je scherm zie je nu een **Play-knop** (een driehoekje).
* Klik hierop. Onderin opent een paneel (de Terminal) waarin je de tekst "Hallo wereld!" ziet verschijnen.

---

### Handige tip

Als je voor het eerst een `.py` bestand opent, vraagt VS Code soms rechtsonderin welke "Interpreter" je wilt gebruiken. Kies daar de versie die je in Stap 1 hebt geïnstalleerd.

Zal ik je helpen met het schrijven van je eerste kleine programma om te zien of alles echt goed werkt?

#### Git en github
* Kies de juiste installer en installeer [Git](https://git-scm.com/install/)

1.  **Wie is de bedenker van Git** en welk bekend besturingssysteem heeft hij nog meer ontworpen?
2.  Hoe wordt de relatie tussen Git en **GitHub** in de bronnen beschreven?
3.  Waarom wordt GitHub ook wel een **'Google Drive voor developers'** genoemd?
4.  Welke twee grote voordelen biedt de combinatie van Git en GitHub bij het werken aan applicaties?
5.  Wat is de definitie van een **repository** volgens de tekst?
6.  Wat zijn de eerste twee stappen die je moet ondernemen voordat je met een repository kunt gaan werken?
7.  Wat is **Git bash** en waarin verschilt dit van een GUI zoals Git Desktop?
8.  Wat wordt er bedoeld met de **'working directory'**?
9. Met welk specifiek commando initialiseer je een nieuwe git repository?
10. Wat gebeurt er precies wanneer je het commando `git add .` gebruikt?
11. Wat is de functie van de **'stage'** in het proces van het opslaan van bestanden?
12. Waar dient de toevoeging **'-m'** voor bij het uitvoeren van een commit?
13. Welke **twee stappen** moet je altijd doorlopen om bestanden daadwerkelijk in een repository op te slaan?
14. Hoe kun je aan de naam van een map of bestand zien dat deze **verborgen** is?
15. Welk commando gebruik je om een **kopie van een bestaande repository** (bijvoorbeeld van GitHub) te maken?
16. Wat is het verschil tussen de commando's **`git push`** en **`git pull`**?
17. Met welk commando kun je controleren welke bestanden er momenteel in de **stage** staan?
18. Wat is de functie van het commando **`git log`**?
19. Waarom wordt het commando **`rm -rf ./.git`** als destructief beschreven en wat blijft er nog over van je project nadat je dit hebt uitgevoerd?

#### Python
* De Python-interpreter
* Een Code-Editor of IDE
  * Visual Studio Code is erg populair en heeft veel handige extensies voor Python.
    * PyCharm** (Community Edition is gratis) is specifiek ontworpen voor Python en wordt veel gebruikt.

#### De Commandoregel (Terminal)
* Hoewel je veel vanuit je IDE kunt doen, is het handig om vertrouwd te raken met de **commandoregel** (Terminal op macOS/Linux, Command Prompt of PowerShell op Windows).
* Je gebruikt dit om Python-scripts uit te voeren, pakketten te installeren met `pip`, en om virtuele omgevingen te beheren.

#### Pip (Pakketbeheerder)
Je gebruikt het om extra bibliotheken en modules te installeren die je nodig hebt voor grotere projecten, zoals `requests` voor webverzoeken of `pandas` voor data-analyse.
* `pip` is de standaard **pakketbeheerder** voor Python en is automatisch meegeïnstalleerd met een nieuwe versie van Python.
* `uv` is een nieuwkomer, maar is al snel erg populair geworden door snelheid en gebruiksgemak. Als je `uv` wilt gebruiken moet je het apart installeren (*geen must have*).

#### Docker
* We hebben al een versie van Python voorbereid in een Docker-image.
* Naast python bevat de image ook een database-server (mariadb) voor later gebruik.
* Om de database-server te configureren is er ook een versie van phpMyAdmin geïnstalleerd.
* [Download de repository hier](https://github.com/siewers32/docker_python/)

:::

::: section
### Variabelen

{% video "s0Cw-3Cu66c" %}

#### Verschillende typen variabelen
Je kunt variabelen gebruiken om verschillende typen informatie op te slaan. Denk aan integers, floats, strings, lists, tuples, dictionaries en meer!  

**Integers**  
Integers zijn gehele getallen zoals: 5 of 6 of 120993
```python
my_integer = 5
```
**Floats**  
Floats zijn getallen waar een punt in staat zoals: 4.95 of 45.332
In nederland is die punt een komma. 4,25 betekent 4 en nog een beetje. 0,25 is een kwart of 25-honderste. In python schrijf je gebroken getallen (floats) altijd met een punt.
```python
my_float = 5.0
```
**Strings**
Een string is een serie karaters of tekst. Je herkent een string aan het feit dat er aanhalingstekens omheen staan zoals: 
```python
my_string = "Dit is een stukje tekst"
```
**Lists**  
Een list is een lijst die weer bestaat uit verschillende waarden zoals: 
```python
mylist = [1, 3, "tekst", 4.86]
```
**Tuple**  
Een tuple lijkt op een list, maar je kunt hem niet aanpassen. In een list kun je gerust andere waarden toevoegen of verwijderen. Een tuple is zoals die is en verandert verder niet. Dit is een voorbeeld (1, 8, 75, "lekker weertje")
```python
my_tuple = (1, 8, 75, "lekker weertje")
```
**Dictionary**
Een dictionary is ook weer een soort list, maar nu kun je alle waarden in de dictionary ook een naam geven.
```python
my_dictionary = {"naam": "pipo", "mijn_getal": 8, "fav_kleur": "groen"}
```
:::

::: section
### Tekstfuncties

Een function of methode is een actie die je kunt uitvoeren op een stukje data. Je kunt bijvoorbeeld in een stukje tekst automatisch alle woorden met een hoofdletter wil laten beginnen. Hiervoor gebruik je de methode title()

```python
stukje_tekst = "dit is een stukje tekst"
print(stukje_tekst.title())

# output: Dit Is Een Stukje Tekst
```
Je kunt ook alle letters hoofletters maken...
```python
print(stukje_tekst.upper())

# output: DIT IS EEN STUKJE TEKST
```
... of juist weer kleine letters....
```python 
print(stukje_tekst.lower())
# output: dit is een stukje tekst
```
#### Variabelen en functies
Je kunt ook variabelen printen en aanpassen.
```python
fname = "ariane"
lname= "grande"
fullname = f"{fname} {lname}"
print(fullname.title())

# output: Ariane Grande
```
De letter f bij fullname staat voor format.  Met format kun je variabelen en tekst door elkaar gebruiken. Aan <code>fullname</code> wordt nu de string "ariane grande" toegekend. Door de title-methode krijgen alle woorden een hoofdletter aan het begin.

#### Gedoe met aanhalingstekens
Aanhalingstekens heb je in 2 smaken <code>'</code> en <code>"</code>. Je gebruikt ze vaak in teksten, maar ze worden ook gebruikt om aan python aan te geeven dat een string ergens begint of eindigt.
```python
# Dit kan wel...
kroegnaam = "The World's Best Place to Be"
print(kroegnaam)

# Maar dit kan niet....
kroegnaam = 'The World's Best Place to Be'
print(kroegnaam)
```
Je kunt best gebruik maken van aanhalingstekens in een string, maar gebruik dan niet dezelfde aanhalingstekens om een string te beginnen en te eindigen.
Soms ontkom je er niet aan. Je kunt dan een \ voor een speciaal karakter (bijv. een aanhalingsteken) zetten...
```python
# Zo kan het ook....
kroegnaam = 'The World\'s Best Place to Be'
print(kroegnaam)
```
Een zogenaamd escape-karakter \ heeft dus een speciale functie in python. Je kunt een escape-karakter ook printen...
```python
# Zo kan het ook....
# locatie = "C:\python\mapje wordt dan"
locatie = "C:\\python\\mapje"
print(locatie)

#output C:\python\mapje
```
Door een escape-karakter \ voor een karakter met een speciale betekenis te zetten, acteert het weer als een gewoon karakter.

In teksten heb je ook te maken met karakters die je niet kunt zien! Denk aan een karakter om naar de volgende regel te gaan of een tab. In python kun je deze karakters wel gebruiken. Een volgende-regel of next-line charakter is een <code>\n</code>. Een tab wordt aangeduid met een <code>\t</code>.

```python
eerste = "Deze tekst staat op de eerste regel"
tweede = "Deze tekst staat op de tweede regel"
print(f"{eerste}\n{tweede}")

#output
Deze tekst staat op de eerste regel
Deze tekst staat op de tweede regel
```

#### Berekeningen met tekst
Met teksten kun je natuurlijk niet echt rekenen, maar python neemt berekeningen wel serieus. Bekijk onderstaande code maar eens:
```python
mijn_tekst = "***"
print(mijn_tekst * 2)

#output is twee keer zoveel sterren!!
******
```
```python
mijn_tekst = "***"
print(mijn_tekst + mijn_tekst)

#output is twee keer zoveel sterren!!
******
```
Je kunt niet alle bewerkingstekens gebruiken. Je kunt tekst niet delen en teksten van elkaar aftrekken werkt ook niet.

:::

::: section
### Lists

Lists, tuples en dictionaries bieden de mogelijkheid om een set van informatie op te slaan. Lists zijn bijvoorbeeld handig als je alle namen van files in een directory op wil slaan. Of je wilt de namen en adressen van medewerkers opslaan. Als het gaat om een set van waarden die met elkaar te maken hebben, dan kan een list uitkomst bieden.
Je kunt bijvoorbeeld de (eerste) letters van het alfabet opslaan in een list...
```python
my_list = ["A", "B", "C", "D", "E", "F"]
```
Je kunt een letter opzoeken op basis van de plek waar hij in de lijst staat. De letter "A" staat op de eerste plek. Bij een list begin je altijd te tellen vanaf 0. Je zou dus kunnen zeggen dat de letter "A" op de 0-de plek staat. Om de letter "A" te printen doe je dit...
```python
print(my_list[0])
```
Zo toon je het eerste element van de list my_list op het scherm.
```python
print(my_list[0])
A
print(my_list[2])
C
print(my_list[3])
D
```
Je kunt ook vanaf de andere kant van de list beginnen te tellen.
Bijvoorbeeld:
```python
print(my_list[-1])
F
print(my_list[-2])
E
```

#### Elementen in een list aanpassen
Stel je hebt een lijst motoren en je wilt er 1 aanpassen
```python
motorcycles = ['honda', 'yamaha', 'suzuki'] 
print(motorcycles)

# honda wordt aangepast naar ducati
motorcycles[0] = 'ducati' 
print(motorcycles)
# output: ['ducati', 'yamaha', 'suzuki']
```

#### Elementen toevoegen aan een list
De honda moet toch weer terugkomen in de lijst. We willen dus een extra element toevoegen. Dat doe je met de methode <code>append()</code>
```python
motorcycles.append('honda') 
print(motorcycles)
# output: ['ducati', 'yamaha', 'suzuki', 'honda']
```

#### Elementen op een bepaalde plek toevoegen in een lijst
Een KTM ontbreekt nog, maar die willen we toevoegen na de ducati. Dit kun je doen met de methode <code>insert()</code>. Insert neemt 2 argumenten, namelijk de plek waar moet worden ingevoegd en de waarde.
```python
motorcycles.insert(0, 'ktm') 
print(motorcycles)
# output: ['ktm', 'ducati', 'yamaha', 'suzuki', 'honda']

motorcycles.insert(3, 'kawasaki') 
print(motorcycles)
# output: ['ktm', 'ducati', 'yamaha', 'kawasaki', 'suzuki', 'honda']

```

#### Elementen weggooien
Dat kan natuurlijk ook..
```python
del motorcycles[3]
print(motorcycles)

# output: ['ktm', 'ducati', 'yamaha', 'suzuki', 'honda']
```

#### List methoden
Eigenlijk heb je al gewerkt met list methoden. Je kunt door een methode te gebruiken gegevens toevoegen aan een list met <code>insert()</code> of <code>append()</code>. Er zijn nog meer mogelijkheden met lists. Een opsomming vind je op [w3schools python list methods](https://www.w3schools.com/python/python_ref_list.asp)

#### Een list in een list
Lists kunnen zelf ook weer onderdeel uitmaken van een list. Stel dat je een list hebt met voertuigen:
```python
voertuigen = ["vliegtuig", "auto", "fiets"]
```
Je hebt nog een 2e list met dieren
```python
dieren = ["aap", "mier", "rat"]
```
En nu voegen we beide lists toe aan een nieuwe list
```python
allebei = [voertuigen, dieren]
```
Als je dan "mier" wilt printen dan moet je op zoek naar het 2e element in de 2e list. Aangezien we beginnen te tellen bij 0 wordt dat...
```python
print(allebei[1][1])
```
De aap is dan het eerste element in de 2e list <code>allebei[1][0]</code>  
Het vliegtuig is het eerste element in de 1e list <code>allebei[0][0]</code>  

We voegen nog een dictionary toe. In een dictionary hebben elementen een naam, bijvoorbeeld: 
```python
b = { "naam": "Benny", "fav_kleur": "groen" }
g = { "naam": "Gerard", "fav_kleur": "paars" }
allebei.append(b)
allebei.append(g)
print(allebei)
```
Als je nu de naam van de eerste dictionary wil printen, dan moet je dus zijn bij het 3e element in de list allebei. Van dat 3e element wil je de naam printen:
```python
print(allebei[2]["naam"])
```
:::

::: section
### User input
{% video "pDOpoHsTPLs" %}

Python is veelzijdig, je kunt er desktop-apps mee maken, websites, maar je kunt er ook interactieve programma's mee maken die draaien vanaf de command-line.
Om input van gebruikers te kunnen verwerken kun je gebruik maken van de gelijknamige functie <code>input()</code>

#### User input is altijd van het type string
Wat je ook invult het resultaat is altijd een string.
Je kunt berekeningen maken met invoer via <code>input()</code>, maar dan moet je de ingevoerde gegevens omzetten naar een integer of een float.
```python
num = input("Geef me een nummertje tussen 0 en 10 \n")
print(num * 5)

Geef me een nummertje tussen 0 en 10
9
99999
```
#### Typecasting
In plaats van de uitkomst van 9 * 5 wordt de variabele num als een string gezien en wordt zodanig 5 keer herhaald dus 99999. Om met input te kunnen rekenen moet de waarde gecast worden naar een ander type. Casting is het omzetten van string naar integer of van integer naar float. Casting lukt niet altijd. De letter "A" is geen getal, dus als je een letter naar een integer probeert te casten krijg je een ValueError. 
Hieronder de aangepaste code
```python
num = int(input("Geef me een nummertje tussen 0 en 10 \n"))
print(num * 5)

Geef me een nummertje tussen 0 en 10
9
45
```

Mogelijke conversies:
```python
a = "1"
num = int(a)
num = float(num)
print(num)

#output 1.0

a = "Tekstje"
a = tuple(a)
a = list(a)

a.reverse()
print(a)

#output
['e', 'j', 't', 's', 'k', 'e', 'T']

```
:::

::: section
### Loops
Vaak komt het voor dat je een bewerking wilt uitvoeren op alle elementen in een list. Als je een list print, dan zie je ook de haken van de list en komma's tussen de elementen. Stel dat je alle elementen gewoon onder elkaar wilt printen, hoe gaat dat?
```python
tovenaars = ['tita', 'merlin', 'hans klok']
print(tovenaars)

# output
['tita', 'merlin', 'hans klok']
```
Hieronder worden de tovenaars 1 voor 1 in een loop getoond op het scherm. 

```python
for tovenaar in tovenaars:
    print(tovenaar)
 
#output
tita
merlin
hans klok
```
In de regel <code>for tovenaar in tovenaars</code> wordt voor alle tovenaars 1 voor 1 een waarde aan de variabele tovenaar toegekend. Je noemt dit een 'loop' omdat deze actie net zo lang wordt herhaald totdat alle elementen in tovenaars een keer aan de beurt zijn geweest.
* De eerste keer wordt de waarde 'tita' toegekend aan de variabele tovenaar.  
* De waarde van tovenaar wordt geprint
* De volgende waarde uit tovenaars wordt opgehaald en opnieuw wordt er geprint
* Dit proces wordt herhaald totdat alle elementen uit de list aan de beurt zijn geweest.
* 
Je ziet dat de regel <code>print(tovenaar)</code> iets van de kant af staat. Deze regel is ingesprongen. In Python betekent dit dat de print-opdracht is ingebed in de for-loop. Hier moet je goed op letten, want Python is streng. Als je slordig omgaat met inspringingen dan krijg je foutmeldingen.

```python
counter = 0
for tovenaar in tovenaars:
    counter += 1
    # Dit is hetzelfde als counter = counter + 1
    # counter wordt dus steeds 1 meer in de loop

    print(tovenaar.title())
    print(f"{ tovenaar.title() } is tovenaar { counter }")
    # Je kunt meerdere opdrachten uitvoeren in een loop!
print("Zo, dat was het")
```
Zoals je ziet wordt alle code die is ingesprongen herhaald in de for-loop. Als laatste wordt nog "Zo, dat was het" getoond. Dit is niet ingesprongen. Het valt buiten de loop en wordt na de loop maar 1 keer uitgevoerd. De <code>:</code> in de eerste regel can de for-loop en de inspringing bepalen waar de code in de loop begint en waar die eindigt.

#### Code herhalen zonder list
Je kunt ook zelf definiëren hoe vaak een loop moet worden gebruikt. Hieronder een voorbeeld:
```python
for v in range(1, 3):
    print(v)

#output
1
2
```
Met <code>range()</code> kun je aangeven hoe vaak de code in de for-loop moet worden herhaald. De variabele v krijgt steeds de eerstvolgende waarde uit de range.
Je ziet dat de loop maar 2x wordt uitgevoerd. De eerste waarde in range wordt getoond, maar de laatste niet!  

Je kunt ook nummers overslaan in een range...
```python
for v in range(2, 8, 2):
    print(v)

#output
2
4
6
```
Het derde argument in de functie <code>range()</code> bepaalt hoeveel er wordt opgeteld bij huidig getal.
De eerste keer wordt 2 weergegeven. Bij 2 wordt 2 opgeteld, dus wordt 4 weergegeven etc. etc.
Het laatste getal 8 wordt niet meer weergegeven!

#### Berekeningen in een loop
Je kunt de variabele <code>v</code> gebruiken om berekeningen mee uit te voeren. Onderstaand voorbeeld laat zien hoe je iedere v kunt vermenigvuldigen met zichzelf (kwadraat). Het resultaat wordt toegevoegd aan een list!

```python
# Een lege list maken
lst = []

for v in range(2, 8, 2):
    # kwadraat van zichzelf
    lst.append(v ** 2)

print(lst)
    
#output
[4, 16, 36]
```

#### List comprehensions
Bovenstaand voorbeeld kun je ook nog korter weergeven. Python heeft hiervoor de list comprehension. Je kunt tussen de rechte haken van een list een klein stukje code opnemen waarmee je de list genereert...
```python
kwadraten = [v ** 2 for v in range(2, 8, 2)]
print(kwadraten)

#output
[4, 16, 36]
```

#### Lists to copy or not to copy
Bekijk onderstaande code...
```python
a =[1, 2, 3]
b = a
b[2] = 4
print(a)

#output
[1, 2, 4]
```
Wat gebeurt hier? Er wordt een lijst <code>a</code> gemaakt. <code>b</code> wordt gelijk aan <code>a</code>. <code>b</code> wordt veranderd, maar uit de print-opdracht blijkt dat <code>a</code> ook is veranderd!
De opdracht <code>b = a</code> levert alleen een verwijzing op in plaats van een kopie. <code>a</code> en <code>b</code> verwijzen beide naar dezelfde list!

#### Lists slicen
We herhalen het bovenstaande nog een keer maar met 1 klein verschil..
```python
a =[1, 2, 3]
b = a[:]
b[2] = 4
print(a)

#output
[1, 2, 3]
```
Door de toevoeging van <code>[:]</code> wordt er wel een echte kopie gemaakt van <code>a</code>!
Met de <code>[:]</code>-syntax kun je met een gedeelte van een list een nieuwe list maken. Met <code>[:]</code> geef je aan dat je van alle elementen in een bestaande list een nieuwe list wilt maken.  
Als je alle elementen vanaf het 1e element in de list wil hebben dan doe je dat zo...
```python
my_lst = [1, 2, 3, 4]
nw_list = my_lst[1:]
print(nw_list)

#output
[2, 3, 4]
```
Alle elementen tot aan list-element 4...
```python
my_lst = [1, 2, 3, 4]
nw_list = my_lst[:3]
print(nw_list)

#output
[1, 2, 3]
```
Alle elementen vanaf 1 tot 4

```python
my_lst = [1, 2, 3, 4]
nw_list = my_lst[1:3]
print(nw_list)

#output
[2, 3]
```
:::

::: section
### Condities

Op basis van condities kun je beslissen wat je programma moet doen in een bepaalde situatie. Stel je wil weten of een bepaalde waarde voorkomt in een list. Dan kan je dat zo doen....
```python
autos = ['audi', 'bmw', 'subaru', 'toyota']
for auto in autos:
    if auto == "bmw":
        print("yep, er zit een bmw bij!")
```
In bovenstaande code zie je het if-statement weer zijn eigen code-block heeft. Je ziet het if-commando - een conditie die wel of niet waar kan zijn - en een <code>:</code>
Daarna zie je de ingesprongen tekst <codeprint("yep, er zit een bmw bij!")</code>. Dit stukje code wordt alleen uitgevoerd als de conditie <code>auto == "bmw"</code> waar is (True).

De dubbele <code>==</code>-tekens staan voor: 'gelijk aan'.
```python
# x krijgt de waarde 10 toegewezen
x = 10 

# x wordt vergeleken met 10
x == 10

# Als x gelijk is aan 10 dan is x == 10 gelijk aan True
print(x == 10)

# output
True
```
Vergelijken is dus iets anders dan toekennen waarbij je een waarde in een variabele stopt. Op [w3schools](https://www.w3schools.com/python/gloss_python_comparison_operators.asp) vind je een heel overzicht van vergelijkings-operatoren. Dit is er ook een van:

```python
x = 9
print(x != 10)

# output
True
```

#### AND en OF
Je kunt meerdere vergelijkingen maken in 1 regel...  
Met <code>and</code> moeten beide vergelijkingen <code>True</code> zijn
```python
x = 9
print(x != 10 and x == 10)
# output
False
```
Met <code>or</code> moet een van de vergelijkingen <code>True</code> zijn

```python
print(x != 10 or x == 10)
#output
True
```

Controleren of een element voorkomt in een list..
```python
lst = ['audi', 'bmw', 'subaru', 'toyota']
if 'audi' in lst:
    print('audi is in the list')
```
of juist niet...
```python
lst = ['audi', 'bmw', 'subaru', 'toyota']
if 'mercedes' not in lst:
    print('mercedes is niet in list')
```

#### if-else statements
Je kunt ook de uitkomst van een conditie koppelen aan code die wordt uitgevoerd als de uitkomst <code>True</code> is en weer ander code als de uitkomst juist <code>False</code> is....
```python
lst = ['audi', 'bmw', 'subaru', 'toyota']
if 'mercedes' in lst:
    print('Mercedes is wel in de list')
else:
    print('Mercedes is niet in de list')
```
En nog veelzijdiger wordt het als je ook nog verschillende condities kunt testen....
```python
clubs = ['PEC Zwolle', 'Ajax', 'Feijenoord', 'AZ', 'FC Knudde']

for club in clubs:
    if club[0] == 'A':
        print(f"{club} begint met de letter A")
    elif club[0] == 'F':
        print(f"{club} begint met de letter F")
    else:
        print(f"De eerste letter van {club} begint niet met een A of F")

```
Zoals je ziet kun je met de rechte haken ook in een string refereren naar de plek waar een karakter zich bevindt. Je kunt ook teksten slicen met <code>[:]</code>!


:::

::: section
### While

Eerder heb je gezien dat je code kunt herhalen in een for-loop. Een while-loop doet in principe precies hetzelfde, maar er zijn situaties waarbij een while-loop een betere oplossing is dan een for-loop.
Een van die situaties is bij applicaties waar user-input wordt gevraagd.  
Bekijk onderstaande code eens..

```python
prompt = "Vertel me iets dan geef ik terug wat je invoerde! \n" \
         "Vul 'q' in om het programma te eindigen. \n"

active = True
while active:
    message = input(prompt)
    if message == 'q':
        active = False
    else:
        print(message)
```
In gewoon nederlands:  
Zolang de variabele <code>active</code> gelijk is aan <code>True</code> gaan we het volgende doen:  
* Er wordt gechecked of de gebruiker de letter 'q' heeft ingegvoerd.
* Als dat zo is wordt <code>active</code> op False gezet. Het programma wordt dan gestopt.
* Als dan niet zo is dan wordt hetgeen de gebruiker heeft ingevoerd op het scherm getoond.

Bij een while-loop wordt de code dus net zo lang herhaald totdat de conditie achter <code>while</code>-loop <code>False</code>is. Dan stopt de while loop.

Als het programma stopt, dan gaat alle gebruikers-input verloren. In het volgende stukje code zie je hoe je die gebruikersinput op kan slaan in een tekst-bestand:

```python
prompt = "Vertel me iets dan geef ik terug wat je invoerde! \n" \
         "Vul 'q' in om het programma te eindigen. \n"

active = True
lst = []
while active:
    message = input(prompt)
    if message == 'q':
        active = False
        fo = open('newtext.txt', 'wt')
        for i in lst:
            fo.write(i + "\n")
        fo.close()
    else:
        lst.append(message)
```
Er wordt een lege list toegevoegd aan de code <code>lst</code>  
Alle gebruikersinput wordt toegevoegd aan de list <code>lst</code>.
Als er op <code>q</code> wordt gedrukt wordt er....
* Een nieuw tekstbestand aangemaakt met de naam <code>newtext.txt</code>
* Alle elementen in <code>lst</code> worden in een for-loop naar het text-bestand geschreven

#### Werken met tekstbestanden
```python
fo = open('newtext.txt', 'wt')
```
<code>fo</code> is een zogenaamde 'handle' naar het tekstbestand <code>newtext.txt</code>. De methode <code>open</code> accepteert 2 argumenten. De naam van het bestand en wat je met dat bestande gaat doen. De optie <code>wt</code> staat voor 'write text'. Python gaat anders om met textbestanden dan met binaire bestanden zoals afbeeldingen e.d. De functie write betekent dat het tekstbestand wordt aangemaakt als het nog niet bestaat, maar als het wel bestaat, dan wordt het overschreven. 
Als je informatie toe wilt voegen aan een bestaand bestand, dan gebruik je de optie <code>at</code>. Dit staat voor 'append' zodat je meer tekst toe kan voegen.
Je kunt ook teksten uit bestanden lezen. Dan geef je de optie <code>rt</code>

#### Charactersets
Voor de computer zijn letters eigenlijk gewoon nummers. Een karakter wordt omgezet naar nullen en enen in een byte. Byte betekent letterlijk by eight. Dus er zijn 8 nullen en enen beschikbaar om een karakter op te slaan. Met 8 nullen en enen kun je 2<sup>8</sup> = 256 verschillende tekens maken. De letter 'a' wordt opgeslagen onder code 97, letter 'b' wordt dan 98 en 'c' dus 99 enzovoort. De hoofdletter 'A' wordt opgeslagen als code '65'. Python werkt onder de motorkap ook met deze codes. Je kunt deze codes opzoeken in de [ASCII](https://nl.wikipedia.org/wiki/ASCII_(tekenset)#Standaard-ASCII) lijst. 
Kijk maar eens naar de sortering van deze list:
```python
letters = ['a', 'A', 'B', 'b']
letters.sort()
print(letters)

#output
['A', 'B', 'a', 'b']
```
De hoofdletters komen voor de kleine letters, omdat die een lagere code hebben in de ASCII lijst.
Je kunt de codering voor karakters opzoeken met python...
```python
print(ord('a'))
#output
97

print(chr(97))
#output
a
```


#### Uit een loop breken
Stel je hebt dit programma....
```python
prompt = "Geef me de naam van een voetbalclub \n" \
          "(vul een 'q' in om te stoppen) \n"
while True:
      vc = input(prompt)

      if vc == 'q':
            break
      else:
            print(f"De voetbalclub {vc} is helemaal baas!")
```
Zolang while True is wordt de code herhaald. Daar komt dus nooit een einde aan. In de vorige voorbeelden hadden we nog de variabele 'active' gebruikt om de while-loop te stoppen. In dit geval stoppen we de loop met het commando <code>break</code>

#### Teruggaan naar het begin van de loop
Met het commando <code>continue</code> kun je de rest van de code in een loop overslaan en direct terug gaan naar het begin van de loop.
Stel je hebt onderstaande code...
```python
num = 0
while num < 10:
      num += 1
      if num % 2 == 0:
            continue
      print(num)
```
Deze loop gaat net zo lang door totdat de variabele <code>num</code> niet meer kleiner is dan 10. In het if-statement wordt bekeken of <code>num</code> deelbaar is door 2. Als dat zo is wordt <code>num</code> niet op het scherm getoond omdat <code>continue</code> er voor zorgt dat de code wordt afgebroken en het programma weer terug gaat naar het begin van de loop. De print-opdracht aan het einde van het programma wordt dus overgeslagen!

:::

::: section
### Foutafhandeling
Om er voor te zorgen dat gebruikers niet met foutmeldingen worden geconfronteerd en applicaties niet instorten als een gebruiker iets verkeerd doet, is het belangrijk dat fouten worden afgevangen.

Bij applicaties waarbij om invoer wordt gevraagd kan niet van tevoren worden voorspeld wat een gebruiker gaat invoeren. Alles is mogelijk, maar een applicatie kan niet altijd met de invoer van een gebruiker overweg....

```python
prompt = "Geef een getal tussen 1 en 10\n"
getal = int(input(prompt))
print(10 + getal)
```
Als de gebruiker nu <code>sdfdsf</code> invult wordt onderstaande error getoond:
```python
ValueError: invalid literal for int() with base 10: 'sdfdsf'
(venv) janjaap@iMac-Pro-van-Jan pythoncisco % 
```
Python probeert de input om te zetten naar een <code>int</code>, maar dat lukt niet met <code>sdfs</code>.
Het programma wordt onderbroken.

Om te voorkomen dat de programma abrupt stopt nadat er een fout optreedt, kan de code eerst getest worden en kan de developer bepalen wat het programma moet doen bij een fout.
```python
try:
    prompt = "Geef een getal tussen 1 en 10\n"
    getal = int(input(prompt))
    print(10 + getal)
except:
    print('Oeps, er ging iets mis')
```
Door het try/except block wordt de code getest en als er iets fout gaat wordt de regel 'Oeps er ging iets mis' getoond. Nog niet geweldig, maar beter dan een lelijke foutmelding.
Het programma wordt uitgebreid met een while-lus, zodat de gebruiker net zo lang invoer kan geven totdat het programma een waarde krijgt waarmee de berekening kan worden uitgevoerd....
```python
doorgaan = True
while doorgaan:
    try:
        prompt = "Geef een getal tussen 1 en 10\n"
        getal = int(input(prompt))
        print(10 + getal)
        doorgaan = False
    except:
        print('Geef een getal anders kan het programma geen berekening uitvoeren!')
```
Hieronder de output van het programma....  
```python
Geef een getal tussen 1 en 10
bla
Geef een getal anders kan het programma geen berekening uitvoeren!
Geef een getal tussen 1 en 10
3
13
```
Het programma kan nog robuuster worden gemaakt. De gebruiker moet een getal tussen 1 en 10 geven. Python kan wel controleren of de invoer van het juiste type is, maar de programmeur bepaalt of een getal zich binnen de gewenste range bevindt. Als er een getal hoger dan 10 en lager dan 1 wordt gegeven kan je zelf een error programmeren...
```python
doorgaan = True
while doorgaan:
    try:
        prompt = "Geef een getal tussen 1 en 10\n"
        getal = int(input(prompt))
        if getal > 10 or getal < 0:
            raise Exception
        else:
            print(10 + getal)
            doorgaan = False
    except ValueError:
        print('Geef een getal anders kan het programma geen berekening uitvoeren!')
    except:
        print("Alleen getallen tussen 1 en 10 zijn geldig!")
```
Nu is het vrijwel onmogelijk om het programma nog over zijn toeren te krijgen. Alle input die niet geldig is wordt afgevangen en er wordt een passende melding gegeven. Het programma draait net zo lang door tot de gewenste input is gegeven.

:::


::: section
### Functies
Met functies kun je stukken code schrijven die je vaker nodig hebt. In plaats van iedere keer dezelfde code in te typen, kun je een functie *definiëren* en *aanroepen* op het moment dat je de code nodig hebt.
Hieronder een voorbeeld van een simpele functie
```python
# functie definiëren
def groet_gebruiker():
    print("Hallo beste gebruiker, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker()

# output
Hallo beste gebruiker, leuk dat je er bent
```
Met 'def' geef je aan dat je een functie wil definiëren. De code die ingesprongen is, hoort bij de functie. Iedere keer als de functie groet_gebruiker() wordt aangeroepen, zoals in de regels onder de functie, wordt die code uitgevoerd. 

#### Informatie doorgeven aan een functie
Natuurlijk is bovenstaand voorbeeld nog niet zo nuttig. Maar stel je voor dat je iedere gebruiker die inlogt wil begroeten met een persoonlijke groet. Dat kan met onderstaande functie...
```python
def groet_gebruiker(naam):
    print(f"Hallo beste {naam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('Kees')

# output
Hallo beste Kees, leuk dat je er bent
```

#### Positional arguments
Bovenstaande functie groet_gebruiker(naam) accepteert 1 argument. Je kunt meerdere argumenten meegeven aan een functie. We kunnen de functie uitbreiden met een voornaam en een achternaam. Python weet niets van voornamen en achternamen, dus je kunt de voor- en achternaam met elkaar verwisselen als je ze in de verkeerde volgorde doorgeeft.
De positie van de argumenten is dus bepalend.

```python
def groet_gebruiker(voornaam, achternaam):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('van der Broek', 'Kees')

# output
Hallo beste van der Broek Kees, leuk dat je er bent
```

#### Named arguments
Je kunt python ook forceren om te letten op de namen van de variabelen, zodat je zeker weet dat alles in de juiste volgorde wordt geprint.
```python
def groet_gebruiker(voornaam, achternaam):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker(achternaam='van der Broek', voornaam='Kees')

# output
Hallo beste Kees van der Broek, leuk dat je er bent
```

#### Default waarden invullen
Als een functie 2 argumenten accepteert, maar je weet er maar 1 dan kun je het 2e argument een default waarde aan laten nemen....
```python
def groet_gebruiker(voornaam, achternaam=""):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('Kees')

# output
Hallo beste Kees , leuk dat je er bent
```
De achternaam blijft leeg, omdat dat de default waarde is. Er blijft wel een spatie staan, dat komt omdat tussen voornaam en achternaam een spatie staat.
Zonder default waarde voor achternaam, kun je niet een argument weglaten. Als je dat doet krijg je een foutmelding...
```python
def groet_gebruiker(voornaam, achternaam=):
    print(f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent")

# functie aanroepen    
groet_gebruiker('Kees')

# output
TypeError: groet_gebruiker() missing 1 required positional argument: 'achternaam'
```

#### Return waarde
Een functie kan in plaats van iets te printen ook een waarde teruggeven. Als we bovenstaande functie ombouwen met een return-waarde dan ziet dat er zo uit.
```python
def groet_gebruiker(voornaam, achternaam=):
    return f"Hallo beste {voornaam} {achternaam}, leuk dat je er bent"

# functie aanroepen
datum = "Het is vandaag 27 januari."   
groet =  groet_gebruiker('Kees', 'Jansen')
print(f"{datum} {groet}")

# output
Het is vandaag 27 januari. Hallo beste Kees Jansen, leuk dat je er bent
```
Je ziet dat je nu de return-waarde van de functie ergens in je programma kunt hergebruiken.

:::

::: section
### Modules
Naarmate je code complex wordt, ga je steeds meer code onderbrengen in functies. Hierdoor blijft je code overzichtelijk. Als je logische namen voor functies en variabelen gebruikt houdt je veel meer overzicht over de structuur van je programma.  
Naarmate het aantal functies groeit kun je ook overwegen om functies in aparte bestanden onder te brengen. Dit soort bestanden noem je modules.  

Een voorbeeld:  
Stel je krijgt een .csv bestand met namen van gebruikers die je netjes uit moet printen.
Het .csv bestand is een soort tekstbestand dat is geëxporteert uit Excel. 
In ons geval bevatten de rijen een voornaam, een tussenvoegsel en een achternaam.
Dit is het .csv bestand...  
```python
Jan,van der,vliet, zandlaan 13, 4930 FJ, Harsen
Kees,,Marijnissen, Perenboomweg 21, 3999 GG, Plaaggeest
GRIET,van der,Pol, Harlekijnplein 33, 4952 DN, Den haag
Tara,,weeslanden, Kreakenmolenweg 3, 3900 DG, Muizegat
clarijn,,Ommezwaai, Melemoor 20, 4992 DS, Haperen
Piet,De,Vries, Stelsprong 10, 4930 DF, Harsen
Jan jaap,,Siewers, De kaapstander 20, 8251 LH, Dronten
```
Je ziet dat de namen soms met hoofdletters beginnen, maar soms ook weer niet.
We hebben de taak om de namen netjes af te drukken op het scherm. Onderaan de lijst moet het aantal personen worden weergegeven.  
Dit doen we in een aantal stappen:
* Open het .csv-bestand in read modus
* Lees alle regels uit het .csv bestand en tel de regels
* Zet alle letters in een regel om naar kleine letters
* Breek iedere regel op in een voornaam, tussenvoegsel, achternaam, adres, postcode en plaats
* Zorg ervoor dat voornaam en achternaam beginnen met een hoofdletter
* Voeg een veld volledige_naam toe die is opgebouwd uit voornaam, tussenvoegsel en achternaam
* Print de volledige naam van alle personen op het scherm
* Print het aantal personen op het scherm

#### Functies gebruiken
Dat zijn heel wat taken om in 1 script uit te voeren!  
Laten we de code opbreken in functies:
```python
def sanitize(line):
    # haal alle dubbele spaties en hoofdletters eruit
    pass

def create_person(lst):
    # zet de gegevens om in een dictionary

def add_fullname(person):
    # stel voor- en achternaam samen tot een volledige naam
    pass
    
def print_persons(persons, filter=["full_name"]):
    # print de van alle personen de volledige naam en het totaal aantal personen
    pass
```
Als je de functies zo bekijkt, kun je al heel goed zien wat het programma gaat doen.
Hieronder de implementatie van de functies.
1. Haal alle dubbele spaties en hoofdletters eruit
 ```python
def sanitize(line):
    # kleine letters maken en spaties voor en na het woord weghalen
    new_lst = []
    lst = line.split(',')
    for item in lst:
        new_lst.append(item.lower().strip())
    return new_lst
 ```

2. Converteer naar een dictionary zodat we toegang hebben tot de verschillende elementen van de naam:
```python
def create_person(lst):
    person = {"voornaam": "", "tussenvoegsel": "", "achternaam": ""}
    person["voornaam"] = lst[0]
    person["tussenvoegsel"] = lst[1]
    person["achternaam"] = lst[2]
    return person
```

3. Voeg de volledige naam toe aan de person dictionary:
```python
def add_fullname(person):
    if person["tussenvoegsel"] == "":
        person['full_name'] = f"{person['voornaam'].title()} {person['achternaam'].title()}"
    else:
        person['full_name'] = f"{person['voornaam'].title()} {person['tussenvoegsel']} {person['achternaam'].title()}"
    return person
```
4. Print volledige naam en aantal personen
```python
def print_persons(persons, filter=["full_name"]):
    counter = 0
    for person in persons:
        counter += 1
        for attr in filter:
            print(person[attr].title(), end=" ")
        print(end="\n")
    print(f"Er zijn in totaal {counter} personen")
```
Bovenstaande functies beslaan de totale functionaliteit van het programma. 
Het basis programma bestaat uit volgende functie-aanroepen

```python
persons = []
for line in open("test.csv", 'rt'):
    lst = sanitize(line)
    person = create_person(lst)
    person = add_fullname(person)
    persons.append(person)

print_persons(persons)
```

Dat is best veel code voor het uitprinten van een paar namen. Maar in het ontwerp is al een beetje nagedacht over toekomstige aanpassingen. Zou het niet handig zijn als je kunt aangeven welke gegevens je van personen wilt uitprinten. Misschien willen we later ook kunnen filteren op naam. Door de functies voor deze opdracht in een module onder te brengen kunnen we ze makkelijk hergebruiken en maken ze het uiteindelijke programma veel overzichtelijker.

Het idee is om nu 2 bestanden aan te maken. Het programma zelf en een module met de functies. Belangrijk is de locatie van de bestanden ten opzicht van elkaar. Als je een module maakt in dezelfde map als het programma, dan kun je de module importeren in het programma...
```python
# stel je hebt je file csv_module.py genoemd dan werkt dat zo...
import csv_module

```
Deze manier van werken is al een beetje riskant, omdat je met python ook modules van anderen kunt importeren. Sterker nog standaard wordt Python met meerdere standaard modules geïnstalleerd. De kans dat er al een module bestaat die 'csv' heet is heel aannemelijk. Sterker nog, die bestaat ook!
Probeer maar eens vanaf de commandline:
```python
python
>>>import csv
>>>dir(csv)
['Dialect', 'DictReader', 'DictWriter', 'Error', 'QUOTE_ALL', 'QUOTE_MINIMAL', 
'QUOTE_NONE', 'QUOTE_NONNUMERIC', 'Sniffer', 'StringIO', '_Dialect', '__all__','__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', 
'__package__', '__spec__', '__version__', 'excel', 'excel_tab', 'field_size_limit', 
'get_dialect', 'list_dialects', 're', 'reader', 'register_dialect', 'unix_dialect',
'unregister_dialect', 'writer']
```
Met dir kun je opvragen welke eigenschappen en functies beschikbaar zijn in een module!

Als je verwacht dat je nog veel meer functies gaat maken die te maken hebben met het manipuleren van csv bestanden, dan kun je ook een map maken waarin je meerdere modules bewaard.
Stel je noemt je programma 'main.py' en je hebt een map 'my_modules' met daarin een bestanden met csv-functies. Dit is dan je mappen-structuur
```python
programma
 |-- main.py
 |-- my_modules
        |-- csv.py
        |-- extra.py
```
In 'main.py' importeer je dan je module met...
```python
from modules import csv

```
Het voordeel is nu dat je de zelfgemaakte module gewoon 'csv' kunt noemen. Het werkt net als met bestanden. Er zijn veel bestanden die 'help.txt' heten, maar doordat bestanden in verschillende mappen staan kun je ze toch naast elkaar gebruiken. Je kunt niet 2 bestanden met dezelfde naam in een map bewaren!

#### Opdracht
* Maak de module csv en plaats die in een map in je project
* Plaats de functies uit dit hoofdstuk in de module
* Maak het csv-bestand zoals hierboven is aangegeven
* Laadt de module in een python-bestand en zorg dat je de functies kunt gebruiken om de lijst met personen weer te geven.
* Voeg een functie do_filter() toe aan de module waarmee je kunt filteren op voornaam of achternaam!
* Test het filter met <code>do_filter("achternaam", "V")</code>. Output is dan:
> Jan van der Vliet  
> Piet de Vries

<code>do_filter("plaats", "d")</code>

> Griet van der Pol  
> Jan Jaap Siewers

:::