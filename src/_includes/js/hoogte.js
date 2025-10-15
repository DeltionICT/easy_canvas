    function toonHoogte() {
      // Haal de hoogte van de viewport (zichtbare gebied) op
      const viewportHoogte = window.innerHeight;

      // Zoek het HTML-element om de hoogte in te plaatsen
      const displayElement = document.getElementById('hight_indicator');

      // Update de tekst van het element
      console.log(`Hoogte: ${viewportHoogte}px`);
      displayElement.textContent = `${viewportHoogte}px`;
    }

    if (inhoud = document.querySelector('#inhoudsopgave')) {
        inhoud.addEventListener('click', function(event) {
            console.log('Inhoudsopgave - Click event detected');
            toonHoogte();
        });
    }
