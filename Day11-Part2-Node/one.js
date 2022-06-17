let user = "Likith";
let hero = {
    title : "Ironman",
    firstname : "Tony",
    lastname : "Stark",
    city : "New York"
}
// commonjs
/*
module.exports.hero = hero;
module.exports.user = user;*/
/*
module.exports = {
    hero : hero;
    user : user;
}*/

module.exports = { hero, user }