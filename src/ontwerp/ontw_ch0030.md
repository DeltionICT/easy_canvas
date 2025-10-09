---
title: Functioneel ontwerp
date: 2025-09-30 
---

::: section
### {{ title }}
Het doel van een **Functioneel Ontwerp (FO)** is om in duidelijke taal vast te leggen **wát** een nieuw of aangepast ICT-systeem of applicatie precies moet doen. Zie het als het **contract** of de **bouwtekening** van de functionaliteit, geschreven vanuit het perspectief van de gebruiker.

#### Duidelijkheid en Overeenstemming

Het primaire doel van het FO is om een gedeeld begrip te creëren bij alle betrokkenen (**stakeholders**):

* **Voor de Klant/Product Owner:** Het FO bevestigt dat jullie de wensen en eisen correct hebben begrepen. Het is het document dat de klant ondertekent om akkoord te gaan met de te bouwen functionaliteit.
* **Voor het Ontwikkelteam:** Het FO is de **leidraad** voor het bouwen van de software. Het is het antwoord op de vraag: "Wat wordt er van ons verwacht?"

#### Vastleggen van Functionele Eisen (Het "Wat") 💡

Het FO beschrijft nauwkeurig alle functionaliteiten die de gebruiker nodig heeft om zijn werk te kunnen doen. Het bevat details over:

* **Invoer en Uitvoer:** Welke gegevens het systeem binnenkomen en welke gegevens het produceert (bijvoorbeeld rapporten of meldingen).
* **Processen en Workflows:** Hoe de gebruiker door het systeem navigeert om een taak te voltooien (vaak gevisualiseerd met een **Activity Diagram**).
* **Gebruikersinterface (UI):** Hoe de schermen eruitzien en werken (vaak met **Wireframes**).
* **Rollen en Rechten:** Wie toegang heeft tot welke functies (bijvoorbeeld: een 'Beheerder' mag meer dan een 'Gebruiker').
* **Regels:** De bedrijfslogica en berekeningen die het systeem moet toepassen.

#### Basis voor het Technisch Ontwerp

* **FO (Wat):** Vraagt: "Wat moet de knop 'Betalen' doen?"
* **TO (Hoe):** Vraagt: "Hoe programmeren we de knop 'Betalen'? Welke programmeertaal, welke database en welke code-architectuur gebruiken we daarvoor?"

Zonder een duidelijk en goedgekeurd FO, kan het ontwikkelteam niet efficiënt beginnen met het **technisch ontwerp** en de daadwerkelijke bouw (coderen).

#### Referentie en Controle

* **Tijdens de Ontwikkeling:** Het FO wordt gebruikt om te controleren of de gebouwde software voldoet aan de oorspronkelijke afspraken (**testen**).
* **Na Oplevering:** Het dient als naslagwerk voor de gebruikers, functioneel beheerders en toekomstige ontwikkelaars die het systeem moeten **onderhouden** of **uitbreiden**.


:::

::: section
### Userstories
Een user story is een korte, eenvoudige beschrijving van een functie of behoefte, gezien vanuit het perspectief van de eindgebruiker. Het helpt teams te begrijpen wat er moet worden ontwikkeld en waarom. Een typische user story wordt geformuleerd als:

> Als [type gebruiker] wil ik [doel of actie] zodat [reden of voordeel].

Bijvoorbeeld:
> Als student wil ik mijn opdrachten kunnen inleveren via een online portal zodat ik feedback kan krijgen van mijn docent.

#### Waarom gebruik je user stories?
1. **Gebruikersgericht werken** – Het dwingt ontwikkelaars om zich te focussen op de echte behoeften van gebruikers.
2. **Communicatie verbeteren** – Teams (ontwikkelaars, product owners, stakeholders) kunnen sneller afstemmen.
3. **Flexibiliteit** – User stories zijn makkelijk aanpasbaar bij veranderende behoeften.
4. **Beter testen en accepteren** – Ze helpen bij het opstellen van acceptatiecriteria, die gebruikt kunnen worden voor testen.


#### Testen

Om te testen of je code voldoet aan een user story, doorloop je de volgende stappen:

#### Definieer acceptatiecriteria
Bij elke user story horen **acceptatiecriteria**. Dit zijn concrete voorwaarden waaraan de implementatie moet voldoen.

Voorbeeld acceptatiecriteria voor bovenstaande user story:
- De student kan succesvol een bestand uploaden via het portal.
- De docent kan het ingeleverde werk bekijken en voorzien van feedback.
- Er verschijnt een foutmelding als een bestand groter is dan 10MB.

