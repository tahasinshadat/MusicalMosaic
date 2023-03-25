/*
<div class="container">
        <div class="row align-items-center justify-content-between">

                <div class="col-md p-3">
                        
                </div>
                <div class="col-md p-3">
                    <img src="" class="img-fluid" alt="" />
                </div>
            </div>
        </div>
        <div class="row align-items-center justify-content-between">

                <div class="col-md p-3">
                        
                </div>
                <div class="col-md p-3">
                    <img src="" class="img-fluid" alt="" />
                </div>
            </div>
        </div>
*/

async function run() {
    let countries = document.getElementById('data-country')
    const response = await fetch("../data.json");
    const data = await response.json();
    console.log(data[0].name);
    console.log("hello")
    let name = localStorage.getItem('country');
    console.log(name)
    const country = data.filter(c =>
        c.name === name);
    console.log(country);
    let content = generateContent(country[0]);
    countries.appendChild(content);
}

function generateContent(country) {
    console.log('helere')
    console.log(country)
    let container = document.createElement('div');
    container.classList.add('col-md', 'text-center');
    
    let name = document.createElement('h1');
    name.innerHTML = country.name
    let countryDescription = document.createElement('h4')
    countryDescription.innerHTML = country.description
    
    let div1 = document.createElement('div');
    div1.classList.add('row', 'align-items-center', 'justify-content-between');
    let div2 = document.createElement('div');
    div2.classList.add('card-body');
    
    let div3pt1 = document.createElement('div');
    div3pt1.classList.add('col-md', 'p-3');
    let image1 = document.createElement('img');
    image1.src = country.art_1;
    image1.classList.add('img-fluid');
    let p1 = document.createElement('p')
    p1.innerHTML = country.art_1_description;
    div3pt1.appendChild(image1);
    div3pt1.appendChild(p1);
    
    let div3pt2 = document.createElement('div');
    div3pt2.classList.add('col-md', 'p-3');
    let image2 = document.createElement('img');
    image2.src = country.art_2;
    image2.classList.add('img-fluid');
    let p2 = document.createElement('p')
    p2.innerHTML = country.art_2_description;
    div3pt2.appendChild(image2);
    div3pt2.appendChild(p2);

    let songName = document.createElement('h2');
    songName.innerHTML = country.songname
    let audio = document.createElement('audio');
    audio.src = country.songmp3
    audio.controls = "controls";
    
    div2.appendChild(div3pt1);
    div2.appendChild(div3pt2);   
    div1.appendChild(div2);
    container.appendChild(name);
    container.appendChild(countryDescription);
    container.appendChild(div1);
    container.appendChild(songName);
    container.appendChild(audio);
    return container;
}

run()