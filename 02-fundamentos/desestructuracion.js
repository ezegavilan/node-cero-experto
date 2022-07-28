const deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    code: 'Deadpool',
    power: 'Regeneración',

    getHeroe() {
        return `${this.name} - ${this.lastName} - ${this.power}`;
    }
}

function printHeroe({ name, lastName, power, age = 0 }) {
    console.log(`${name} - ${lastName} - ${power} - ${age}`);
}

printHeroe(deadpool);

// w/ arrays

const heroes = ['Deadpool', 'Spiderman', 'Iron Man'];

const [first, , third] = heroes;
console.log(first);
console.log(third);
