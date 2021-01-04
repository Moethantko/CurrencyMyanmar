const fetchData = async () => {
    const response = await fetch('http://forex.cbm.gov.mm/api/latest');
    const results = await response.json();

    //console.log(results);
    
    return results;
}



const transformData = async () => {
    let currencyArray = [];

    fetchData()
    .then(results => {
      
        //const keys = Object.keys(results.rates);
        //const values = Object.values(results.rates);

        for (result in results) {
            currencyArray.push({
                result: results[result]
            });
        }

    });

    return currencyArray;
}

export default transformData;