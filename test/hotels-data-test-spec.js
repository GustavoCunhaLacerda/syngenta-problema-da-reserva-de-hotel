"use strict";

const chai = require("chai");
const expect = chai.expect;
const HOTELS = require("../src/data/hotels");

describe("test", function () {
  // Lakewood tests
  it("should return Lakewood name", function () {
    expect(HOTELS["Lakewood"].name).to.equal("Lakewood");
  });
  it("should return Lakewood classification", function () {
    expect(HOTELS["Lakewood"].classification).to.equal(3);
  });
  it("should return Lakewood weekdays regular price", function () {
    expect(HOTELS["Lakewood"].prices.Regular.weekdays).to.equal(110);
  });
  it("should return Lakewood weekdays rewards price", function () {
    expect(HOTELS["Lakewood"].prices.Rewards.weekdays).to.equal(80);
  });
  it("should return Lakewood weekend regular price", function () {
    expect(HOTELS["Lakewood"].prices.Regular.weekend).to.equal(90);
  });
  it("should return Lakewood weekend rewards price", function () {
    expect(HOTELS["Lakewood"].prices.Rewards.weekend).to.equal(80);
  });

  // Bridgewood tests
  it("should return Bridgewood name", function () {
    expect(HOTELS["Bridgewood"].name).to.equal("Bridgewood");
  });
  it("should return Bridgewood classification", function () {
    expect(HOTELS["Bridgewood"].classification).to.equal(4);
  });
  it("should return Bridgewood weekdays regular price", function () {
    expect(HOTELS["Bridgewood"].prices.Regular.weekdays).to.equal(160);
  });
  it("should return Bridgewood weekdays rewards price", function () {
    expect(HOTELS["Bridgewood"].prices.Rewards.weekdays).to.equal(110);
  });
  it("should return Bridgewood weekend regular price", function () {
    expect(HOTELS["Bridgewood"].prices.Regular.weekend).to.equal(60);
  });
  it("should return Bridgewood weekend rewards price", function () {
    expect(HOTELS["Bridgewood"].prices.Rewards.weekend).to.equal(50);
  });

  // Ridgewood tests
  it("should return Ridgewood name", function () {
    expect(HOTELS["Ridgewood"].name).to.equal("Ridgewood");
  });
  it("should return Ridgewood classification", function () {
    expect(HOTELS["Ridgewood"].classification).to.equal(5);
  });
  it("should return Ridgewood weekdays regular price", function () {
    expect(HOTELS["Ridgewood"].prices.Regular.weekdays).to.equal(220);
  });
  it("should return Ridgewood weekdays rewards price", function () {
    expect(HOTELS["Ridgewood"].prices.Rewards.weekdays).to.equal(100);
  });
  it("should return Ridgewood weekend regular price", function () {
    expect(HOTELS["Ridgewood"].prices.Regular.weekend).to.equal(150);
  });
  it("should return Ridgewood weekend rewards price", function () {
    expect(HOTELS["Ridgewood"].prices.Rewards.weekend).to.equal(40);
  });
});
