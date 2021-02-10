// const person:{
//     name: string;
//     age: number
// } 

// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// }={
//     name: "Mamadou",
//     age: 24,
//     hobbies: ["sports", "cooking"],
//     role: [2, 'auhtor']
// }

enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

const person ={
    name: "Mamadou",
    age: 24,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN
}


let favoriteactivities: any[];

favoriteactivities = ['running', 1]

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

console.log(person.name)

if(person.role === Role.ADMIN){
    console.log("that is correct")
}