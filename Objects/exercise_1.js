const address = {
  street: 'Yakal',
  city: 'Bacoor',
  zipCode: 4102
};

function showAddress(address) {
  for (let key in address) {
    console.log(`${key}: ${address[key]}`);
  }
}

showAddress(address);
