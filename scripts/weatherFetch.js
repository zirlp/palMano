

let input = document.getElementById('search')
let boton = document.getElementById('searchButton');

boton.addEventListener('click', () => {
    weatherFetch(input.value)
})

const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

async function weatherFetch(city) {
    let fetchResult = {};

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then((r) => r.json())
        .then((json) => {
            if (json.main !== undefined) {
                fetchResult = {
                    max: Math.round(json.main.temp_max),
                    min: Math.round(json.main.temp_min),
                    name: json.name,
                    country: json.sys.country,
                    img: json.weather[0].icon
                };
            } else alert("Ciudad no encontrada");
        });


        let cardContainer = document.getElementById('weatherContainer')
       
        cardContainer.style="background-color: rgba(128, 128, 128, 0.511); height: 200px; width: 18rem; margin-top: 10px; border-radius: 10px;"  //es mejor ponerle una class :v (cardContainer.class = "lokesea")

        let cardFields = cardContainer.children

        let index = 0;
        for(key in fetchResult) {
                if(key != "img") {
                    cardFields[index].innerHTML = fetchResult[key]
                } else {
                    cardFields[index].src = `http://openweathermap.org/img/wn/${fetchResult[key]}@2x.png`
                }
            index ++
        }
}