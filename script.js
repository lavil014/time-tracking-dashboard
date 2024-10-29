const frequency = ['Daily', 'Weekly', 'Monthly'];


const fetchingData = async ()=>{

    try{
        let data = await fetch('/data.json');

        let response = await data.json();
         console.log(response[0]);
         
         
        return response
    }
    catch(error){
        console.error('Error fetching data :' , error);
    }

}

fetchingData()





