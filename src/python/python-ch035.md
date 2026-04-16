---
title: Projecten
date: 2025-10-08
---

::: section
### {{ title }}

Projecten zijn omvangrijker opdrachten, waarbij je meerdere technieken met elkaar moet laten samenwerken.
:::

::: section
### De stembus
Zoals je weet wordt er tijdens de verkiezingen in Nederland gebruik gemaakt van 'de stembus'. Al jarenlang wordt er geprobeerd om het stemmen te digitaliseren, maar helaas is dat tot op heden nog niet gelukt. Een nobele taak dus voor een nieuwe lichting IT-ers om hier verandering in aan te brengen.

#### De stemapplicatie
Stemgerechtigden gaan gebruik maken van jullie python-applicatie om hun stem uit te brengen op een van de verkiesbaar gestelde politici. Aan het einde van de stemdag kun je met de applicatie weergeven hoeveel stemmen de verschillende politici hebben gekregen.

Zo kan het invoerscherm er uit zien:

> Maak hieronder een keuze?
> 
> #### PVDA/GroenLinks
> 1. Roelfs, A.H. (Anja) (v) Zwolle
> 2. Pelman, P. (Patrick) (m) Zwolle
> 3. Roetman-Visser, M. (Marloes) (v) 
> 
> #### ChristenUnie
> 4. van de Belt, R.A. (Ruben) (m) Zwolle
> 5. Rots, D.G. (Gerdien) (v) Zwolle
> 6. de Boer, J.W. (Wietse) (m) Zwolle

