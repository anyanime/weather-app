// get button element

 let search = document.getElementById("button");
 let condition = document.getElementById("condition").innerHTML;
 let date = document.getElementById("date").innerHTML;
 let temp = document.getElementById("temp").innerHTML;
 let place = document.getElementById("place").innerHTML;
let icon = document.getElementsByTagName('img')[0].getAttribute('src');
 let city = document.getElementById("input");
 let apiKey = "671ac19158660d3002a5c97bffb59b1b";

 clear = () => {
     this.city.value = "";
 }

 serverRes = () => {
     // declare variables for fetch call 
     let city = document.getElementById("input");
     let apiKey = "671ac19158660d3002a5c97bffb59b1b";

     // make a fetch call 
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric`)
         .then(res => res.json())
         .then(data => {
             result = data;

             //assign results to html data

             this.place.innerHTML = result.name
             this.date.innerHTML = new Date(result.dt * 1000).toDateString();
             document.getElementsByTagName('img')[0].src = "http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x" + ".png"
             this.condition.innerHTML = result.weather[0].description;
             this.temp.innerHTML = Math.round(result.main.temp) + '&deg' + 'C'
            city.value = "";
         })
         .catch(err => console.log(err));

 }

  //  addEventListeners
    search.addEventListener('click', serverRes);
    city.addEventListener('keypress', (e) => {
     if(e.keyCode === 13) {
         this.serverRes()
     }
 })

 document.addEventListener('DOMContentLoaded', (event) => {
    city.value = 'London'
    this.serverRes();
});