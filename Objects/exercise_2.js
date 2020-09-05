// Factory function
function address(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  }
}

const address1 = address('Yakal', 'Bacoor', 4102);
console.log(address1);

// Constructor function
function Another(street, city, zipCode) {
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}

const address2 = new Another('Molave', 'Dasmarinaz', 4114);
console.log(address2);