* Het [complete overzicht](https://www.kiesraad.nl/) van beschikbare politieke partijen vind je op [kiesraad.nl](https://www.kiesraad.nl/). Er is een  lijst te vinden met alle kandidaten voor de komende tweede kamer verkiezingen. Maak een werkbare selectie (10 - 20 kandidaten kunnen kiezen is voldoende voor jouw applicatie).

#### Wat moet er gebeuren:
* Inventariseer wat er moet gebeuren en maak een behoefte-analyse met:
    * Doel van het project
    * Wat moet de applicatie kunnen (functionaliteit)
    * Welke tools/programmeertaal ga je toepassen
* Maak een ontwerp waarin je uitlegt:
    * Hoe de applicatie er uit gaat zien (schermen)
    * Welke invoer-mogelijkheden er zijn 
    * welke uitvoer-mogelijkheden er zijn 
    * Een [stroomdiagram](/_assets/python/activiteiten_diagram.docx) om de activiteiten op volgorde weer te geven.

#### Overige eisen
* De applicatie moet 'hufter-proof' zijn. Probeer errors op het scherm te vermijden.
* De applicatie moet 'veilig' zijn. Probeer te voorkomen dat mensen meerdere keren kunnen stemmen.
* Er moet met meerdere computers tegelijk gestemd kunnen worden.

#### Overzichten
* Het aantal keer dat er is gestemd
* Het aantal keer dat is gestemd op een bepaalde kandidaat
* Het aantal keer dat is gestemd op een bepaalde partij
* Een overzicht van alle namen van de partijen en het aantal keer dat op die partij is gestemd.
* Een overzicht van alle kandidaten (voornaam, achternaam en partij) en het aantal keer dat op die kandidaat is gestemd
* De naam en het aantal keer dat er op partijen is gestemd per plaats

:::
::: section
### Secure File Organizer

#### Introductie
Je gaat een tool bouwen die een rommelige map (zoals "Downloads") automatisch opschoont, bestanden sorteert in mappen op basis van hun type, en gevoelige documenten kan beveiligen met professionele encryptie. Je werkt volgens het principe van **Modulair Programmeren**.

---

#### Fase 0: Logisch Ontwerp (De Blauwdruk)
**Doel:** Het visueel in kaart brengen van de datastromen en beslismomenten van de applicatie.

Voordat je begint met coderen, moet je begrijpen hoe de verschillende onderdelen van je programma met elkaar communiceren. Een fout in je logica is makkelijker te herstellen in een tekening dan in 200 regels code.

#### De Opdracht:
Maak een [**Activity Diagram** (stroomdiagram)](https://edutorial.nl/projecten/activiteitendiagram/) van het volledige proces. Gebruik hiervoor een tool zoals *draw.io*, *Lucidchart*, of gewoon pen en papier.

**In je diagram moeten de volgende onderdelen duidelijk zichtbaar zijn:**
1.  **Start:** De gebruiker start `main.py`.
2.  **Input:** De gebruiker voert een mappad in.
3.  **Beslismoment (Validatie):** Bestaat de map? Zo nee, geef foutmelding en vraag opnieuw.
4.  **Proces - Sorteren:**
    * Lees `config.json` uit.
    * Loop door elk bestand in de map.
    * Check de extensie en bepaal de doelmap.
    * Verplaats het bestand.
5.  **Beslismoment (Beveiliging):** Vraag de gebruiker: "Wilt u een map versleutelen?"
    * Indien ja: Roep de `crypto_vault` module aan.
    * Indien nee: Ga naar de afsluiting.
6.  **Einde:** Bevestig dat de acties zijn voltooid en sluit het programma veilig af.


#### Deliverable Fase 0:
* Een afbeelding of PDF van je diagram.
* Een korte tekstuele uitleg (max. 100 woorden) waarin je uitlegt hoe jouw `main.py` de functies uit de andere modules (`organizer.py` en `crypto_vault.py`) aanroept.

---

#### Fase 1: Architectuur & Bestandssortering
**Doel:** Het opzetten van de mappenstructuur en de eerste logica voor bestandsbeheer.

#### Opdrachten:
1.  **Mappenstructuur:** Richt je project in met een hoofdmap `SFO/` en een submap `modules/`.
2.  **Configuratie:** Maak een `config.json` waarin je definieert welke extensies bij welke map horen (bijv. `.jpg` en `.png` naar "Afbeeldingen").
3.  **Module `organizer.py`:** Schrijf een module met de functie `sort_files(target_dir)`.
    * Deze functie moet mappen aanmaken als ze niet bestaan.
    * Bestanden moeten verplaatst worden (gebruik `shutil`) naar de juiste map op basis van de `config.json`.
4.  **Main script:** Maak een `main.py` die de gebruiker vraagt welk pad moet worden opgeschoond en roep je module aan.

**Deliverable:** Een werkend script dat bestanden fysiek verplaatst naar de juiste submappen.

---

#### Fase 2: De "Crypto Vault"
**Doel:** Werken met externe libraries en beveiliging.

#### Opdrachten:
1.  **Installatie:** Installeer de externe library `cryptography` via pip.
2.  **Module `crypto_vault.py`:** Schrijf een module die de volgende functies bevat:
    * `load_or_generate_key()`: Controleert of er een `secret.key` bestand is, zo niet: maak er een aan.
    * `encrypt_file(filepath)`: Leest een bestand in, versleutelt de data met de sleutel, en overschrijft het origineel.
    * `decrypt_file(filepath)`: Doet het omgekeerde.
3.  **Integratie:** Voeg in `main.py` een menu-optie toe: "Versleutel een map". Als de gebruiker dit kiest, moeten alle bestanden in een specifieke map onleesbaar worden gemaakt.

**Deliverable:** Een module die bestanden kan "locken" en "unlocken". De bestanden mogen niet meer te openen zijn in bijvoorbeeld Word of een fotoviewer zolang ze versleuteld zijn.

---

#### Fase 3: Robuustheid & Logging
**Doel:** De code professioneel maken (Error handling & Logging).

#### Opdrachten:
1.  **Foutafhandeling:** Zorg dat je programma niet crasht als:
    * De gebruiker een ongeldig pad invoert.
    * Een bestand al open staat in een ander programma.
    * De `secret.key` ontbreekt bij het ontsleutelen.
2.  **Logging:** Importeer de standaard `logging` module. Houd een `app.log` bij waarin elke actie (verplaatsen, versleutelen, foutmelding) wordt opgeslagen met een tijdstempel.
3.  **Documentatie:** Schrijf voor elke functie in je eigen modules een korte *docstring* (`""" tekst """`) waarin je uitlegt wat de parameters zijn en wat de functie teruggeeft.

---

#### Beoordelingscriteria (Code Review)
Tijdens het inleveren moet je de volgende vragen kunnen beantwoorden:
* Waarom heb je gekozen voor `shutil.move()` en niet voor `os.rename()`?
* Wat gebeurt er met je data als je de `secret.key` verwijdert?
* Hoe heb je voorkomen dat het script zichzelf (de `.py` bestanden) per ongeluk verplaatst of versleutelt?
* Laat zien hoe je AI hebt gebruikt om een specifiek probleem op te lossen (bijv. een regex voor extensies) en leg uit hoe die code werkt.

:::
::: section
### Warmred
#### Opdrachten
* Download de behoefte-analyse voor het [project Warmred](/_assets/python/proefexamen_warmred.docx)
* Maak een [stroomdiagram](/_assets/python/activiteiten_diagram.docx) om de activiteiten op volgorde weer te geven
* [Voorbeeld stroomdiagram](/_assets/python/python_stroomschema.pdf)
* Gebruik [deze bestanden](/_assets/python/apachelog_v2.zip) om een tool te maken volgens de beschrijving in de behoefte-analyse.
* Hieronder zie je een voorbeeld van het keuzemenu dat de tool laat zien nadat de applicatie is opgestart.
```csv
===============================================================
Maak een keuze
0. Maak MySQL-tabel apache-log leeg
1. Laadt het apache-log in mysql
2. Overzicht van top 10 meest gebruikte browsers
3. enz. enz.
===============================================================
Maak een keuze:
```

#### Bestanden
```shell
apachelog_v2:
	db:
		apachelog.sql
	logmodules:
		apache.py
	opdracht.py
	small_apache.log
	super_small_apache.log
```

* `small_apache.log` en `super_small_apache.log` zijn .csv bestanden. CSV-bestanden bevatten tab-gescheiden data. Bekijk de inhoud van beide bestanden. Je zult zien dat `super_small_apache.log` bestaat uit maar een paar regels. Dit is ideaal om mee te testen.
* `apachelog.sql` bevat de sql-code om de structuur van de database op te zetten. Maak een nieuwe database aan en importeer het sql bestand om de tabellen aan te maken.
* `apache.py` is een module-bestand. Het bevat functies om connectie te maken met een database en om queries uit te voeren.
* `opdracht.py` bevat al een deel van de code. Vul dit bestand aan zodat je de applicatie volledig werkend kunt laten zien.

#### Aanpak
* Lees de behoefte-analyse goed door. Hierin staat beschreven waar het project over gaat en wat er wordt verwacht van de applicatie die je moet maken.
* Installeer de benodigde modules (pymysql en apachelogs)
* Creëer de database met een mysql-client
* Configureer de gegevens voor de database-connectie in apache.py

:::

::: section
### Flitspaal
* Download de behoefte-analyse voor het [project flitspaal](/_assets/python/proefexamen_flitspaal_v2.docx).
* Download de (gedeeltelijke) applicatie. [Projectbestanden flitspaal](/_assets/python/project_flits_v2.zip)
* Maak een [stroomdiagram](/_assets/python/activiteiten_diagram.docx) voor het bouwen van de applicatie.
* Pas opdracht.py aan, zodat de werking van de applicatie voldoet aan de opdracht
* Hieronder zie je de uitwerking van het keuzescherm:

```csv
===============================================================
Maak een keuze
1. Tabellen leegmaken en nieuwe csv-bestanden inlezen
2. Overzicht van de flitscameras en hun locatie
3. Overzicht van de boetes op 50-kilometer wegen
4. Overzicht van auto's waarvan het kenteken bestaat uit 1 letter, 3 cijfers en 2 letters (bijv. X-999-XX)
5. Overzicht van overtredingen voor een bepaald kenteken
6. De top 10 van camera's die de hoogste gemiddelde snelheidsoverschrijding hebben gemeten
7. De top 10 van auto's die het meest geflitst zijn
8. De top 10 van camera's die het meeste geflitst hebben
9. De top 10 van kentekens met het hoogste bedrag aan boetes en het aantal keer dat ze geflitst zijn
===============================================================
Maak een keuze: 
```
#### Stappenplan
1. Update de repository [docker_python](https://github.com/siewers32/docker_python) met `git pull` (of `git clone` bij het opnieuw klonen van de repo op github)
2. Kopieer de opdrachtbestanden naar de werkmap van je repository
3. Verwijder het bestand `main.py` (dat wordt niet meer gebruikt)
4. Verplaats de `.csv`-bestanden naar de `app`.
5. Verplaats de applicatiebestanden `.py` naar de map `/app`
6. Maak in de map `app` een nieuwe map met de naam `modules`
7. Plaats de module `flits_modules/dbc.py` in de map `modules`

Als het goed is ziet je map-structuur er nu zo uit:
``` shell
docker_python
	| app
		| cameras.csv
		| fines.csv
		| flashed.csv
		| licenses.csv
		| modules
			| dbc.py
		| opdracht.py
````
8. Start de docker containers met `docker compose up`
9. Ga naar `localhost:8082` en log in met `root/secret`
10. Maak een nieuwe database aan met de naam `rdw`
11. Selecteer de tap `SQL` voor de nieuwe database voor de inhoud van `project_flits_v2/db/flits.sql` uit
12. Start de python container om de benodigde scripts aan te kunnen passen `docker exec -it -u appuser docker_python-app-1 bash`
13. Zorg ervoor dat alle modules die nodig zijn worden geinstalleerd (zie requirements.txt)
	* Installeer modules met `pip install ....`
	* Pas `opdracht.py` aan en zorg er voor dat de import regel verwijst naar de module dbc in de map modules: `from modules import dbc`
14. Volg de instructies in `opdracht.py`
15. TIP: Met de `keuze = 0` worden de gegevens vanuit de .csv-files overgezet naar de database.

:::

::: section
### Proefexamen

#### Project Superduper

* Download de behoefte-analyse voor het [project superduper](/_assets/python/behoefte-analyse_proefexamen_superduper.docx).
* Download de (gedeeltelijke) applicatie. [Projectbestanden superduper](/_assets/python/superduper2.zip)
* Maak een [stroomdiagram](/_assets/python/activiteiten_diagram.docx) voor het bouwen van de applicatie.
* Pas opdracht.py aan, zodat de werking van de applicatie voldoet aan de opdracht

{% video "videoseries?list=PLBtXOV0WuE_E9pWd45goHHqxGe2yemBoP" %}


:::


