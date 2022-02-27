
 const lodeCountry= ()=>{
 fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data =>countryDisplay(data))
};

lodeCountry();
const countryDisplay =(country)=>{
    //console.log(country)
    const countryDiv= document.getElementById('countrys');
    for(countries of country){
        const div =document.createElement('div');
        

    }
} 
