const person = {
    name: 'Hta',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();
