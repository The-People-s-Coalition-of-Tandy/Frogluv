const linksList = document.getElementById('links');
fetch('links.json')
    .then(response => response.json())
    .then(data => {
        const links = data.links;
        links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            linksList.appendChild(a);
        });
    });