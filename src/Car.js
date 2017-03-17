function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  // TODO: add color, seats here
  this.color = color
  this.seats = seats
  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.passengers = passengers || [];
}

Car.prototype.sell = function(newOwner) {
  this.previousOwners.push(this.owner);
  this.owner = newOwner;
};

Car.prototype.paint = function(newColor) {
this.color = newColor
  return this.color;
};

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;


Car.prototype.start = function(start) {
  if (start !== this.running) {
    this.running = true
  }
}

Car.prototype.off = function(off) {
  if (off !== false) {
    this.running = false
  }
}

Car.prototype.driveTo = function(place) {
  //place returns a boolean
  if (this.running === true) {
    place = true
  } else {
    place = false
  }
  return place
}

Car.prototype.park = function(park) {
  if(this.running !== true) {
    park = true
  } else {
    park = false
  }
  return park
}

Car.prototype.pickUp = function(name) {
  if (this.running === true && this.passengers.length < 3) {
    this.passengers.push(name)
    return true
  } else {
    return false
  }
}

Car.prototype.dropOff = function(name) {
  console.log(this.passengers);
  if (this.running === true && this.passengers.includes(name)) {
    this.passengers.splice(this.passengers.indexOf(name), 1)
    return true
  }

  return false
}

Car.prototype.passengerCount = function() {
  return this.passengers.length
}
