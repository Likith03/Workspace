"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AddPower(pow) {
    return function (targetClass) {
        let tc = new targetClass();
        return class {
            constructor() {
                this.firstname = tc.firstname;
                this.lastname = tc.lastname;
                this.power = pow;
            }
        };
    };
}
;
// ComicHero = AddPower(7)(comicHero);
let ComicHero = class ComicHero {
    constructor() {
        this.firstname = "Bruce";
        this.lastname = "Wayne";
    }
};
ComicHero = __decorate([
    AddPower(7)
], ComicHero);
;
console.log(new ComicHero());
