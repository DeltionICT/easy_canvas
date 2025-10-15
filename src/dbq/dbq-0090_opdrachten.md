---
title: Opdrachten
date: 2025-09-09
---

::: section
### Opdrachten

Hier vind je de oefen-opdrachten die je moet maken om te leren werken met databases, tabellen en queries. Je kunt de opdrachten uitvoeren met behulp van een database-client. We gaan er van uit dat je de benodigde applicaties hebt geinstalleerd. Als je met mysql / mariadb werkt dan kun je werken met phpMyAdmin. Je kunt queries uitvoeren in het tabblad `SQL`.
Bij Postgresql heb je de client Adminer geïnstalleerd. Hierin heb je de optie `SQL Commando's`. 
:::

::: section
### Eenvoudige queries
Gebruik voor onderstaande opdrachten de database `school`
* Geef de query voor een overzicht van de naam en roepnaam van alle cursisten die in Oosterhout wonen.
* Geef de query voor een overzicht van het cursistnummer en de roepnaam van alle cursisten die niet in Oosterhout wonen.
* Geef de query voor een overzicht van alle cursisten die vrouw zijn.
* Geef de query voor een overzicht van alle cursisten die niet man zijn. (dit is een andere query dan de vorige vraag, maar met hetzelfde resultaat)
* Geef de query voor een overzicht van alle cursisten die in Breda wonen en vrouw zijn.
* Geef de query voor een overzicht van alle cursisten die in Oosterhout of Made wonen.
* Geef de query voor een overzicht van alle plaatsen waar cursussen worden gegeven.
:::

::: section
### Aggregeren
Voor onderstaande vragen heb je de database `school` nodig.

* Wat is de hoogste en laagste prijs van alle cursussen?

* Bereken de som van alle bedragen die de cursisten betaald hebben (betaald).

* Wat is het gemiddelde cijfer dat per cursus is behaald? Toon de cursuscode en het gemiddelde cijfer.

* Tel het aantal cursisten per plaats. Toon de plaats en het aantal cursisten.

* Tel hoeveel cursisten er in totaal ingeschreven zijn voor cursussen in de plaats 'Den Haag'.

* Wat is de gemiddelde prijs van cursussen per docent? Toon de doc_code en de gemiddelde prijs.

* Toon de curs_code en het totale aantal cursisten dat is ingeschreven voor cursussen die meer dan 5 cursisten hebben.

* Welke docent heeft het hoogste gemiddelde uurloon van alle docenten die in 'Utrecht' wonen?

* Toon de curs_code en het gemiddelde cijfer van die cursus, maar alleen voor cursussen waarvan het gemiddelde cijfer hoger is dan 7.

* Toon de namen van cursisten die voor meer dan één cursus zijn ingeschreven.
:::

::: section
### Databases maken

Gebruik voor onderstaande opdrachten de database `bibliotheek`. Bekijk op gegevens-opvragen -> databases-maken hoe je de database moet maken.

Voeg onderstaande records toe aan de tabel boeken van de database:
```shell
+----+----------------------------+------+------+
| id | titel                      | jaar | druk |
+----+----------------------------+------+------+
|  1 | De Avonden                 | 1947 |    1 |
|  2 | Het Diner                  | 2009 |    1 |
|  3 | De Ontdekking van de Hemel | 1992 |    1 |
|  4 | De Aanslag                 | 1982 |    1 |
+----+----------------------------+------+------+
```

Voeg onderstaande records toe aan de tabel klanten:
```shell
+----+----------+------------+--------------------------+
| id | voornaam | achternaam | emailadres               |
+----+----------+------------+--------------------------+
|  1 | Jan      | Jansen     | jan.jansen@email.com     |
|  2 | Piet     | Pietersen  | piet.pietersen@email.com |
|  3 | Klaas    | Klaassen   | klaas.klaassen@email.com |
|  4 | Emma     | de Vries   | emma.devries@email.com   |
+----+----------+------------+--------------------------+
```

Voeg onderstaande records toe aan de tabel uitleengegevens:
```shell
+----+--------------+-------------+----------+---------+
| id | uitleendatum | retourdatum | klant_id | boek_id |
+----+--------------+-------------+----------+---------+
|  5 | 2023-01-01   | 2023-01-15  |        1 |       1 |
|  6 | 2023-01-02   | 2023-01-16  |        2 |       2 |
|  7 | 2023-01-03   | 2023-01-17  |        3 |       3 |
|  8 | 2023-12-29   | 2024-01-12  |        4 |       4 |
+----+--------------+-------------+----------+---------+
```

Maak nu het sql-script voor een database met 3 tabellen:
* Voor een autoverhuurbedrijf moet je een database maken
* De tabel auto's bevat gegevens over het merk, kenteken, kilometerstand en aankoopdatum
* De tabel huurders bevat gegevens zoals voornaam, achternaam, rijbewijsnummer, adres, postcode, plaats en geboortedatum.
* De tabel verhuur bevat gegevens over de auto, de datum van verhuur, de verwachte datum waarop de auto wordt ingeleverd en de huurder.
* Gebruik logische namen voor de naam van velden en denk om primaire en vreemde sleutels!
:::

