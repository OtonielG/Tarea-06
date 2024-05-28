let user0 = {
  nombre: 'Paola',
  apellido: 'Ortiz',
  email: 'paola@company.ru',
  dpi: '123456789',
  direccion : {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  },
  cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
    this.direccion.municipio = nuevoMunicipio;
    this.direccion.calle = nuevaCalle;
    this.direccion.numero = nuevoNumero;
  }
};

let user1 = {
  nombre1: 'Paolo',
  apellido1: 'Ortega',
  email1: 'paolo@company.ru',
  dpi: '123456790',
  direccion1 : {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  },
  cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
    this.direccion1.municipio = nuevoMunicipio;
    this.direccion1.calle = nuevaCalle;
    this.direccion1.numero = nuevoNumero;
  }
};

let user2 = {
  nombre2: 'Pablo',
  apellido2: 'Ruiz',
  email2: 'pablo@company.ru',
  dpi: '123456728',
  direccion2 : {
    municipio: 'Alta Verapaz',
    calle: 'Tactic',
    numero: 38
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }, 
  cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
    this.direccion2.municipio = nuevoMunicipio;
    this.direccion2.calle = nuevaCalle;
    this.direccion2.numero = nuevoNumero;
  }
};

let user3 = {
  nombre3: 'Carlos',
  apellido3: 'Perez',
  email3: 'carlos@company.ru',
  dpi: '123450987',
  direccion3 : {
    municipio: 'Chiquimula',
    calle: 'Ipala',
    numero: 18
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  },
  cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
    this.direccion3.municipio = nuevoMunicipio;
    this.direccion3.calle = nuevaCalle;
    this.direccion3.numero = nuevoNumero;
  }
};

let user4 = {
  nombre4: 'Oscar',
  apellido4: 'Chaparro',
  email4: 'oscar@company.ru',
  dpi: '120006789',
  direccion4 : {
    municipio: 'Guatemala',
    calle: '6',
    numero: 25
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }, 
  cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
    this.direccion4.municipio = nuevoMunicipio;
    this.direccion4.calle = nuevaCalle;
    this.direccion4.numero = nuevoNumero;
  }
};

let user5 = {
  nombre5: 'Pepe',
  apellido5: 'Escobar',
  email5: 'pepe@company.ru',
  dpi: '987654321',
  direccion5 : {
    municipio: 'Izabal',
    calle: 'Puerto San Jose',
    numero: 13
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  },
  cambiarDireccion: function(nuevoMunicipio, nuevaCalle, nuevoNumero) {
    this.direccion5.municipio = nuevoMunicipio;
    this.direccion5.calle = nuevaCalle;
    this.direccion5.numero = nuevoNumero;
  }
};

console.log(user0);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);