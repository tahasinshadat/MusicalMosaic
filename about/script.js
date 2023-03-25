let team2 =
    [
        {
            name: "Tahasin Shadat",
            role: "Lead Developer ",
            info: "I always loved music because of how it made me feel. I love listening to it when I go to the gym as it helps me focus. A lot of music out there can help people find their way. ",
            image: "../images/Tahasin.jpg",
        },

        {
            name: "Matthew Bologna",
            role: " Developer ",
            info: " Growing up when I listened to music it was primarily on the radio. This means that I could not really choose what I was listening to. In turn I found myself listening to older music more often. This music left an impression on me like no other music ever has. The emotion that older music conveys is vastly different than that of today. This is why we need to preserve these songs with future generations. Additionally, songs and paintings of the past help us to learn and understand the lives of the people that came before us. That is why our website is so important.  Overall, we strive to ensure culture, art , and music persists through generations.",
            image: "../images/Matthew.jpg",
        },

        {
            name: "Gigi",
            role: " Designer ",
            info: " Music is important to me because it’s an important form of self-expression and cultural identity. Through music, I can explore our emotions, experiences, and values, and share them with others. I also learn about different cultures and perspectives, expanding our understanding and appreciation of the world around us.",
            image: "../images/gigi.jpg",
        },

        {
            name: "Bignyapti Tripathi",
            role: "Researcher",
            info: " Coming from a country which is full of cultural art and music, I have always listened to old music rather than new hip hop, rock etc like most of our generation now. Old music hits differently and most of this generation has forgotten it or is forgetting this kind of music, the original music and art. The music which taps your soul. I personally feel our history of music should not be forgotten of how it all originated and how it’s devolved into what it is today, how it originally sounded to what it has become, which is why I felt this website was the perfect way of keeping the future generations from forgetting where we first started.",
            image: "../images/BT.jpg",
        },

        {
            name: "Khriz",
            role: "Researcher ",
            info: " Coming from a household that listens to music almost 24//7 is an important factor in my life. I've heard music from many countries as a kid and now as a teenager. Knowing that there are many old songs that are slowly being forgotten, songs that had a strong impact on a country is sad. Having a website that can zoom in on a few countries that can show a song that was once inspirational and famous preserves the art of long ago for future generations.",
            image: "../images/khriz.jpg",
        },

        {
            name: "Jerry",
            role: "Designer",
            info: " Music has always been a part of my life. Since I was a kid I would always listen to my mother playing music, and a lot of my taste in music comes from her. I personally believe that music is a way that people can connect and learn of different cultures. I like to show my friends music that I listen to, and I like to listen to music that they also listen to. I like to diversify my taste in music, and I like listening to music from different countries. ",
            image: "../images/jerry.jpeg",
        },

        {
            name: "Alfonso",
            role: "Volunteer",
            info: "I'm a software engineer at Flatiron Health, where we aim to facilitate cancer treatment and research, and I enjoy sharing my passion of coding with others.",
            image: "../images/Alfonzo.jpg",
        },

        {
            name: "Mofi",
            role: "Volunteer",
            info: "I am Mofi. Software Engineer at Google, working on Google Cloud. I love Go, Kubernetes, Docker.",
            image: "https://i.ibb.co/VCB7x5s/mofi-profile.png",
        }


    ];
let team = document.querySelector(".team");
let darkBackground = false;
for (let person of team2) {
    team.insertAdjacentHTML("beforeend", `<section id="about" class="p-5 bg-${darkBackground ? "dark" : "light"} text-${darkBackground ? "light" : "dark"}">

        <div class="container">
            <div class="row align-items-center justify-content-between">

                <div class="col-md p-5 order-${darkBackground ? "5" : "1"}">
                    <h2>${person.name}</h2>
                    <p class="lead">
                        ${person.role}
                    </p>
                    <p>
                        ${person.info}
                    </p>
                </div>
                <div class="col-md text-center order-${darkBackground ? "1" : "5"}">
                    <img src="${person.image}" class="img-fluid" alt="" />
                    
                </div>
            </div>
        </div>
    </section>`)

    darkBackground = !darkBackground;
}




