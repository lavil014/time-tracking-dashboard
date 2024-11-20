const dailyData = document.getElementById('daily');
const weeklyData = document.getElementById('weekly');
const monthlyData = document.getElementById('monthly');
const cardContainer = document.querySelector('.card-container')


const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');

        let response = await data.json();

        let response1 = response[0].title;
        let response2 = response[0].timeframes.daily.current;
        let response3 = response[0].timeframes.daily.previous;

        response.forEach(element => {
            cardContainer.innerHTML += 
            `
            <div class="card">
              <h1>${response1}</h1>
              <h2>${response2}</h2>
              <h3>Last week - ${response3}hrs</h3>
            </div>
            
            `
            console.log(element);
        });

    }
    catch(error){
        console.error('Error fetching data :' , error);
    }

}


fetchingData()


