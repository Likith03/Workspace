
function AddPower(pow:number){
    return function(targetClass:any){
        let tc = new targetClass();
        return class {
            firstname = tc.firstname;
            lastname = tc.lastname;
            power = pow;
        }
    }
};
// ComicHero = AddPower(7)(comicHero);
@AddPower(7)
class ComicHero{
    firstname = "Bruce";
    lastname = "Wayne"
};

console.log( new ComicHero() );