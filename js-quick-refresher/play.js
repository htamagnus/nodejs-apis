const name = 'Hta';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (useName, useAge, useHasHobbies) => {
    return (
        'Name is ' + useName + ', age is ' + useAge + ' and the user has hobbies: ' + useHasHobbies
    );
};

console.log(summarizeUser(name, age, hasHobbies));