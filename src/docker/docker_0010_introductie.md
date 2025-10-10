---
title: Introductie
date: 2025-08-25
leerdoelen:
  - titel: Basis leerdoelen
    items:
      - Docker installeren en configureren. Je bent in staat om Docker Desktop (of de juiste Docker-engine voor jouw besturingssysteem) te installeren, te configureren en de basisfunctionaliteit te verifiëren.
      - Werken met images en containers. Je kunt een Docker image ophalen uit een registry (zoals Docker Hub), een container opstarten, stoppen en verwijderen.
      - Eigen images bouwen. Je kunt een eenvoudige Dockerfile schrijven om je eigen applicatie te containeriseren.
      - Poorten en volumes. Je leert hoe poorten te mappen tussen de host en de container en hoe data persistent te maken door volumes te gebruiken.
  - titel: Gespecialiseerde doelen
    items:
      - Ontwikkelworkflow. Je kunt Docker integreren in een ontwikkelworkflow, inclusief het opzetten van een ontwikkelomgeving voor een specifieke taal of framework.
      - Docker in CI/CD. Je begrijpt hoe een continuous integration/continuous deployment (CI/CD) pipeline kan worden opgezet met Docker, waarbij images automatisch worden gebouwd en getest na elke code commit.
      - Microservices. Je kunt een simpele microservices architectuur opzetten met behulp van Docker Compose, waarbij verschillende services in aparte containers draaien.
  - titel: Beveiliging
    items:
      - Beveiliging. Je leert over de basisprincipes van Docker security, zoals het gebruik van non-root gebruikers, het scannen van images op kwetsbaarheden en het configureren van resource-limieten.
      - Docker in productie. Je hebt inzicht in het draaien van Docker containers in een productieomgeving, inclusief het gebruik van orchestration tools zoals Docker Swarm of een introductie tot Kubernetes concepten.
      - Monitoring en logging. Je bent in staat om de logs en metrics van containers te verzamelen en te analyseren, en kunt tools gebruiken om de gezondheid van containers en de onderliggende host te monitoren.

---


 ::: section
### {{ title }}
Docker verpakt je applicatie en al zijn afhankelijkheden (zoals databases, bibliotheken en de juiste besturingssysteemversie) in een geïsoleerde container. Dit zorgt ervoor dat je applicatie consistent en betrouwbaar draait, of het nu op jouw laptop, de machine van je collega of op een productie server is.
Het werken met Docker en containers wordt steeds meer toegepast in ict-omgevingen en is relevant voor iedere ict-er en software-ontwikkelaar.
  
Hoewel ICT-engineers en softwareontwikkelaars verschillende beroepspaden bewandelen, krijgen ze in hun werk beide te maken met virtualisatie en containers. Deze cursus biedt een praktische introductie tot Docker, een krachtig platform dat het mogelijk maakt om applicaties te verpakken in containers.

#### Wat is Docker en waarom is het belangrijk?
Docker vereenvoudigt de manier waarop je software bouwt, deelt en uitvoert. Traditionele virtualisatietechnieken zoals virtuele machines (VM's) zijn vaak zwaar en traag. Docker-containers zijn daarentegen licht en efficiënt. Ze bundelen een applicatie en al haar afhankelijkheden – zoals bibliotheken en configuratiebestanden – in een geïsoleerde omgeving. Dit zorgt ervoor dat een applicatie overal hetzelfde werkt, of het nu op je laptop is, op een server in de cloud, of in een testomgeving. Deze consistentie lost het klassieke probleem op van "het werkt op mijn machine, maar niet op de jouwe."

:::

::: section
### Leerdoelen
#### ICT system engineer (Crebonr. 27016, MBO niveau 4)
*   Heeft kennis van virtualisatie- en containerisatietechnieken.
*   De ICT system engineer heeft daarnaast nog specialistische kennis van fysieke of virtuele infrastructuurdevices en veelgebruikte cloudomgevingen. Docker is een essentieel hulpmiddel in deze virtuele en cloudomgevingen.
*   ICT Engineers hebben een proactieve rol bij het zorgen voor stabiliteit en continuïteit en de veiligheid van (onderdelen van) de infrastructuur, waarbij het beheren en/of bouwen van complexere infrastructuren aan bod komt. Containers dragen bij aan deze proactieve benadering.
*   Bij het automatiseren in netwerken en infrastructuren, spelen Docker en container-orchestratie tools een grote rol.

#### Software developer (Crebonr. 25998, MBO niveau 4)
*   Van software developers wordt verwacht dat zij brede kennis hebben van ontwikkelingen op het gebied van software-development-tools, zoals DevOps. Docker is een fundamenteel onderdeel van de DevOps-pipeline voor het bouwen, verzenden en uitvoeren van applicaties.
*   De developer moet ook kennis hebben van ontwikkelingen op het vlak van ICT-infrastructuur en devices, zoals '...as a service' (SaaS, IaaS, PaaS) en cloud, en de consequenties hiervan voor software development. Containers zijn de basis voor veel van deze "as a service" oplossingen en cloud-native applicaties.
*   De software kan op verschillende devices draaien en kan betrekking hebben op een complexe (fysieke of virtuele) IT-infrastructuur. Containers bieden een manier om software consistent en geïsoleerd te implementeren over diverse infrastructuren.
*   De rol van de Software developer is ook om processen te automatiseren door middel van software, wat door containerisatie efficiënter kan worden gedaan.

{{ leerdoelen | leerdoelFilter }}

:::


