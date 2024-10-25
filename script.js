const fetchingData = async ()=>{
    let data = await fetch('/data.json');

    let response = await data.json();

    console.log(response);
}

fetchingData();