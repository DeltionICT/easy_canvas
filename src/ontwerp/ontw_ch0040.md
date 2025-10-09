---
title: Technisch ontwerp
date: 2025-09-30 
---

::: section
### {{ title }}

Het Technisch Ontwerp, of *Technical Design*, beschrijft **hoe** de functionaliteit die in het FO is vastgelegd, daadwerkelijk zal worden gebouwd, geïmplementeerd en onderhouden.

Het TO is de gedetailleerde handleiding voor de **ontwikkelaars** en de **technische beheerders**. Het vertaalt de eisen van de gebruiker naar een concrete, technische oplossing.

#### Doel van het Technisch Ontwerp

Vertaalslag: Van "Wat" naar "Hoe":
* **Welke architectuur** gebruiken we (bijvoorbeeld: microservices (api), gelaagde architectuur)?
* **Welke programmeertaal** en frameworks (bijvoorbeeld: Laravel, Django, React) worden ingezet?
* **Hoe** communiceren de verschillende softwarecomponenten met elkaar?
* **Hoe** ziet de database-structuur eruit (database-schema ERD)?

#### Onderdelen van een Technisch Ontwerp

Een TO is veel technischer dan een FO en bevat vaak diagrammen uit UML (zoals **klassediagram** of **ERD's**) en andere technische documentatie:

* **Applicatie-Architectuur:** De opbouw van de software in lagen en modules (klassediagram).
* **Datamodel / Database-Ontwerp:** Schematische weergave van alle tabellen, velden en relaties (ERD)
* **Interfaces en API-specificaties:** Hoe het systeem communiceert met andere systemen (Swagger).
* **Installatie- en Deploymentprocedures:** Hoe de software wordt uitgerold naar de test- en productieomgeving.

:::

::: section
### Klassediagram

#### Duidelijke structuur van het systeem  
* Een klassediagram toont welke klassen er zijn, welke eigenschappen ze hebben en hoe ze met elkaar verbonden zijn.  
* Dit helpt ontwikkelaars om te begrijpen hoe data wordt beheerd en verwerkt.

#### Ondersteunt Object-Georiënteerd Ontwerp (OOD)  
* Het laat encapsulatie, overerving en polymorfisme zien, wat essentieel is voor goed gestructureerde en herbruikbare code.
* Ontwikkelaars kunnen hiermee een duidelijk objectmodel opzetten voordat ze beginnen met coderen.

#### Beter beheer van relaties en afhankelijkheden  
* Het diagram maakt onderscheid tussen:
  * Associatie (standaard relatie tussen objecten),
  * Aggregatie (een object bevat een ander, maar ze kunnen onafhankelijk bestaan),
  * Compositie (een object bevat een ander, en ze zijn afhankelijk van elkaar),
  * Generalizatie (overerving) (een subklasse erft eigenschappen en methoden van een superklasse).
* Dit voorkomt te sterke afhankelijkheden, wat onderhoud en uitbreidingen makkelijker maakt.

#### Efficiënte communicatie tussen teams  
* Ontwikkelaars, architecten en testers kunnen het klassediagram gebruiken als gemeenschappelijke taal.
* Stakeholders kunnen snel zien hoe het systeem is opgebouwd zonder in de code te duiken.

#### Ondersteunt database-ontwerp  
* Klassediagrammen helpen bij het ontwerpen van de relationele database door inzicht te geven in entiteiten en hun relaties.
* Kan direct worden vertaald naar databasestructuren (tabellen, sleutels en relaties).

#### Makkelijk uitbreidbaar en onderhoudbaar  
* Door een duidelijke class-based architectuur is het eenvoudiger om later functionaliteiten toe te voegen of te wijzigen zonder het hele systeem te herschrijven.
* Vergemakkelijkt refactoring en modulariteit van code.

Een School heeft Docenten en Studenten.  
* Een Docent kan meerdere Studenten begeleiden (associatie) 
* Een Student heeft meerdere Vakken (aggregatie, want vakken bestaan ook zonder student) 
* Een Vak heeft een Lesmateriaal, dat er altijd bij hoort (compositie) 
* Docent en Student erven van de klasse Persoon (generalisatie)
* Overerving (inheritance) → `Persoon` wordt geërfd door `Docent` en `Student`
* Associatie → `Docent` begeleidt `Student`
* Aggregatie → `Student` volgt `Vak` (vakken kunnen onafhankelijk bestaan)
* Compositie → `Vak` bevat `Lesmateriaal` (lesmateriaal hoort onlosmakelijk bij een vak)

<img src="https://static.edutorial.nl/projecten/classdiagram.svg" alt="classdiagram voorbeeld" style="width:20%">

:::

::: section
### ERD
Een relationele database is gebaseerd op een zgn. relationeel model. Door dit model toe te passen zorg je ervoor dat gegevens gestructureerd en genormaliseerd worden opgeslagen. Dit betekent:
* Alleen relevante gegevens worden opgeslagen
* Gegevens worden maar 1 keer opgeslagen (geen redundantie!)
  * Als een klant verhuist, hoef je maar in 1 tabel het adres te wijzigen!
* Gegevens zijn consistent
  * In een bestelsysteem hoort een bestelling altijd bij een klant. Zonder klant kun je geen bestelling hebben. 
* Gegevens zijn betrouwbaar
  * Denk aan je bankrekening. Je hebt liever niet dat anderen jouw geld uitgeven door een probleem in de database.
  

#### Sleutels
Tabellen hebben sleutelvelden. Een sleutelveld identificeert een record. De waarde van een sleutel kan maar 1 rij data behoren. Een klantnummer is uniek voor iedere klant. Hierdoor kun je klanten niet door elkaar halen!
* Primaire sleutel (primary key)
  * Deze sleutel is uniek voor ieder record in de tabel
* Vreemde sleutel (foreign key)
  * Deze sleutel is een verwijzing naar de primaire sleutel in een andere tabel. 
* Kandidaatsleutel
  * Deze sleutel is een wel een unieke waarde, maar niet de primaire sleutel. Bijvoorbeeld je emailadres is uniek voor jou, maar je krijgt toch een klantnummer!
* Gecombineerde sleutels
  * Deze sleutels bestaan uit meerdere velden. Individueel zijn de waarden niet uniek, maar als je ze combineert wel!

#### Relaties
Door een sleutel uit een tabel in een andere tabel op te nemen creëer je een relatie. 
In onderstaand voorbeeld zie je dat het id van de presentator 'presid' is opgenomen in de tabel programma, zodat we weten wie het programma presenteert.

Er zijn 2 type relaties:
* 1-op-meer relaties
  * Bestellingen horen bij één klant, maar een klant kan meerdere bestellingen hebben.
* meer-op-meer relaties
  * Bij een film zijn meerdere acteurs betrokken, maar acteurs spelen ook in meerdere films.

Het Entity-Relationship Diagram (ERD) is het datamodel voor het ontwerpen van databases. De minimale informatie die je in elk ERD moet terugvinden is:
* Naam van de tabellen
* Primaire sleutel
* Relatie tussen de tabellen en de kardinaliteit (1-op-meer)

[In dit artikel op Medium](https://medium.com/@callista.m.azizah/crows-foot-erd-for-beginners-a-tutorial-1effc8a326c6) wordt verder ingegaan op het maken van ERD's volgens de crow's foot notatie.

![ERD Radiozenders](/_assets/ontwerpen/radiozenders.png)
:::