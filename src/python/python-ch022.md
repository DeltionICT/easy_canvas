---
title: Installatie
date: 2026-01-26
---


::: section
### {{title}}
In dit onderdeel vind je uitleg over het installeren van een ontwikkelomgeving voor Python. Daarnaast worden de basis programmeer principes van python uitgelegd. 
Om in deze cursus met python te kunnen programmeren heb je het volgende nodig:
* Docker Desktop
* Visual Studio Code
* Python 3.xx
* Git en github
* MariaDB of MySQL
:::

::: section
### Docker Desktop
Het installeren van Docker Desktop op Windows is tegenwoordig een stuk eenvoudiger dankzij **WSL 2** (Windows Subsystem for Linux). Dit zorgt ervoor dat Docker razendsnel en efficiënt werkt op je systeem.

##### Stappenplan voor installatie
##### Stap 1: Virtualisatie controleren
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
* Open PowerShell en ga naar de map waar je main.py bestand staat. `cd c:\school\info\main.py`
* Start een container met python: `docker run -it --rm -v "${PWD}:/app" -w /app python:3 /bin/bash`
* Type nu: `python main.py` Als het goed is zie je nu `hello world` staan op het scherm!
* Installatie is gelukt!!

> TIP: Als powershell geen scripts kan uitvoeren, dan moet je de security policy aanpassen, dat doe je zo: `Set-ExecutionPolicy -ExecutionPolicy Unrestricted`

#### Testen of het werkt

In [deze handleiding voor het installeren van Docker op Windows](https://www.youtube.com/watch?v=yv3Hv_K0fpc) zie je stap voor stap hoe je WSL 2 activeert en de software correct instelt.

#### Easy python
*  Aangezien dit.. `docker run -it --rm -v "${PWD}:/app" -w /app python:3 /bin/bash` nogal een lang commando is...
* Is er een batch-file (executable) van gemaakt die je makkelijk kan opstarten.
* [Download ](https://github.com/DeltionICT/python_exec/archive/refs/heads/main.zip)
:::

::: section
### Visual Studio Code
Om te beginnen met programmeren in Python met Visual Studio Code (VS Code), heb je een paar essentiële onderdelen nodig. VS Code is van zichzelf namelijk een tekstverwerker; om het echt slim te maken voor Python, moeten we een paar extra zaken toevoegen.

#### Wat heb je nodig?

1. **De VS Code Installer:** De editor zelf.
2. **De Python Interpreter:** Die heb je in het vorige hoofdstuk geïnstalleerd met Docker.
3. **De Python Extensie:** Een plug-in voor VS Code die zorgt voor foutcontrole en hulp bij het typen.

#### Stap 1: Visual Studio Code installeren

* Ga naar [code.visualstudio.com](https://code.visualstudio.com/).
* Download de versie voor jouw besturingssysteem (Windows, macOS of Linux) en voer de installatie uit.

#### Stap 2: De Python Extensie toevoegen

Nu gaan we VS Code "leren" wat Python is.

* Open Visual Studio Code.
* Klik aan de linkerkant op het icoontje met de vierkantjes (de **Extensions Marketplace**).
* Typ bovenin de zoekbalk: `Python`.
* Zoek de extensie van **Microsoft** en klik op **Install**.

#### Stap 3: Je eerste script maken

* Ga naar `File` > `New Text File`.
* Sla het bestand direct op (Ctrl+S) als `hallo.py`. De extensie **.py** is essentieel.
* Typ de volgende code:

```python
print("Hallo python!")

```
* Sla je het bestand op

#### Stap 4: De code uitvoeren

* Ga naar het menu `terminal` en start een nieuwe terminal
* In het terminal-venster start je een docker-container met python: `docker run -it --rm -v "${PWD}:/app" -w /app python:3 /bin/bash`
* Voer de code uit met: `python hallo.py`
:::

::: section
### Git en github
* Kies de juiste installer en installeer [Git](https://git-scm.com/install/)
:::

::: section
### Opdrachten
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
:::