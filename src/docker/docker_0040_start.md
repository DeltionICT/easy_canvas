---
title: Docker toepassen
date: 2025-08-25
---

::: section
### {{ title }}

**Installatie Docker voor Windows:**  
Docker maakt gebruik van Linux. In Windows 11 kun je gebruik maken van [Windows Subsysteem voor Linux](https://learn.microsoft.com/nl-nl/windows/wsl/about). Hiermee kun je naast windows ook gebruik maken van Linux. Docker kan samenwerken met WSL. Om Docker te installeren moet je dus eerst WSL(2) installeren.

* [Installatie windows op docker.com](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Installeer Docker voor WSL2-backend](https://learn.microsoft.com/en-us/windows/wsl/install)

**Installatie Docker voor Mac:**  
Het macintosh besturingssysteem is gebaseerd op Unix (FreeBSD). Docker kan hierop draaien. Je kunt dus direct aan de slag met het installeren van Docker Desktop.

**Installatie Docker voor Linux:**  
Installeer op Linux de docker desktop omgeving. Docker is gebaseerd op Linux, dus installatie is eenvoudig. Er zijn echter 2 versies. Je kunt docker engine installeren en docker desktop. Docker desktop geeft ook een grafische interface. Om zaken simpel te houden is het advies om alleen Docker Desktop te installeren.

#### Images voor gebruik op school 
[docker_python](https://github.com/siewers32/docker_python)
* Python
* MariaDB
* PHPMyAdmin

[docker_python_postgres](https://github.com/siewers32/docker_python_postgres)
* Python
* Postgres
* Adminer

[docker_just_php](https://github.com/siewers32/docker_just_php)
* Alleen PHP

:::

::: section
### Docker images
Als je docker desktop hebt geinstalleerd kun je gebruik maken van de grafische interface, maar hier gebruiken we de docker-cli. Dit programma werkt in de terminal.
Om je eerste image te downloaden en een container op te starten type je de volgende regel in je favoriete terminal app (powershell of bash of terminal op mac):

```shell
docker run hello-world
```
* Je ziet nu heel even dat een image wordt gedownload
* Er wordt een container gestart
* `Hello World` wordt weergegeven op het scherm
* De container is weer gestopt en je kijkt naar de prompt in je terminal

```shell
docker run -it ubuntu bash
```
Met docker run maak je nu opnieuw een container. Met de argumenten -ti maak je de container interactief. Je start de container nu op ubuntu wordt geladen en het programma `bash` wordt gestart. Verschil met `hello-word` is dat door de toevoeging `-ti` de container blijft draaien. 
* De `ubuntu:latest` image wordt gedownload
* Er wordt een container opgestart
* Je zit naar een terminal-prompt te kijken zoals hieronder
* Als je het commando ls intypt zie je de inhoud van het startup-volume van een ubuntu server

```shell
root@24d8a14bb475:/# ls
bin  boot  dev  etc  home  lib  lib64  media  ...
```
:::

::: section
### Dockerfile
Tot nu toe heb je steeds gebruik gemaakt van standaard images die verkrijgbaar zijn op [docker hub](https://hub.docker.com).
Hier kun je talloze images vinden die je vrij kunt gebruiken voor projecten.
Meestal maak je gebruik van een bestaand image om het vervolgens aan te passen naar je eigen wensen.
Dit doe je met een `Dockerfile`. Dockerfile is de naam van een simpel tekst-bestand dat je kunt vullen met instructies voor docker.  
Doe het volgende:
* Open een terminal
* Maak een nieuwe directory (=map) met `mkdir mijnmap`
* Navigeer naar die map `cd mijnmap`
* Maak een leeg tekst-bestand aan `touch Dockerfile`
* Gebruik een teksteditor om `Dockerfile` aan te passen (bijv. nano of notepad++)

```shell 
FROM ubuntu:latest
RUN apt-get update && apt-get install -y apache2
COPY index.html /var/www/html/index.html
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
```
* Maak nog en tweede bestand in dezelfde map -> `index.html` met de tekst: `<h1>Message from container</h1>`
* Maak het image van de Dockerfile

```shell
$ docker build -t deltion/apachetest .

```
* Docker zoekt automatisch naar de Dockerfile
* De instructies worden uitgevoerd: 
    * Ubuntu:latest wordt gedownload
    * `apt-get` wordt uitgevoerd om apache webserver te downloaden
    * Het bestand `index.html` wordt vanaf je host naar de image gekopieerd `/var/www/html/index.html`
    * De image wordt gestart in detached mode (in de achtergrond). Verwarrend is dan "FOREGROUND", maar dat is omdat de container anders meteen weer zou worden gestopt.
    * Nu kun je de image maken met het build command: `docker build -t deltion/apachetest`
* Je hebt nu een image met een apache webserver en een html-file. Om een container op te starten op basis van je nieuwe image gebruik je het volgende commando:
* `docker run -p 8084:80 deltion/apachetest .` (en vergeet die punt niet aan het eind!!)
* Als het goed is heb je nu een webserver opgestart die je met een browser vanaf je host kunt benaderen met `http://127.0.0.1:8084/`
* De opstelling is helemaal geslaagd als je ook nog `Message from container` in je browserscherm ziet staan.
:::


::: section
### Docker compose
Het is handig om voor verschillende processen aparte Docker-images en een `docker-compose.yml` te gebruiken, omdat je zo je applicatie in onafhankelijke onderdelen opdeelt. Dit principe heet **microservices**.  
Elk proces, zoals je PHP webserver en je database, heeft zijn eigen unieke taak en afhankelijkheden. De PHP-webserver heeft Apache of Nginx nodig en de PHP-code, terwijl de database PostgreSQL of MySQL en de dataopslag nodig heeft.
* **Zonder Docker:** Je installeert en configureert alles op dezelfde machine. Dit kan leiden tot conflicten tussen de software en het is moeilijk te beheren.
* **Met Docker:** Je bouwt één image voor je PHP-webserver en een aparte image voor je database. Elke image is gespecialiseerd in één taak en bevat alleen de bestanden die daarvoor nodig zijn. Je kunt de database bijvoorbeeld updaten zonder je PHP-webserver te verstoren. Dit maakt het systeem **stabieler** en **gemakkelijker te onderhouden**.

Door je project op te splitsen in aparte services, is het eenvoudiger voor meerdere mensen om aan verschillende onderdelen te werken. Ook is het makkelijker om de applicatie te testen en te implementeren.

#### De rol van `docker-compose.yml`

Het `docker-compose.yml` bestand brengt al deze losse onderdelen samen. Zie het als een **recept** voor je hele applicatie. Je definieert daarin welke services je nodig hebt (bijvoorbeeld `php-app` en `db`), welke images ze moeten gebruiken en hoe ze met elkaar moeten communiceren.

**Voorbeeld met PHP en PostgreSQL:**

1.  **php-app service:** Deze service gebruikt een image die je PHP-webserver en code bevat. Het luistert op poort 8080 naar binnenkomende verzoeken.
2.  **db service:** Deze service gebruikt de `postgres` image. Het beheert de database en is alleen toegankelijk voor de `php-app` service via het interne Docker-netwerk.

Het `docker-compose.yml` bestand zorgt ervoor dat wanneer je het commando `docker-compose up` uitvoert, beide services tegelijkertijd starten en automatisch met elkaar worden verbonden in hetzelfde netwerk. Zo werken je webapplicatie en database samen alsof ze op dezelfde machine draaien, maar dan zonder de nadelen van een gedeelde omgeving.

Als je deze opzet wil installeren op je eigen laptop, doe dan het volgende:
* Open een terminal
* Maak een nieuwe map aan voor je project `mkdir mijnproject`
* Ga in de map staan: `cd mijnproject`
* Maak de Dockerfile
* Maak de docker-compose.yml

De structuur ziet er nu zo uit:

```shell
mijnproject/
├── php-app/
│   └── index.php
├── docker-compose.yml
└── Dockerfile
```
#### Maak de Dockerfile

```shell
# Dockerfile
# Gebruik een officiële PHP-image met Apache als basis
FROM php:8.3-apache

# Kopieer de bestanden van je applicatie naar de webserver
COPY php-app/ /var/www/html/

# Installeer de nodige PHP-extensies, inclusief de PostgreSQL-driver
RUN docker-php-ext-install pdo pdo_pgsql
```
#### Maak de docker-compose.yml

```yml
# docker-compose.yml

version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    volumes:
      - ./php-app:/var/www/html
    depends_on:
      - db
    
  db:
    image: postgres:17-alpine
    restart: always
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "secret!"
      POSTGRES_DB: "my_database"
    volumes:
      - ./db_data:/var/lib/postgresql/data
```

#### Start de containers
Gebruik `docker compose up`
* De `docker-compose.yml` wordt gelezen en uitgevoerd:
    * web: Er wordt een image gemaakt op basis van de `Dockerfile`
    * Bij het opstarten van de applicatie wordt poort `8080` bereikbaar gemaakt voor de host. M.a.w. met `http://127.0.0.1:8080` beriek je de webserver
    * De map `./php-app` wordt gekopieerd naar `/var/www/html` in de container
    * db: Er wordt een image gedownload met de naam `postgres:17-alpine`
    * Er worden namen en wachtwoorden ingesteld.
    * Er wordt een `volume` aangemaakt in je projectmap met de naam `db_data`
    * De gegevens uit `/var/lib/postgresql/data` worden daarin opgeslagen. Hierdoor kun je de data die de database-server gebruikt blijvend bewaren. Als je dit niet zou doen, ben je na iedere herstart al je data weer kwijt uit de database.

#### Stop de containers
`docker compose down -v`

#### Overige commando's
* Bekijken welke containers op dit moment actief zijn op je computer met `docker ps`
* De terminal van een draaiende webserver starten met `docker exec`
Om de terminal van de webserver te bekijken zoek je de naam (of id) op van de container waarin de webserver draait en start je `bash`

:::

::: section
### Commands

Om docker te bedienen maak je gebruik van de docker-cli. Als je Docker desktop installeert krijg je deze applicatie erbij op je systeem. Met de docker-cli kun je commando's sturen naar de docker deamon. Je start de docker-cli in een terminal

**Locaties waar je uitbreide docker instructies kunt vinden:**
* [Starten met Docker](https://docs.docker.com/get-started/get-docker/)
* [Docker Cheat Sheet](https://docs.docker.com/get-started/docker_cheatsheet.pdf)
* [Cheatsheet from Nikoo Asadnejad](https://github.com/Nikoo-Asadnejad/Docker-Commands-Cheat-Sheet)

#### Veel gebruikte commando's zijn
* `docker compose up` en `docker compose down -v` (zie docker compose)
* `docker exec -t <id van de container> bash` om een bash-terminal te openen zodat je een draaiende container kunt bedienen.
* `docker ps` om alle draaiende containers weer te geven

```shell
$ docker ps

CONTAINER ID   IMAGE                 PORTS                                         NAMES
a0e7ee749dc2   deltion/apachetest    0.0.0.0:8084->80/tcp,   [::]:8084->80/tcp     focused_heisenberg
ee73e0982163   alpine/psql                                                         gracious_banach
3e446b9d2df8   adminer:latest        0.0.0.0:8083->8080/tcp, [::]:8083->8080/tcp   adminer
e2be9d9d4140   python-postgres-app                                                 python-postgres-app-1

$ docker exec -it a0e7ee749dc2 bash

root@a0e7ee749dc2:/# 
```
:::


