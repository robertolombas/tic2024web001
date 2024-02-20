document.getElementById('creditosBtn').addEventListener('click', function() {
      alert('Autor: Roberto Lombas Oveja\nCurso y Grupo: 2ºC Nº20');
    });

    document.getElementById('ocultarSeccionBtn').addEventListener('click', function() {
      document.querySelector('.bloque1').style.display = 'none';
    });

    document.getElementById('mostrarSeccionBtn').addEventListener('click', function() {
      document.querySelector('.bloque1').style.display = 'block';
    });

    document.getElementById('cambiarColorBtn').addEventListener('click', function() {
      document.querySelector('.bloque1').style.backgroundColor = '#b3ffb3';
    });

    document.getElementById('ubicacionBtn').addEventListener('click', function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitud = position.coords.latitude;
          const longitud = position.coords.longitude;
          const ubicacionInfo = document.getElementById('ubicacionInfo');
          ubicacionInfo.innerHTML = `Latitud: ${latitud.toFixed(6)}, Longitud: ${longitud.toFixed(6)}`;

          const mapa = L.map('mapa').setView([latitud, longitud], 13);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapa);
          L.marker([latitud, longitud]).addTo(mapa);
        }, function(error) {
          alert(`Error al obtener la ubicación: ${error.message}`);
        });
      } else {
        alert('Geolocalización no soportada por el navegador.');
      }
    });

    document.querySelector('.bloque1').addEventListener('mouseover', function() {
      const currentDate = new Date();
      alert('Fecha actual: ' + currentDate);
    });

    document.querySelector('.bloque2').addEventListener('mouseover', function() {
      this.style.backgroundColor = 'lightblue';
    });

    document.querySelector('.bloque2').addEventListener('mouseout', function() {
      this.style.backgroundColor = 'silver';
    });
