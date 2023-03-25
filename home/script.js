async function run() {
    let countries = document.getElementById('countries')
    const response = await fetch("../data.json");
    const data = await response.json();
    console.log(data[0].name);
    for (let country of data) {
        const card = generateCard(country);
        countries.appendChild(card);
    }
}

function generateCard(country) {
    let container = document.createElement('div');
    container.classList.add('col-md')
    let div1 = document.createElement('div');
    div1.classList.add('card', 'bg-dark', 'text-light', 'my-float');
    let div2 = document.createElement('div');
    div2.classList.add('card-body', 'text-center');
    let image = document.createElement('img');
    image.src = `${country.background_image}`;
    let title = document.createElement('h3');
    title.innerHTML = `${country.name}`
    title.classList.add('mb-3', 'card-title')
    let p = document.createElement('p');
    p.classList.add('card-text')
    p.innerHTML = `<em>${country.description.substring(0, 100)}...</em>`
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-info')
    button.innerHTML = 'Visit'
    button.onclick = (e) => onClick(e, country.name);
    div2.appendChild(title);
    div2.appendChild(image);
    div2.appendChild(p);
    div2.appendChild(button);
    div1.appendChild(div2);
    container.appendChild(div1);
    return container;
}

function onClick(e, countryName) {
    e.preventDefault()
    console.log('helo')
    localStorage.setItem('country', countryName);
    location.href = `../country/index.html`
}



run();


/*
<div class="col-md">
                        <div class="card bg-dark text-light">
                            <div class="card-body text-center">
                                
                                <img src=""/>
                                
                                <h3 class="card-title mb-3">China</h3>
                                <p class="card-text">
                                    <em>description</em>
                                </p>
                                <a href="../china/index.html" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
*/