---
title: Installeren
date: 2022-04-02
---


#### {{ title }}

::: section
### MariaDB
MariaDB is een doorontwikkeling van MySQL. Het is een database die bekend staat om zijn **snelheid** en **eenvoud**. Het is heel vergelijkbaar met MySQL, dus als je al ervaring hebt met MySQL, voelt MariaDB direct vertrouwd.

* **Voordelen:**
    * **Snel en lichtgewicht:** Ideaal voor snelle, lees-intensieve webtoepassingen, zoals websites en blogs.
    * **Eenvoudige configuratie:** Makkelijk op te zetten en te beheren, vooral in combinatie met tools zoals phpMyAdmin.
    * **Plug-in opslag-engines:** Je kunt verschillende 'engines' gebruiken die zijn geoptimaliseerd voor specifieke taken. Dit geeft je veel flexibiliteit.
* **Wanneer kiezen:** Kies MariaDB als je een eenvoudige, snelle database nodig hebt voor een website, webapplicatie of CMS-systeem (zoals WordPress). Het is perfect voor projecten waar snelheid en gebruiksgemak voorop staan.

#### Installatie
* [Download Python en MariaDB](https://github.com/siewers32/docker_python)
* Hier vind je de uitleg en instructie voor het installeren van de containers voor Python en MariaDB. Gebruik `git clone` om de repository op je eigen machine te installeren.
* In de opdrachten wordt verwezen naar de [School database](https://static.edutorial.nl/dbq/school.sql). Download het sql-bestand en importeer de sql-code in phpMyAdmin.
:::



::: section
### PostgreSQL
PostgreSQL wordt vaak de "meest geavanceerde open-source database" genoemd. Het is ontworpen met een sterke nadruk op **data-integriteit** en **krachtige functies**. Het is strikter dan MariaDB en volgt de SQL-standaarden heel nauwkeurig.

* **Voordelen:**
    * **Robuust en betrouwbaar:** Garandeert een hoge mate van data-integriteit dankzij strikte regels. 
    * **Ondersteunt complexe queries:** Uitstekend in het verwerken van complexe queries en grote hoeveelheden data, bijvoorbeeld voor data-analyse of business intelligence.
    * **Zeer uitbreidbaar:** Je kunt extra functies toevoegen met "extensies," zoals PostGIS voor het verwerken van geografische data.
* **Wanneer kiezen:** Kies PostgreSQL voor complexe projecten die een hoge mate van betrouwbaarheid vereisen, zoals financiële systemen, geografische informatiesystemen of datawarehouses. Het is de beste keuze voor applicaties waar de integriteit van de data het allerbelangrijkste is.

#### Installatie
* [Download Python en Postgres](https://github.com/siewers32/docker_python_postgres)
* Hier vind je de uitleg en instructie voor het installeren van de containers voor Python en MariaDB. Gebruik `git clone` om de repository op je eigen machine te installeren.
:::

::: section
### Samenvatting
Kort gezegd:
* **MariaDB** is de go-to keuze voor snelle en eenvoudige projecten. Denk aan webdevelopment.
* **PostgreSQL** is de krachtige, robuuste optie voor complexe en bedrijfskritische toepassingen. Denk aan data-analyse.
:::