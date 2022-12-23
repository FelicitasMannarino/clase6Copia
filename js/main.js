const GATO = {
    raza: "Maine Coon",
    nombre: "Garfield",
    ColorDePelo: "naranja",
    IrAlBanio: function(){
        console.log("Soy un gato y uso el arenero");
    },
    Comer: function(){
        console.log("Me encanta comer lasania");
    }
}

GATO.IrAlBanio();
GATO.Comer();

const {raza,nombre,ColorDePelo} =GATO;
console.log(raza,nombre,ColorDePelo);

let f = function() => {console.log('HOLA CODER')};


