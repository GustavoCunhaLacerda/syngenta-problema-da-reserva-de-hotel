const HOTELS = require("./data/hotels");

function getCheapestHotel(input) {
  const userType = input.split(":")[0];
  const dates = input.split(":")[1].split(",");

  const hotelsResults = Object.keys(HOTELS).map((key) => {
    return {
      name: HOTELS[key].name,
      totalPrice: 0,
      classification: HOTELS[key].classification,
    };
  });

  for (const hotel of hotelsResults) {
    for (const date of dates) {
      const price = HOTELS[hotel.name].getPrice(date, userType);
      hotel.totalPrice += price;
    }
  }

  hotelsResults.sort((hotel1, hotel2) => {
    return (
      hotel1.totalPrice - hotel2.totalPrice ||
      hotel2.classification - hotel1.classification
    );
  });

  const cheapestHotel = hotelsResults[0];

  return cheapestHotel.name;
}

exports.getCheapestHotel = getCheapestHotel;
