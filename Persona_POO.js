// 1. polimorfismo
// 2. abstracción
// 3. encapsulación.
// 4. Herencia
class Persona {
  #nombre
  cedula
  direccion
  constructor(nombre, cedula, direccion) {// solamente inicializa variables
    this.cedula = cedula
    this.#nombre = nombre
    this.direccion = direccion
  }
  saludo() { // métodos
    return `Hola soy  ${this.#nombre}  Saludando`
  }
  static saludo2() { // métodos
    return `Hola soy  ${this.#nombre}  Saludando`
  }
  // setters y getters
  setNombre(nombreNuevo) {
    this.#nombre = nombreNuevo
    return this.#nombre
  }
  getNombre() {
    return this.#nombre
  }
}

class Empleado extends Persona {
  cargo 
  constructor(nombre, cedula, direccion, cargo){
    super(nombre, cedula, direccion)
    this.cargo = cargo
  }
  saludo(){
    return 'Saludo desde Empleado'
  }
}

const objFran = new Persona('Fran', '33333', 'Miami')
const objOsiris = new Persona('Osiris', '1111', 'Orlando')
console.log(objFran)
console.log(objFran.saludo())
console.log(objOsiris)
console.log(objOsiris.saludo())

console.log('Nombre : ', objFran.nombre)
console.log('Nombre : ', objFran.setNombre('Pepe'))
console.log(objFran.getNombre())
// console.log('Nombre : ', objFran.getNombre())
const objEmpleado = new Empleado('Franchesco', '999999','Miami', 'Gerente')
console.log(objEmpleado.saludo() )