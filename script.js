const data = {
    "technologies": [
        { "title": "Blockchain Development" },
        { "title": "Android Development" },
        { "title": "Website Development" },
        { "title": "Graphic Design" },
        { "title": "IOS Development" },
        { "title": "Ui&Ux Development" },
        { "title": "Java Development" },
        { "title": "Python Development" }
    ]
};

const cardContainer = document.getElementById('cardContainer');

data.technologies.forEach(tech => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
    <div class="border">
    <span class="hjk"><img id="im"src="image/jjk.png">   <span id="sghj">Join Development</span></span>
    <hr>
    <h3 class="card-title">${tech.title}</h3>
        <img src="image/vhb.png" alt="${tech.title}">
        <div class="card-content">
            <hr>
            <a href="#" class="card-button">Explore  <span class="bmw">→</span></a>
        </div>
        </div>
    `;

    cardContainer.appendChild(card);
});



