// enum cardinalDirections{
//     North=101,
//     East,
//     West,
//     South
// }

// let direction = cardinalDirections.East;
// console.log(direction)
// type Caryear = number;
// type Cartype = string;
// type Carmodel = string;
// type Car ={
//     year :Caryear,
//     type:Cartype,
//     model : Carmodel
// }

// const caryear:Caryear =2001;
// const cartype:Cartype = "Toyota";
// const carmodel : Carmodel = "Corolla";
// const car:Car={
//     year:caryear,
//     type:cartype,
//     model:carmodel
// }
// console.log(car)

// interface Rectangle{
//         height :number;
//         width :number
// }
// interface ColoredReactangle extends Rectangle{
//     color:string
// }

// const colorrectangle :ColoredReactangle={
//     height:100,
//     width:100,
//     color:"White"
// }
// console.log(colorrectangle)

// function printstatus(code:string | number){
//         console.log(`The status code is ${code}` );
// }
// printstatus("200");
// printstatus(200)

// function gettime():number{
//         return  new Date().getTime();
// }
// console.log(gettime())

function add(a:number,b:number,c?:number){
    return a+b+(c || 0);
}
console.log(add(10,2))