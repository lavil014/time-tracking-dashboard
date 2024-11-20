const dailyData = document.getElementById('daily');
const weeklyData = document.getElementById('weekly');
const monthlyData = document.getElementById('monthly');
const cardContainer = document.querySelector('.card-container')


const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');

        let response = await data.json();


        response.forEach(element => {

          const {title, timeframes} = element;

            cardContainer.innerHTML += 
            `
              <div class="card">
                <span>${title}</span><br>
                <span>${timeframes.daily.current}hrs</span><br>
                <span>Last Week - ${timeframes.daily.previous}hrs</span>  
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


