---
title: Installatie
date: 2025-08-21
---

# {{ course_title }}

## {{ title }}

> #### Installatie bestanden
> **Python en MariaDB**. 
> * De installatiebestanden staan op github.
> [Docker images met python en mariadb](https://github.com/siewers32/docker_python)
> * Lees de README.md met uitleg over het installeren van de verschillende images.
>   
> Voor sommige toepassingen kun je gebruik maken van postgres in plaats van mariadb. Beide zijn relatieve SQL-databases.  
>   
> **Python en Postgres**
> * Installatiebestanden op github [Docker images met python en postgres](https://github.com/siewers32/docker_python_postgres)
> * Lees de README.md met uitleg over het installeren van de verschillende images.


#### Installatie Docker voor Windows:
Docker maakt gebruik van Linux. In Windows 11 kun je gebruik maken van [Windows Subsysteem voor Linux](https://learn.microsoft.com/nl-nl/windows/wsl/about). Hiermee kun je naast windows ook gebruik maken van Linux. Docker kan samenwerken met WSL. Om Docker te installeren moet je dus eerst WSL(2) installeren.

* [Installatie windows op docker.com](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Installeer Docker voor WSL2-backend](https://learn.microsoft.com/en-us/windows/wsl/install)

#### Installatie Docker voor Mac:
Het macintosh besturingssysteem is gebaseerd op Unix (FreeBSD). Docker kan hierop draaien. Je kunt dus direct aan de slag met het installeren van Docker Desktop.

#### Installatie van een database

**Installatie MariaDB**
Als docker is opgestart met `docker compose up` kun je gebruik maken van PHPMyAdmin.   
In docker-compose.yml vind je ergens de definitie van de PHPMyAdmin image. Kijk bij `ports`:

```python
    ports:
      - "8080:80"
```
Hieraan zie je dat de image zelf intern poortnummer 80 gebruikt, maar naar buiten toe (naar jouw host) is dat 8080.  
Dit betekent dat je met `http://127.0.0.1:8080` gebruik kunt maken van phpmyadmin.
Zoek naam en password op in de docker-compose.yml file om in te loggen.

**Installatie Postgres**.
* Lees het README.md bestand in de repository [docker python postgres](https://github.com/siewers32/docker_python_postgres)
* Je vind poortnummer in docker-compose.yml
