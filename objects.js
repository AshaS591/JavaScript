let graduate={
    name:'asha',
    yop:2024,
    stream:'CSE',
    degree:'btech',
    courses:['SE','blockchain','iot','c','python'],
    scores:{firstsem:8.25,fifthsem:9.64}

}

console.log(graduate);

//accessing values from an objects using keys & .operator
console.log(graduate.courses);
console.log(graduate.scores.fifthsem);

//update
graduate.name="Asha S"
console.log(graduate);

//add
graduate.age=21
console.log(graduate);

//delete
delete graduate.degree
console.log(graduate);