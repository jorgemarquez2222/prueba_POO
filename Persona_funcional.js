
var Persona = {
    cedula:"3423423",
    direccion: {
      casa: "direccion de la casa"
    },
    hablar: () => {
      return "Hola estoy hablando"
    },
  }

var Trabajador = {
    ...Persona,
    cargo: "Ayudante de cocina"
}
  
//   console.log(Persona.cedula)
//   console.log(Persona.direccion)
  console.log(Trabajador.cedula)
  console.log(Trabajador.cargo)
  