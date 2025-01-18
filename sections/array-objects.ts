

interface Person {
    Name : string;
    Age: number;
    isActive : boolean;
    
}


 export let Fernando: Person = {
    Name: 'Fernando',
    Age: 16,
    isActive: false

};


let Melissa: Person = {
    Name: 'Melissa',
    Age: 42,
    isActive: true


};



let Juan: Person = {
    Name: 'Juan',
    Age: 42,
    isActive: false

}


let people = [Fernando, Melissa, Juan];

//console.log(people);


for (let i = 0; i <= 2 ; i++){
    let person = people[i]

    console.log(person.Name + ' '+ person.Age );

}