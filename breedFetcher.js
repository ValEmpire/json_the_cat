const [breed] = process.argv.slice(2);

const request = require('request');

request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (err,response,body) => {

  if(err){
    return console.log(err)
  }

  const data = JSON.parse(body);

  if(data.length > 0){
    return console.log(data[0].description);
  }

  return console.log('No cats found');

})