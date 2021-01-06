const fetchData = async (temp) => {

    let ratesArray = [];
    let pickerItems = [];

    try {

        const response = await fetch('http://forex.cbm.gov.mm/api/latest');
        const {rates} = await response.json();

        if (temp === 'rate') {

            const responseWithFullNames = await fetch('http://forex.cbm.gov.mm/api/currencies');
            const {currencies} = await responseWithFullNames.json();

            const keysArr = Object.keys(rates);
            const valuesArr = Object.values(rates);

            let id = 0;

            for (let i = 0; i < keysArr.length; i++) {
                let temp = {};
                temp['key'] = id++;
                temp['name'] = keysArr[i];
                temp['currency'] = valuesArr[i];
                temp['fullName'] = currencies[keysArr[i]];

                ratesArray.push(temp);
            }

            return ratesArray;

        } else {

            const itemKeys = Object.keys(rates);

            for (let i = 0; i < itemKeys.length; i++) {
                let itemTemp = {};
                itemTemp['label'] = itemKeys[i];
                itemTemp['value'] = itemKeys[i];

                pickerItems.push(itemTemp);
            }

            return pickerItems;

        }

        
        
    } catch (err) {
        console.log(err);
    }

}


export default fetchData;