#### Code testen
Je kunt geautomatiseerde tests schrijven die controleren of de functionaliteit werkt zoals verwacht (unit-testing).

Bijvoorbeeld in **Python met pytest**:

```python
def test_file_upload():
    response = upload_file("test_document.pdf")
    assert response.status_code == 200
    assert response.json()["message"] == "Bestand succesvol geüpload"

def test_large_file_rejection():
    response = upload_file("large_document.pdf")  # >10MB
    assert response.status_code == 400
    assert "Bestand te groot" in response.json()["error"]
```
of in PHP met PHPUnit

```php
<?php
use PHPUnit\Framework\TestCase;

require 'upload.php';

class FileUploadTest extends TestCase {
    public function testFileUpload() {
        $mockFile = [
            "name" => "test_document.pdf",
            "tmp_name" => "/tmp/phpYzdqkD",
            "size" => 5000000 // 5MB
        ];

        $response = uploadFile($mockFile);
        $this->assertEquals(200, $response["status"]);
        $this->assertEquals("Bestand succesvol geüpload", $response["message"]);
    }

    public function testLargeFileRejection() {
        $mockFile = [
            "name" => "large_document.pdf",
            "tmp_name" => "/tmp/phpYzdqkD",
            "size" => 11 * 1024 * 1024 // 11MB
        ];

        $response = uploadFile($mockFile);
        $this->assertEquals(400, $response["status"]);
        $this->assertEquals("Bestand te groot", $response["error"]);
    }
}
?>
```

en ook in javascript met jest

```javascript
const uploadFile = require("./upload");

test("Bestand succesvol geüpload", () => {
    const mockFile = {
        name: "test_document.pdf",
        data: Buffer.from("Dit is een testbestand"),
        size: 5 * 1024 * 1024, // 5MB
    };

    const response = uploadFile(mockFile);
    expect(response.status).toBe(200);
    expect(response.message).toBe("Bestand succesvol geüpload");
});

test("Bestand te groot foutmelding", () => {
    const mockFile = {
        name: "large_document.pdf",
        data: Buffer.from("Dit is een groot bestand"),
        size: 11 * 1024 * 1024, // 11MB
    };

    const response = uploadFile(mockFile);
    expect(response.status).toBe(400);
    expect(response.error).toBe("Bestand te groot");
});
```

#### Samenvatting
* User stories helpen om gebruikersgericht te werken.
* Je test of de applicatie voldoet door acceptatiecriteria vast te stellen.
* Unit- en integratietests helpen om de functionaliteit van je code automatisch te controleren.
:::

::: section
### Wireframes
Een **wireframe** is de **blauwdruk** of het **skelet** van een webpagina, app of software-interface.

Vergelijk het met de bouwtekening van een huis:

* De bouwtekening laat zien **waar** de muren, deuren en ramen komen (de structuur).
* De wireframe laat zien **waar** de navigatiebalk, knoppen, afbeeldingen en tekstblokken komen (de structuur).

De belangrijkste focus van een wireframe is **structuur en functionaliteit**, **niet** het uiterlijk (kleuren, lettertypes, afbeeldingen, etc.). Daarom zijn wireframes vaak minimalistische, zwart-witte schetsen.

#### Elementen van een Wireframe

1.  **Indeling (Layout):** Waar staan de grote blokken (header, content, footer, zijbalk)?
2.  **Informatiehiërarchie:** Welke elementen zijn het belangrijkst en krijgen de meeste ruimte/aandacht?
3.  **Functionaliteit:** Waar komen de knoppen (**Call-to-Actions**), zoekbalken en links om de gebruiker te laten interacteren?

#### Schetsen

Voor de eerste ideeën is het schetsen op **papier** de meest efficiënte methode. Dit noemen we ook wel **Low-Fidelity** (lage getrouwheid) wireframing.

#### It’s Cheap to Fail

* Digitale tools (Figma, Sketch) kosten tijd om op te starten en perfecte lijnen te trekken. Met pen en papier ben je direct bezig met het oplossen van het **structuurprobleem**.
* Je maakt snel 5 verschillende versies van een pagina.
* **Geen commitment:** Een ruwe schets op papier maakt duidelijk dat het ontwerp **niet definitief** is. Dit moedigt jou, je team en de klant aan om sneller en eerlijker kritiek te geven en met ideeën te komen.

#### Focus op de Kern (Functionaliteit)

