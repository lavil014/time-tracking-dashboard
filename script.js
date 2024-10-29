const frequency = ['Daily', 'Weekly', 'Monthly'];


const fetchingData = async ()=>{
    let data = await fetch('/data.json');

    let response = await data.json();

}


export : {fetchingData}



