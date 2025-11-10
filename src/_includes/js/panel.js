      window.addEventListener('DOMContentLoaded', function() {
        showPanel();
        styleActiveLink()
        toonHoogte();
       // const newHash = window.location.hash;
       // handleHashChange(newHash);
       // console.log('De DOM is volledig geladen en geparsed');
      });

      // if (inhoud = document.querySelector('#inhoudsopgave .toc ul li')) {
      //   inhoud.addEventListener('click', function(event) {
      //     console.log('Inhoudsopgave - Click event detected');
      //     if (!window.location.hash) {
      //       console.log('Inhoudsopgave - Geen hashtag aanwezig');
      //       return;
      //     }            
      //     const hash = window.location.hash;
      //     console.log('Inhoudsopgave - hashtag:', hash);
      //    // handleHashChange(hash);
        // });
      // }
         
      window.addEventListener('hashchange', styleActiveLink);

      function styleActiveLink() {
        if (!window.location.hash) {
          // console.log('Geen hashtag aanwezig');
          return;
        }
        const newHash = window.location.hash;
        // console.log('Hash is veranderd:', newHash);
        let active_link = document.querySelector('a[href="' + newHash + '"]');
        let navlinks = document.querySelectorAll('.toc a');
        for (let i = 0; i < navlinks.length; i++) {
          navlinks[i].classList.remove('active');
        }
        active_link.classList.add('active');
        console.log('Actieve link:', active_link);
      }


      // function handleHashChange(hash) {
      //   setTimeout(function() {
      //     const targetElement = document.querySelector(window.location.hash);
          
      //     if (targetElement) {
      //       console.log('Positie van het doel-element:', targetElement.offsetTop);
      //       //const newScrollPosition = targetElement.offsetTop - 67;
      //       const newScrollPosition = 0;
      //       console.log('Nieuwe scrollpositie:', newScrollPosition);

      //       window.scrollTo({
      //         top: newScrollPosition,
      //         behavior: 'smooth'
      //       });
      //     }
      //   }, 100);
      // } 

      function hidePanel() {
        // console.log("hidePanel");
        const arrow_in = document.getElementById('panel-in');
        const arrow_out = document.getElementById('panel-out');
        const panel = document.getElementById('inhoudsopgave');
        arrow_out.style.display = 'none';
        arrow_in.style.display = 'block';
        panel.style.display = 'none';
      }

      function showPanel() {
        // console.log("showPanel");
        const panel = document.getElementById('inhoudsopgave');
        const arrow_in = document.getElementById('panel-in');
        const arrow_out = document.getElementById('panel-out');
        arrow_out.style.display = 'block';
        arrow_in.style.display = 'none';
        panel.style.display = 'block';
      }

      const nav = document.querySelector('nav#side img');
      const navLinks = document.querySelector('nav#side ul');
      nav.addEventListener('click', toggleNav);

      function toggleNav() {
        if (navLinks.style.display === 'flex')  {
          navLinks.style.display = 'none';
        } else {
          navLinks.style.display = 'flex';
        }
      }