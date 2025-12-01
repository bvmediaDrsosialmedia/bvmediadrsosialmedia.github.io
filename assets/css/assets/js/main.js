fetch('data/services.json')
  .then(r => r.json())
  .then(data => {
    const search = document.getElementById('search');
    const list = document.getElementById('service-list');

    function render(items) {
      list.innerHTML = items
        .map(x => `<div class="card">${x.name}</div>`)
        .join('');
    }

    render(data);

    search.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      const filtered = data.filter(x =>
        x.name.toLowerCase().includes(q)
      );
      render(filtered);
    });
  });
