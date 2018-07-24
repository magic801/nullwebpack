function getCountries() {
  return ['USA', 'Norway', 'Germany', 'Sweden'];
}

function carService() {
  return ['BMW', 'Ferrari', 'Lamborghini', 'Porsche'];
}

var cars = carService();
for(var i = 0; i < cars.length; i++) {
  if(cars[i][0] === 'B') {
    console.log(cars[i]);
  }
}

var countries = getCountries();
for(var j = 0; j < countries.length; j++) {
  if(countries[j][0] === 'U') {
    console.log(countries[j]);
  }
}