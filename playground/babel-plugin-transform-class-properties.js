class oldSyntax {
    constructor(){
        this.name = 'Mike';
        this.getName = this.getName.bind(this); // We have to bind it !!!
    }
    getName(){
        return `My name is ${this.name}`;
    }
}

const old = new oldSyntax();
const getname1 = old.getName;
console.log(getname1());

//--------------------------------------------------------------


class newSyntax {
    name = 'Jen';
    getName = () => `My name is ${this.name}`;
}

const newSynta = new newSyntax();
const getname2 = newSynta.getName;
console.log(getname2());
