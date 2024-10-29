const frequency = document.querySelector('ul').children;
const card = document.querySelector('div').children;


const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');

        let response = await data.json();
        let daily = response[0].timeframes.daily.current;
        let weekly = response[0].timeframes.daily.previous;
         
        if(frequency[0].innerText === 'Daily' ){
            card[1].innerText = `${daily}hrs`;
            card[2].innerHTML = `Last week - ${weekly}`;
        }



         console.log(response[0].timeframes.daily);
    }
    catch(error){
        console.error('Error fetching data :' , error);
    }

}

fetchingData()





