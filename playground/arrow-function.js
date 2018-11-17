var square = x => x * x; //Arrow functions are good for one-line methods
console.log(square(9));

var user = {
    name: 'Luke',
    sayHi: () => {
        console.log(arguments);//Can't reference arguments from arrow func
        console.log(`Hi. I'm ${this.name}`); //Arrow functions don't use "this"
    },
    sayHiAlt () {
        console.log(arguments);//Can use arguments from this alternative func
        console.log(`Hi, I'm ${this.name}`);//"This" does work here
    }
};

user.sayHiAlt(1,2,3);