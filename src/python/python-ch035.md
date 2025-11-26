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
    * Een [stroomdiagram](https://static.edutorial.nl/python/activiteiten_diagram.docx) om de activiteiten op volgorde weer te geven.

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
### Warmred
#### Opdrachten
* Download de behoefte-analyse voor het [project Warmred](https://static.edutorial.nl/python/proefexamen_warmred.docx)
* Maak een [stroomdiagram](https://static.edutorial.nl/python/activiteiten_diagram.docx) om de activiteiten op volgorde weer te geven
* [Voorbeeld stroomdiagram](https://static.edutorial.nl/python/python_stroomschema.pdf)
* Gebruik [deze bestanden](https://static.edutorial.nl/python/apachelog_v2.zip) om een tool te maken volgens de beschrijving in de behoefte-analyse.
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
* Download de behoefte-analyse voor het [project flitspaal](https://static.edutorial.nl/python/proefexamen_flitspaal_v2.docx).
* Download de (gedeeltelijke) applicatie. [Projectbestanden flitspaal](https://static.edutorial.nl/python/project_flits_v2.zip)
* Maak een [stroomdiagram](https://static.edutorial.nl/python/activiteiten_diagram.docx) voor het bouwen van de applicatie.
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

* Download de behoefte-analyse voor het [project superduper](https://static.edutorial.nl/python/behoefte-analyse_proefexamen_superduper.docx).
* Download de (gedeeltelijke) applicatie. [Projectbestanden superduper](https://static.edutorial.nl/python/superduper2.zip)
* Maak een [stroomdiagram](https://static.edutorial.nl/python/activiteiten_diagram.docx) voor het bouwen van de applicatie.
* Pas opdracht.py aan, zodat de werking van de applicatie voldoet aan de opdracht

{% video "videoseries?list=PLBtXOV0WuE_E9pWd45goHHqxGe2yemBoP" %}


:::


