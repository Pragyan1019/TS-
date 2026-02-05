function greet(name:string):string{ 
    return `Hello, ${name}`;
}

const message : string = greet("World")
console.log(message)
const uniquekey :symbol = Symbol("Description");
const obj = {
        [uniquekey]:"This is a unique property"
}
console.log(obj[uniquekey])

const data = JSON.parse('{"name":"Pragyan","age":19}')
console.log(data.name)

let v: any = true;
v="string"
console.log(Math.round(v))
const  names : string[] =["Messi","Ney","Suarez"];
console.log(names.slice(1,3))
names.push("Inesta")
console.log(names)
console.log(names.map((user:string ,index:number):string => `${user} and ${index}`))

const tuple:readonly [number,string,boolean]=[1,"Pragyan",true]
tuple.push("this doesnot have to be a particular string");
console.log(tuple)
const car: {type:string ,model:string , year:number}=
{
    type :"Ford",
    model:"Corolla",
    year:2002
};
console.log(car)
const car1 :{type:string , mileage?:number}={
        type:"Ford"
}
car1.mileage = 2000;
console.log(car1)
const nameageMap :{[index:string]:number}={}
nameageMap.Hari= 25;
console.log(nameageMap)