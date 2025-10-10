---
title: Opdrachten
date: 2025-10-09
---

::: section
### {{ title }}
* Gebruik de docker-file om een Apache server te maken uit deze cursus.
* Gebruik Docker Desktop om te zien of je container nog draait. Zo ja, stop de container dan en start hem daarna weer
* Wat moet je doen als je de container per ongeluk hebt weggegooid?
* En als je de image per ongeluk hebt weggegooid, wat dan?
* Maak zelf een webserver
    * Maak een `index.html` met de tekst `Dat mag je zelf weten!`
    * Gebruik `docker exec` om de pagina aan te passen
    * Check of de veranderingen zijn doorgevoerd door met je browser de webpagina te openen.
    * Stop de container
    * Start de container en ga met je browser naar de website
    * Wat zie je nu?

* Gelukkig zijn er al heel veel `docker-compose.yml` bestanden gemaakt. Je hoeft dus niet steeds het wiel opnieuw uit te vinden. Ga naar [awesome-compose](https://github.com/docker/awesome-compose) en kies minimaal 2 sets met microservices. Installeer en laat zien dat je alle services kunt draaien op je laptop.
* Maak zelf twee microservices voor het verwerken van afbeeldingen
    * De eerste microservice is een website waar je plaatjes kunt uploaden
    * De tweede microservice is een proces dat de plaatjes aanpast naar een ander formaat bijv. 200px x 200px.
* Maak zelf twee microservices voor het converteren van bestanden bijv. csv naar excel
    * De eerste microservice is een website waar je csv-bestanden kunt uploaden
    * De tweede microservice is een proces dat de bestanden converteer naar excel.


:::