::: section
### CRUD oefeningen
* Maak een nieuwe database aan met de naam 'reisbureau' en voer de queries uit van [dit sql-bestand](https://static.edutorial.nl/projecten/reisbureau_001.sql).
* Als je de postgres-variant gebruikt vind je de database-bestanden in de [siewers32/docker_python_postgres repository](https://github.com/siewers32/docker_python_postgres)
* Geef de query om alle tabellen in de database 'reisbureau' weer te gegeven
* Voeg 2 nieuwe klanten toe aan de tabel 'customers' (je mag de waarden zelf bedenken)
* Geef de query om de eerste 10 boekingen te verwijderen (reservations)
* De klant met id 13 is verhuist naar 'De van der veldensteeg 81' in 'Apeldoorn'. Pas het record aan en geef de query om het record weer te geven. Controleer of de gegevens correct zijn.
:::

::: section
### Tabellen combineren
Maak gebruik van de database `bibliotheek` die je bij het onderdeel 'Database maken' hebt gemaakt.  
Zorg ervoor dat de gegevens correct zijn toegevoegd.  
Maak de queries bij onderstaande vragen:
* Schrijf een query om alle klanten met hun voornaam, achternaam en emailadres te tonen.
* Schrijf een query om de titel, het jaar en de druk van alle boeken te tonen die na het jaar 2000 zijn gepubliceerd.
* Schrijf een query om de voornaam en achternaam van klanten te tonen die een boek hebben geleend in 2023.
* Schrijf een query om de titel van de boeken te tonen die momenteel zijn uitgeleend (retourdatum is nog niet bereikt).
* Schrijf een query om het aantal keren dat elk boek is uitgeleend te tonen, samen met de titel van het boek.
* Schrijf een query om het totale aantal boeken dat in 2022 is uitgeleend te tonen.
* Schrijf een query om de voornaam en achternaam van klanten te tonen die meer dan 3 boeken hebben uitgeleend.
* Schrijf een query om de gemiddelde uitleenperiode (verschil tussen uitleendatum en retourdatum) van alle boeken te berekenen.
* Schrijf een query om alle boeken die na de 3e druk zijn gepubliceerd te tonen.
* Schrijf een query om de klantgegevens van klanten die nog geen enkel boek hebben uitgeleend te tonen.
* Schrijf een query om de 5 meest uitgeleende boeken te tonen, inclusief hun titel en het aantal keer dat ze zijn uitgeleend.
* Schrijf een query om de naam en emailadres van klanten te tonen die een boek met de titel 'De Hobbit' hebben uitgeleend.
* Schrijf een query om de titel van de boeken en de totale uitleenperiode per boek te tonen (het totaal aantal dagen dat elk boek is uitgeleend).
* Schrijf een query om de klant(en) te tonen die het vaakst een boek hebben geleend, samen met het aantal keer dat ze iets hebben geleend.
* Schrijf een query om de titel van boeken te tonen die zowel in 2022 als in 2023 zijn uitgeleend.
:::

::: section
### Verschillende queries
Schrijf de queries voor onderstaande vragen. Maak gebruik van de database `reisbureau`. Je vindt de sql-bestanden voor data en structuur in deze repository: 
* Voor postgres-gebruikers: [Postgres / Adminer repository](https://github.com/siewers32/docker_python_postgres)
* voor mysql-gebruikers: [MariaDB / PHPMyAdmin repository](https://github.com/siewers32/docker_python)

#### Deel 1: De Basis (SELECT en WHERE)
* Toon alle kolommen en rijen van de tabel countries.

* Toon alleen de description van alle landen uit de tabel countries.

* Toon de first_name en last_name van alle klanten uit de tabel customers.

* Zoek de klant met het e-mailadres 'j.smith@example.com'. Toon al hun gegevens.

* Toon alle steden (description) uit de tabel cities die in het land 'da_DK' liggen.

* Toon alle reizen (id) uit de tabel trips die meer dan 5 dagen duren.

#### Deel 2: Sorteren en Limiteren (ORDER BY en LIMIT)
* Toon de id en departure_date van de 10 duurste reizen (price). Sorteer van hoog naar laag.

* Toon de 5 goedkoopste reizen. Sorteer ze op prijs van laag naar hoog.

* Toon de first_name en last_name van alle klanten, gesorteerd op last_name in alfabetische volgorde.

#### Deel 3: Gegevens Groeperen en Aggregeren (COUNT, SUM, AVG, GROUP BY)
* Tel het totale aantal klanten in de tabel customers.

* Bereken de gemiddelde prijs van alle reizen (price).

* Tel hoeveel steden er per land (country_code) zijn. Groepeer het resultaat per land.

* Wat is de gemiddelde prijs van een reis per stad (city_id)? Toon de city_id en de gemiddelde prijs.

* Welke klant heeft de meeste reserveringen? Toon de customer_id en het aantal reserveringen.

* Tel het aantal reizen per stad en filter de resultaten, zodat je alleen steden ziet met meer dan 5 reizen.

#### Deel 4: Gegevens Combineren (JOIN)
* Toon de first_name en last_name van de klant en de description van de stad van de reserveringen. Combineer de tabellen customers, reservations, trips en cities.

* Toon de description van de stad en het aantal dagen (number_of_days) van alle reizen. Combineer de tabellen trips en cities.

* Toon de description van de stad en de description van het land voor elke stad. Combineer de tabellen cities en countries.

* Zoek de klantgegevens (first_name, last_name) en het land (description) van herkomst voor de reservering met id = 112. Combineer de tabellen customers, reservations, countries en trips.

* Toon de description van elke stad en de first_name en last_name van elke klant die een reservering heeft gemaakt voor een reis naar die stad. Zorg ervoor dat je elke stad maar één keer toont, samen met de bijbehorende klantgegevens.
:::