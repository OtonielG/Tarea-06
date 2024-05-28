function crearUsuario(nombre, apellido, email, dpi, municipio, calle, numero) {
  return {
    nombre: nombre,
    apellido: apellido,
    email: email,
    dpi: dpi,
    direccion: {
      municipio: municipio,
      calle: calle,
      numero: numero
    },
    estado: true,
    recuperarClave: function () {
      console.log('Recuperar clave...');
    },
    cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
      this.direccion.municipio = nuevoMunicipio;
      this.direccion.calle = nuevaCalle;
      this.direccion.numero = nuevoNumero;
    }
  };
}

let user0 = crearUsuario('Paola', 'Ortiz', 'paola@company.ru', '1234567890101', 'Jocotenango', 'Calle ancha', 25);
let user1 = crearUsuario('Paolo', 'Ortega', 'paolo@company.ru', '2234567890102', 'Jocotenango', 'Calle ancha', 25);
let user2 = crearUsuario('Pablo', 'Ruiz', 'pablo@company.ru', '3234567890103', 'Alta Verapaz', 'Tactic', 38);
let user3 = crearUsuario('Carlos', 'Perez', 'carlos@company.ru', '4234567890104', 'Chiquimula', 'Ipala', 18);
let user4 = crearUsuario('Oscar', 'Chaparro', 'oscar@company.ru', '5234567890105', 'Guatemala', '6', 25);
let user5 = crearUsuario('Pepe', 'Escobar', 'pepe@company.ru', '6234567890106', 'Izabal', 'Puerto San Jose', 13);

