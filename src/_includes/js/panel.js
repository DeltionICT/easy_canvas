      window.addEventListener('DOMContentLoaded', function() {
        showPanel();
       // const newHash = window.location.hash;
       // handleHashChange(newHash);
        console.log('De DOM is volledig geladen en geparsed');
      });

      if (inhoud = document.querySelector('#inhoudsopgave .toc ul li')) {
        inhoud.addEventListener('click', function(event) {
          console.log('Inhoudsopgave - Click event detected');
          if (!window.location.hash) {
            console.log('Inhoudsopgave - Geen hashtag aanwezig');
            return;
          }            
          const hash = window.location.hash;
          console.log('Inhoudsopgave - hashtag:', hash);
         // handleHashChange(hash);
        });
      }
         
      window.addEventListener('hashchange', function() {
        if (!window.location.hash) {
          console.log('Geen hashtag aanwezig');
          return;
        }
        // Je kunt nu de nieuwe URL ophalen
        const newHash = window.location.hash;
        console.log('Hash is veranderd:', newHash);
        
        // Voer hier je eigen logica uit, bijvoorbeeld een functie aanroepen
        // handleHashChange(newHash);
      });

      function handleHashChange(hash) {
        setTimeout(function() {
          const targetElement = document.querySelector(window.location.hash);
          
          if (targetElement) {
            console.log('Positie van het doel-element:', targetElement.offsetTop);
            //const newScrollPosition = targetElement.offsetTop - 67;
            const newScrollPosition = 0;
            console.log('Nieuwe scrollpositie:', newScrollPosition);

            window.scrollTo({
              top: newScrollPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } 

      function hidePanel() {
        console.log("hidePanel");
        const arrow_in = document.getElementById('panel-in');
        const arrow_out = document.getElementById('panel-out');
        const panel = document.getElementById('inhoudsopgave');
        arrow_out.style.display = 'none';
        arrow_in.style.display = 'block';
        panel.style.display = 'none';
        //panel.style.flex = 0;
        //panel.style.padding = 0;
        //panel.style.overflow = 'hidden';
        //panel.style.minWidth = '0px';
      }

      function showPanel() {
        console.log("showPanel");
        const panel = document.getElementById('inhoudsopgave');
        const arrow_in = document.getElementById('panel-in');
        const arrow_out = document.getElementById('panel-out');
        arrow_out.style.display = 'block';
        arrow_in.style.display = 'none';
        panel.style.display = 'block';
        //panel.style.flexBasis = 'content';
        //panel.style.padding = '1rem';
        //panel.style.overflow = 'auto';
        //panel.style.minWidth = '250px';
      }

      function toggleNav() {
        const nav = document.querySelector('nav#side ul');
        if (nav.style.display === 'flex')  {
          nav.style.display = 'none';
        } else {
          nav.style.display = 'flex';
        }
      }