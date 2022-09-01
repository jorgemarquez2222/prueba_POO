
const Persona = {
  nombre: 'Fran',
  cedula: '20035222',
  direccion: 'Casa en San Felix',
  saludo: function() {
    return 'Hola Saludando'
  }
}
const Persona2 = {
  nombre: 'Osiris',
  cedula: '11111111',
  direccion: 'Casa en Miami',
  saludo: function() {
    return 'Hola Saludando2'
  }
}

const Epleado = {
  ...Persona2,
  nombre: 'Pepe',
  cedula: '22222222',
  direccion: 'Casa en Orlando',
  cargo: function() {
    return 'Gerente'
  }
}

console.log(Epleado)