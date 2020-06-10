function Laptop(name, model, serial_number, year, ram, rom, drive, weight){
    //this = { }
    this.name = name;
    this.model = model;
    this. serial_number = serial_number;
    this.year = year;
    this.ram = ram;
    this.rom = rom;
    this.drive = drive;
    this.weight = weight;
    this.getSize = function(){
        return "Size of RAM: " + this.ram + "; size of ROM: " + this.rom;
    }
    //return this 
}

function Ultrabook(){
    Laptop.call(this);
    var _weight = 0;
    this.setWeight = function(weight){
        if(weight > 1.5)
            throw "Weight shouldn't be more then 1.5kg. It isn't Ultrabook!"
        _weight = weight;
    }
    this.getNameAndYear = function(){
        return this.name + ": " + this.year; 
    }
}

var hp = new Laptop('HP', 'bla-bla', 'ty-ty', 2015, 10, 4, 'yes', 2.0);
console.log(hp);
console.log(hp.getSize());

var asus = new Ultrabook();
asus.name = 'asus';
asus.year = 2020;
console.log(asus);
console.log(asus.getNameAndYear());
console.log(asus.setWeight(2.0));
