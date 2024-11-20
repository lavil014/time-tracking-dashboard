const btns = document.querySelectorAll('button');
const cardContainer = document.querySelector('.card-container')



const renderCards = (data, timeFrame)=>{
    
  cardContainer.innerHTML = '';

  data.forEach(({title,timeframes}) => {
       
      cardContainer.innerHTML +=
        `
          <div class="card">
            <span>${title}</span><br>
            <span>${timeframes[timeFrame].current}hrs</span><br>
            <span>Last Week - ${timeframes[timeFrame].previous}hrs</span>  
          </div>
        `
  });
}



const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');

        let response = await data.json();

          btns.forEach(btnElement => {
            btnElement.addEventListener('click',(e)=>{
              let timeFrame = e.target.id;

              renderCards(response, timeFrame);
          })
});
    }
    catch(error){
        console.error('Error fetching data :' , error);
    }

}

fetchingData()

