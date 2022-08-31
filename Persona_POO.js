
class Persona {
    #cedula
    #direccion
    constructor (cedula, direccion) {
        this.#cedula = cedula;
        this.#direccion = direccion
    }
    getCedula(){
      return this.#cedula
    }
    getDireccion(){
        return this.#direccion
    }
    
    hablar() {
      return "Hola estoy hablando"
    }
  }

  class Trabajador extends Persona {
      #cargo
      constructor(cedula, direccion, cargo){
          super(cedula, direccion)
          this.#cargo = cargo
      }
   
    getCargo(){
        return this.#cargo
    }
  }
  
//   var objeto = new Persona("20035222", "San Felix");
//   console.log(objeto.getCedula())
//   console.log(objeto.getDireccion())
//   console.log(objeto.cedula)
var objeto = new Trabajador("ced", "dir", "Ayudante de cocina")
console.log(objeto)
console.log(objeto.getCargo())
  