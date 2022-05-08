const HOTELS = require("./data/hotels");

function getCheapestHotel(input) {
  const userType = input.split(":")[0];
  const dates = input.split(":")[1].split(",");

  const allOptions = [];

  for (const date of dates) {
    for (const hotel of HOTELS) {
      allOptions.push({
        name: hotel.name,
        price: hotel.getPrice(date, userType),
        classification: hotel.classification,
      });
    }
  }

  allOptions.sort((hotel1, hotel2) => {
    if (hotel1.price === hotel2.price) {
      return hotel1.classification - hotel1.classification;
    }
    return hotel1.price - hotel2.price;
  });



  const cheapestHotel = allOptions[0];

  return cheapestHotel.name;
}

const res = getCheapestHotel("Regular: 2Feb2009(mon),3Feb2009(thur), 4Feb2009(wed)");

console.log(res);

exports.getCheapestHotel = getCheapestHotel;
