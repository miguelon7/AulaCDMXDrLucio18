var console = require('console')

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Octagono extends Shape {
    constructor (id, x, y, lado, apotema, angulo) {
        super(id, x, y)
        this.lado = lado
        this.apotema = apotema
	this.angulo = angulo
    }
}

var cuadrado = new Octagono(5, 4, 8, 3, 9, 10);
console.log("El id del octágono es " + Octagono.id)
console.log("El x del octágono es " + Octagono.x)
console.log("El y del octágono es " + Octagono.y)
console.log("El lado del octágono es " + Octagono.lado)
console.log("El apotema del octágono es " + Octagono.apotema)
console.log("El angulo del octágono es " + Octagono.angulo)

