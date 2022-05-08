'use strict'

const chai = require('chai')
const expect = chai.expect
const hotels = require('../src/main')
const getCheapestHotel = hotels.getCheapestHotel 

describe('test', function () {
  // Mixed days
  it('should return Bridgewood regular mixed', function () {
    expect(getCheapestHotel("Regular: 24Dec2009(tues), 25Dec2009(fri), 26Dec2009(sat)")).to.equal("Bridgewood");
  });
  it('should return Ridgewood rewards mixed', function () {
    expect(getCheapestHotel("Rewards: 24Dec2009(tues), 25Dec2009(fri), 26Dec2009(sat)")).to.equal("Ridgewood");
  });

  // Weekdays only
  it('should return Lakewood regular weekdays only', function () {
    expect(getCheapestHotel("Regular: 2Feb2009(mon),3Feb2009(thur), 4Feb2009(wed)")).to.equal("Lakewood");
  });
  it('should return Lakewood rewards weekdays only', function () {
    expect(getCheapestHotel("Rewards: 2Feb2009(mon),3Feb2009(thur), 4Feb2009(wed)")).to.equal("Lakewood");
  });

  // Weekend only
  it('should return Bridgewood regular weekend only', function () {
    expect(getCheapestHotel("Regular: 26Dec2009(sat), 27Dec2009(sun)")).to.equal("Bridgewood");
  });
  it('should return Bridgewood rewards weekend only', function () {
    expect(getCheapestHotel("Rewards: 26Dec2009(sat), 27Dec2009(sun)")).to.equal("Ridgewood");
  });

  // One date
  it('should return Bridgewood regular weekdays one day', function () {
    expect(getCheapestHotel("Regular: 24Dec2009(tues)")).to.equal("Lakewood");
  });
  it('should return Bridgewood rewards weekdays one day', function () {
    expect(getCheapestHotel("Rewards: 24Dec2009(tues)")).to.equal("Lakewood");
  });
  it('should return Bridgewood regular weekend one day', function () {
    expect(getCheapestHotel("Regular: 26Dec2009(sat)")).to.equal("Bridgewood");
  });
  it('should return Bridgewood rewards weekend one day', function () {
    expect(getCheapestHotel("Rewards: 26Dec2009(sat)")).to.equal("Ridgewood");
  });
})