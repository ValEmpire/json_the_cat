const request = require('request');

const fetchBreedDescription = (breedName, callback) => {

  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {

    if(err){
      return callback(err, null);
    }

    const data = JSON.parse(body);

    if(data.length > 0){
      return callback(null, data[0].description);
    }else{
      return callback(null, 'No cats found!')
    }

  })
};

module.exports = { fetchBreedDescription };
