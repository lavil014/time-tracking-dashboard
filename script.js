const btns = document.querySelectorAll('button');
const dailyData = document.getElementById('daily');
const weeklyData = document.getElementById('weekly');
const monthlyData = document.getElementById('monthly');
const cardContainer = document.querySelector('.card-container')


/*
const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');

        let response = await data.json();


        response.forEach(element => {

          const {title, timeframes, daily, weeky, monthly} = element;

            cardContainer.innerHTML += 
            `
              <div class="card">
                <span>${title}</span><br>
                <span>${timeframes.daily.current}hrs</span><br>
                <span>Last Week - ${timeframes.daily.previous}hrs</span>  
              </div>
            `
        });

    }
    catch(error){
        console.error('Error fetching data :' , error);
    }

}

fetchingData()
*/
const showData = ()=>{

}

btns.forEach(element => {
  element.addEventListener('click',(e)=>{
    if(e.target.id === 'daily'){
      console.log('Daily btn was clicked');
    } else if(e.target.id === 'weekly'){
      console.log('Weekly btn was clicked');
    } else{
      console.log('Monthly btn was clicked');
    }
  })
});