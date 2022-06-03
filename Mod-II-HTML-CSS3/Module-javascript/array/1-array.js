const users = ['Arthur', 'Bianca', 'Jocksan']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W'),
}

const persons = [
    {
        name: 'Jocksan',
        age: 32,
        gender: gender.MAN,
    },
    
    {
        name: 'Arthur',
        age: 25,
        gender: gender.MAN,
    },

    {
        name: 'Bianca',
        age: 28,
        gender: gender.WOMAN,    
    },

    {
        name: 'Neuza',
        age: 54,
        gender: gender.WOMAN,    
    },

];

//retornar a quantidade de itens de um array
console.log('Items: ', persons.length);

//verificar se é array
console.log('A variável persons é uma array: ', Array.isArray(persons));

//Iterar os itens no array;
persons.forEach(persons =>{
    console.log(`Nome: ${persons.name} \n Age: ${persons.age}`);
})

// persons.forEach((person, index, arr) =>{
//     console.log(`Nome: ${person.name} index: ${index}`, arr);
// })

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens: ', mens);

//retornar um novo
const personWithCourse = persons.map(person =>{
    person.course = 'Introdução ao Javascript';
    return person;
})

console.log('\nPessoas com a adição do course', personWithCourse);

//Transformando um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age,person) => {
                            age += person.age;
                            return age;
                        },0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);
