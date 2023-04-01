const block = document.querySelector('.block');
console.log(block);
const imgKey = 'https://image.tmdb.org/t/p/w500';

fetch('https://api.themoviedb.org/3/movie/550?api_key=23f5bd2c22d9227192b02969c459d0fa').then((response) => response.json()).then((data) => {
    {

        console.log(data);

        const card = document.createElement('div');
        card.classList.add('card');
        block.appendChild(card);

        // img
        const img = document.createElement('img');
        img.classList.add('card__img');
        img.src = `${imgKey}${data.backdrop_path}`;
        card.appendChild(img);

        // name
        const Name = document.createElement('h1');
        Name.classList.add('card__h1');
        card.appendChild(Name);
        Name.textContent = data.title;
        // span box



        const budget = document.createElement('h4');
        budget.textContent = 'Budget: ' + ' $' + data.budget;
        card.appendChild(budget);


        const language = document.createElement('h4');
        language.textContent = 'Language: ' + data.original_language;
        card.appendChild(language);



        const releaseDate = document.createElement('h4');
        releaseDate.textContent = 'Date: ' + data.release_date;
        card.appendChild(releaseDate);


        const spanBox = document.createElement('div');
        spanBox.classList.add('span-box');
        card.appendChild(spanBox);



        const productionCompanies = data.production_companies.map((companie) => {
            const imgLogo = document.createElement('a');
            imgLogo.href = imgKey + companie.logo_path;
            imgLogo.textContent = companie.name;
            imgLogo.classList.add('span-box__item');
            spanBox.appendChild(imgLogo);
        })

        const title = document.createElement('div');
        title.classList.add('card__title', 'title-for');
        title.innerHTML = `<p>${data.overview}</p>`;
        card.appendChild(title);



        const btn = document.createElement('button');
        btn.textContent = 'text';
        card.appendChild(btn);


        btn.addEventListener('click', () => {
            title.classList.toggle('title-for');

        })


    }

})