* **Blijf functioneel:** Omdat je geen toegang hebt tot kleuren of mooie lettertypes, word je gedwongen om je puur te richten op **waar** de elementen staan en **wat** ze moeten doen. Dit is cruciaal, want een website die er prachtig uitziet maar onlogisch is opgebouwd, zal falen.
* **Voorkomt "Design-discussies":** Als je te snel digitale mock-ups maakt met kleuren en foto's, gaan mensen praten over of ze de kleur blauw wel mooi vinden, in plaats van of de knop wel op de juiste plek staat. Papier houdt de discussie bij de **gebruikerservaring (UX)**.

#### Communicatie en Samenwerking

* **Iedereen kan meedoen:** Iedereen kan een potlood vasthouden. Dit maakt het makkelijk om in een team- of klantensessie de schetsen samen op te bouwen en direct feedback te verwerken.
* **Universele taal:** Het is een visuele 'taal' die zowel de klant (de business) als de ontwikkelaar (de techniek) begrijpt. De ontwikkelaar krijgt de bouwtekening die nodig is voor de implementatie.

Kortom: **Begin altijd met pen en papier** om snel de beste structurele oplossing te vinden. Pas daarna zet je het wireframe over naar een digitale tool om het verder uit te werken (**Mid-Fidelity** of **High-Fidelity**). Bijvoorbeeld met [Figma](https://www.figma.com/). Zie ook de [Uitleg over wireframes bij Figma](https://www.figma.com/resource-library/what-is-wireframing/)

{% video "DkkUj1jw3B0" %}

:::

::: section
### Use case diagram
Dit is het **belangrijkste** diagram voor het vastleggen van de functionele eisen op hoog niveau.

* **Doel:** Laat zien wie (de **Actoren**) wat (de **Use Cases** of functionaliteiten) met het systeem kan doen.
* **Focus:** Het afbakenen van de systeemgrenzen en het visualiseren van de interacties tussen de buitenwereld en het systeem.
* **Wat je ziet:**
    * **Actoren:** De menselijke gebruikers of andere systemen die interageren met het te bouwen systeem.
    * **Use Cases:** De functies die het systeem uitvoert en die waarde opleveren voor de Actor.
    * **Relaties:** De lijnen die aangeven welke Actor welke Use Case gebruikt.

![Use Case Diagram](/_assets/use_case_diagram.png)

:::


::: section
### Activity diagram
Een **Activity Diagram** in UML wordt gebruikt om **de stroom van activiteiten binnen een proces** te visualiseren. Het lijkt op een **flowchart**, maar is specifieker gericht op het modelleren van **processen** en **gedrag** binnen een systeem. 

Het doel van een Activity Diagram is om:
1. **Processtromen te begrijpen** – Het maakt duidelijk hoe een proces verloopt en waar beslissingen worden genomen.
2. **Complexe processen visueel te structureren** – Vooral handig bij processen met meerdere stappen, beslissingen en parallelle taken.
3. **Samenwerking te verbeteren** – Teams kunnen het diagram gebruiken om het proces te bespreken en te verfijnen.
4. **Functionaliteit te definiëren** – Het helpt bij het opstellen van functionele eisen en systeemgedrag.
5. **Mogelijke knelpunten te vinden** – Door het diagram te analyseren kunnen inefficiënties en problemen worden geïdentificeerd.

#### Een goede aanvulling in een functioneel ontwerp?
Een functioneel ontwerp beschrijft **wat** een systeem moet doen, zonder in te gaan op de technische implementatie. Activity diagrams helpen hierbij door:
- **Visueel duidelijk te maken hoe gebruikers en systemen interageren** (bijvoorbeeld: aanmeldingsproces, betaling, dataverwerking).
- **Beslismomenten en workflows in kaart te brengen** – Dit maakt het makkelijker om regels en uitzonderingen te definiëren.
- **Een gedeeld begrip te creëren tussen stakeholders** – Ontwikkelaars, analisten en opdrachtgevers kunnen het diagram gebruiken als gemeenschappelijke referentie.

In het geval van een **school en studenten** kan een activity diagram bijvoorbeeld helpen om:
- Het **aanmeldingsproces** van een student duidelijk te maken.
- Het **studieproces** (keuze van vakken, deelname aan lessen, examens) te modelleren.
- De **interactie met docenten en systemen** te structureren.

<img src="https://static.edutorial.nl/projecten/activity_diagram.svg" alt="Voorbeeld van een activiteitendiagram" style="width:80%">
:::

