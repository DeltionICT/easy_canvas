if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('Service Worker geregistreerd met succes:', registration.scope);
      })
      .catch(err => {
        console.log('Registratie van Service Worker mislukt:', err);
      });
  });
}