---
layout: leerdoelen_layout.njk
title: Leerdoelen
date: 2025-08-25
---



{% section %}

# {{ course_title }}
### {{ title }}

**Aansluiting in de Kwalificatiedossiers:**
1.  **ICT support technician (Crebonr. 27015, MBO niveau 3)**:
    * Heeft kennis heeft van virtualisatie- en containerisatietechnieken.
    * Heeft kennis van nieuwe ontwikkelingen binnen het vakgebied en kan bijdragen aan een constant en optimaal werkende ICT-infrastructuur. Docker en containers zijn hierin belangrijke ontwikkelingen.

2.  **ICT system engineer (Crebonr. 27016, MBO niveau 4)**:
    *   Heeft kennis van virtualisatie- en containerisatietechnieken.
    *   De ICT system engineer heeft daarnaast nog specialistische kennis van fysieke of virtuele infrastructuurdevices en veelgebruikte cloudomgevingen. Docker is een essentieel hulpmiddel in deze virtuele en cloudomgevingen.
    *   ICT Engineers hebben een proactieve rol bij het zorgen voor stabiliteit en continuïteit en de veiligheid van (onderdelen van) de infrastructuur, waarbij het beheren en/of bouwen van complexere infrastructuren aan bod komt. Containers dragen bij aan deze proactieve benadering.
    *   Bij het automatiseren in netwerken en infrastructuren, spelen Docker en container-orchestratie tools een grote rol.

3.  **Software developer (Crebonr. 25998, MBO niveau 4)**:
    *   Van software developers wordt verwacht dat zij brede kennis hebben van ontwikkelingen op het gebied van software-development-tools, zoals DevOps. Docker is een fundamenteel onderdeel van de DevOps-pipeline voor het bouwen, verzenden en uitvoeren van applicaties.
    *   De developer moet ook kennis hebben van ontwikkelingen op het vlak van ICT-infrastructuur en devices, zoals '...as a service' (SaaS, IaaS, PaaS) en cloud, en de consequenties hiervan voor software development. Containers zijn de basis voor veel van deze "as a service" oplossingen en cloud-native applicaties.
    *   De software kan op verschillende devices draaien en kan betrekking hebben op een complexe (fysieke of virtuele) IT-infrastructuur. Containers bieden een manier om software consistent en geïsoleerd te implementeren over diverse infrastructuren.
    *   De rol van de Software developer is ook om processen te automatiseren door middel van software, wat door containerisatie efficiënter kan worden gedaan.

{% endsection %}
{% section_accordeon "Leerdoelen" %}
{% accordeon "Basisconcepten" %}

* Basisconcepten van containerisatie en Docker uitleggen
* Lokaal installeren en configureren van Docker
* Standaardcommando's gebruiken om images en containers te beheren
* Een eenvoudige Dockerfile schrijven

{% endaccordeon %}
{% accordeon "Automatisering en implementatie" %}

* CI/CD-piplines opzetten met bijvoorbeeld Github actions
* Processen automatiseren met scripts (bijv. Python of Powershell of Bash)
* Containers implementeren in cloud-omgevingen

{% endaccordeon %}
{% accordeon "Security in Docker omgevingen" %}

* Fouten en problemen oplossen in docker-omgevingen
* Basale security maatregelen toepassen
* Risico's inschatten met betrekking tot containerbeveiliging

{% endaccordeon %}
{% endsection_accordeon %}
