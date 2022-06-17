/*
let value:number = 555;
let value:boolean = true / false;
let value:string = "welcome to your life"; 
let value:object = Object.create(null);
let value:string[] = ['hello', 'there'];
let value:Array<number> = [5, 6];
 
let value:undefined;
let value:null;
let value:any;
*/
 
/* 
let message:(string | number);// union types
message = "hello there";
message = 555;
alert(message); 
*/
 
/*
function adder(num1:number, num2:number):number{
    // return num1 + num2+" is the total";
    return num1 + num2;
};
console.log(adder(5,6));
*/
/* 
function adder(num1:number, num2:number):void{
    console.log(num1 + num2);
};
adder(5,6); 
*/
/*
function adder(num1:number, num2?:number):number{
    if(num2){
        return num1 + num2
    }else{
        return num1 + num1
    }
}
console.log( adder(5) );
*/
 
 
/* 
class Person{
    canwalk:string ;
    constructor(ncw:string){
        this.canwalk = ncw;
    }
}; 
*/
 
class Person{
    constructor(public canwalk:string){}
};
class Hero extends Person{
    private _mission:string = "My Secret Mission";
    static version = 101;
    constructor(
        public title:string, 
        public power:number, 
        public firstname:string, 
        public lastname:string, 
        cw:string){
        super(cw);             
    }
    fullname():string{
        return this.firstname+" "+this.lastname;
    }
    get mission(){
        return this._mission;
    }
    set mission(nmission){
        this._mission = nmission;
    }
};
 
let hero = new Hero("Ironman", 7, "Tony","Stark",'yes i can walk');
console.log(Hero.version);
console.log(hero.mission);
console.log(hero.fullname());
console.log(hero.canwalk);