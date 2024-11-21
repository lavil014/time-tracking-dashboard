const btns = document.querySelectorAll('button');
const cardContainer = document.querySelector('.card-container')



const renderCards = (data, timeFrame)=>{
    
  cardContainer.innerHTML = '';

  data.forEach(({title,timeframes}) => {
       
      cardContainer.innerHTML +=
        `
          <div class="card">
            <div class="top-card">
              <img src="/images/icon-work.svg" alt="">
            </div>
            <div class="inner-card">
            <div class="title">
              <span>${title}</span><img src="/images/icon-ellipsis.svg" alt="">
            </div>
            <br>
            <span>${timeframes[timeFrame].current}hrs</span><br>
            <spaLast Week - ${timeframes[timeFrame].previous}hrs</span>  
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

