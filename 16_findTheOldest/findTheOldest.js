const findTheOldest = function(obj) {
    const currentYear = new Date().getFullYear();

    return obj.reduce((oldest, person) => {
        const yearOfDeath = person.yearOfDeath || currentYear;
        const age = yearOfDeath - person.yearOfBirth;
        return age > oldest.age ? { name: person.name, age } : oldest;
    }, { name: "", age: 0 });
};

// Do not edit below this line
module.exports = findTheOldest;
