fetch('data/services.json')
  .then(r => r.json())
  .then(data => {
    document.getElementById('price-list').innerHTML = data
      .map(x => `<div class="card">${x.name} - <b>Tanya WA</b></div>`)
      .join('');
  });
