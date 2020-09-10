

 apiKey = "671ac19158660d3002a5c97bffb59b1b",
 search = document.getElementById("button"),
 city = document.getElementById("input"),
 condition = document.getElementById("condition").innerHTML;
 date = document.getElementById("date").innerHTML;
 temp = document.getElementById("temp").innerHTML;
 place = document.getElementById("place").innerHTML;

    search.addEventListener('click', () => {
        date = new Date();
        console.log(city.value);
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                })
            .catch(err => console.log(err));
})

// fetch( 
//     `https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=${apiKey}`
// ).then(res => res.json())
//     .then(body => console.log(body.weather))
//     .catch(err => console.log(err));


// search.addEventListener('click', () => { 
//     console.log(city.value); 
// });

// fetch( 
//     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// ).then(res => res.json())
//     .then(body => console.log(body.weather))
//     .catch(err => console.log(err))

// console.log(city)