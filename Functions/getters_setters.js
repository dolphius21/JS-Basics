const person = {
  firstName: 'Jeffrey',
  lastName: 'Winger',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = 'Britta Perry';

// getters => access properties
// setters => change or mutate them

console.log(person);
