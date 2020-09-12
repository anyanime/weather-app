
 search = document.getElementById("button"),

    search.addEventListener('click', (reg) => {
       let city = document.getElementById("input");
       let apiKey = "671ac19158660d3002a5c97bffb59b1b";
        //fectch data from the API
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`)
            .then(res => res.json())
            .then(data => {
                result = data;

                // get html data
                condition = document.getElementById("condition").innerHTML;
                date = document.getElementById("date").innerHTML;
                temp = document.getElementById("temp").innerHTML;
                place = document.getElementById("place").innerHTML;
                console.log(result)

                //assign results to html data
                
                document.getElementById("place").innerHTML = result.name
                document.getElementById("date").innerHTML = new Date(result.dt*1000).toDateString();
                document.getElementsByTagName('img').item(0).src = "http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x" +  ".png"
                document.getElementById("condition").innerHTML = result.weather[0].description;
                document.getElementById("temp").innerHTML = Math.round(result.main.temp) + '&deg' + 'C'
                console.log(result.name, result.dt*1000, result.main.temp, result.weather[0].main, result.main.pressure, result.main.humidity,  result.weather[0].description)
                })
            .catch(err => console.log(err));
})


