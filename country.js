/*
The weather API requires the latitude and longitude of the capital city, which you will get from the country details.
Display the country's name, capital city, and current temperature in the console.
Example:
If the user searches for "France", your application should:
Fetch country details from https://restcountries.com/v3.1/name/France.
Extract the capital city and its coordinates (latitude and longitude).
Fetch the current weather for the capital city from the weather API.
Display the results


1. create a function that fetches data
2. find the data detail from the response by logging to the console
3. look for specific data 
4. return the output which is the country details mentioned in the specific data

*/



const  fetchData = async (url) =>{
           try {
            const countryData = await fetch(url)
            const countryDataJSON = await countryData.json()
            // console.log(countryDataJSON);
            let countryName = countryDataJSON[0].name.common
            let countryCapital = countryDataJSON[0].capital[0];
            let lat = countryDataJSON[0].latlng[0]
            let long = countryDataJSON[0].latlng[1]
            let weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`)
            let data = await weatherData.json()

              return `name: ${countryName}\ncapital: ${countryCapital}\ntemperature: ${data.current_weather.temperature}°C`
           } catch (error) {
            console.error(error);
           }
        }






fetchData('https://restcountries.com/v3.1/name/France').then(result => console.log(result))



