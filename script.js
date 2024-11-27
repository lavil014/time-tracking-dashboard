const btns = document.querySelectorAll('button');
const cardContainer = document.querySelector('.card-container')
const backgroundColors = [
   'hsl(15, 100%, 70%)',
   'hsl(195, 74%, 62%)',
   'hsl(348, 100%, 68%)',
   'hsl(145, 58%, 55%)',
   'hsl(264, 64%, 52%)',
   'hsl(43, 84%, 65%)'
]



const renderCards = (data, timeFrame)=>{
    
  cardContainer.innerHTML = '';

  data.forEach(({title,timeframes}, index) => {
       
    const bgColor = backgroundColors[index % backgroundColors.length];


      cardContainer.innerHTML +=
        `
          <div class="card">
            <div class="top-card" style="background-color: ${bgColor} ;">
              <img src="/images/icon-${title}.svg" alt="">
            </div>
            <div class="inner-card">
            <div class="tittle">
              <span>${title}</span><img src="/images/icon-ellipsis.svg" alt="">
            </div>
            <br>
            <span>${timeframes[timeFrame].current}hrs</span><br>
            <spa> Last Week - ${timeframes[timeFrame].previous}hrs</span>  
          </div>
        `
  });
}



const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');
        
        let response = await data.json();
        let index = response.title;

        renderCards(response, 'daily');

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
