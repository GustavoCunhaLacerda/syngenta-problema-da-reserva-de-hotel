const getDayType = require("../utils/getDayType");

module.exports = (
  name,
  classification,
  weekdaysRegular,
  weekdaysRewards,
  weekendRegular,
  weekendRewards
) => {
  return {
    name,
    classification,
    prices: {
      Regular: { weekdays: weekdaysRegular, weekend: weekendRegular },
      Rewards: { weekdays: weekdaysRewards, weekend: weekendRewards },
    },

    getPrice(day, userType) {
      const dayType = getDayType(day);
      return this.prices[userType][dayType];
    },
  };
};
