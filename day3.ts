const x:unknown ="Hello";
console.log((x as string).length)

const y = "Visca el Barca"
console.log(((x as unknown)as number).length)

class Person{
    name:string;
}

const person = new Person();
person.name="Jane"
console.log(person.name);

//parameterized constructor
class Person {
  name: string;
    public constructor(name:string){
        this.name = name
    }
}

const person = new Person("Jane");
console.log(person.name)

//interface
interface Shape{
        getarea: ()=> number;
}

class Rectangle implements Shape{
    public constructor(protected readonly width:number,protected readonly height:number){}
    public getarea():number{
            return this.width*this.height
    }
    public toString():string{
        return `Rectangle[width=${this.width}, height=${this.height}]`
    }
}
class Square extends Rectangle{
    public constructor(width:number){
        super(width,width)
    }
    public override toString(): string {
        return `Square[width=${this.width}]`
    }
}

const sq = new Square(10)
console.log(sq.toString())


function add<s,t>(a:s,b:t){
    return [a,b];
}
console.log(add<string,number>("Hello",10));

class NamedValues<t>{
    private _value:t | undefined;
    constructor(private name:string){
    }
    public setvalue(value:t){
        this._value=value;
    }
    public getvalue():t|undefined{
        return this._value;
    }
    public toString():string{
        return `name=${this.name} and number = ${this._value}`
    }
}
const out = new NamedValues<number>("Hello")
console.log(out.toString())

interface Point {
    x:number,
    y:number
}

let partialPoint : Partial<Point>={}
partialPoint.x = 10
console.log(partialPoint)

let reqdPoint : Required<Point>={
    x:40,
    y:50
}
console.log(reqdPoint)

const nameagegap: Record<string,number>={
    "Bob":21,
    "Alice":30
}
console.log(nameagegap)

interface Person{
    name:string,
    age:number,
    location ?: string
}

const bob :Omit<Person,'age' | 'location'>={
    name:"bob"
}
console.log(bob)

interface Per{
    name:string,
    age:number,
    location:string
}
const marley :Pick<Per,"name" >={
    name:"Bob Marley"
}
console.log(marley)