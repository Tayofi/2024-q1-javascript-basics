class CheesyDibbles {
    constructor(cheesiness) {
this.type = cheesiness;
this.brand = "fritoLay";
this.cost = 2.3;
this.age = 83;
 }

 eat() {
    console.log(`Chomp chomp chomp ${this.cheesiness}, is expired >:(`)
 }
}
let cheesePuffs = new CheesyDibbles("cheesePuffs");
cheesePuffs.brand = "cheesePuffBrand";
cheesePuffs.age = 0.2;

let cheetoes = new CheesyDibbles("cheetoes");

cheetoes.age = 3000;

eat(cheetoes);
eat(cheesePuffs);

