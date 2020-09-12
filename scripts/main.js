// get button element

 let search = document.getElementById("button");
 let condition = document.getElementById("condition");
 let date = document.getElementById("date");
 let temp = document.getElementById("temp");
 let place = document.getElementById("place");
let icon = document.getElementsByTagName('img')[0].getAttribute('src');
let time = document.getElementById('time');
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
            // get date and time from api fetch 
             let  Day = new Date(result.dt * 1000).toDateString();
             let Time = new Date(result.dt * 1000).toTimeString(); 

             //assign results to html data
             this.place.innerHTML = result.name
             this.date.innerHTML = Day
             document.getElementsByTagName('img')[0].src = "http://openweathermap.org/img/wn/" + result.weather[0].icon + "@2x" + ".png"
             this.condition.innerHTML = result.weather[0].description;
             this.time.innerHTML = Time.slice(0, 5)
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
    this.serverRes(city.value = "london");
});