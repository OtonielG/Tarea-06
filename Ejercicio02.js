let user0 = {
  nombre: 'Paola',
  apellido: 'Ortiz',
  email: 'paola@company.ru',
  direccion : {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }
};

let user1 = {
  nombre1: 'Paolo',
  apellido1: 'Ortega',
  email1: 'paolo@company.ru',
  direccion1 : {
    municipio: 'Jocotenango',
    calle: 'Calle ancha',
    numero: 25
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }
};

let user2 = {
  nombre2: 'Pablo',
  apellido2: 'Ruiz',
  email2: 'pablo@company.ru',
  direccion2 : {
    municipio: 'Alta Verapaz',
    calle: 'Tactic',
    numero: 38
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }
};

let user3 = {
  nombre3: 'Carlos',
  apellido3: 'Perez',
  email3: 'carlos@company.ru',
  direccion3 : {
    municipio: 'Chiquimula',
    calle: 'Ipala',
    numero: 18
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }
};

let user4 = {
  nombre4: 'Oscar',
  apellido4: 'Chaparro',
  email4: 'oscar@company.ru',
  direccion4 : {
    municipio: 'Guatemala',
    calle: '6',
    numero: 25
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }
};

let user5 = {
  nombre5: 'Pepe',
  apellido5: 'Escobar',
  email5: 'pepe@company.ru',
  direccion5 : {
    municipio: 'Izabal',
    calle: 'Puerto San Jose',
    numero: 13
  },
  estado: true,
  recuperarClave: function () {
    console.log('Recuperar clave...')
  }
};

console.log(user0);
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);
console.log(user5);

// ¿Qué diferencias conceptuales observas entre el Problema I y el Problema II? 
// Al organizar los datos en varias variable tenemos: Datos dispersos, acceso menos intuitivo, difícil de escalar y pasar a funciones.
// Al organizar los datos en objetos tenemos: Datos agrupados, acceso intuitivo, fácil de escalar y manejar en funciones.

// ¿Para crear usuarios es más fácil y coherente la manera del Problema I o la manera en que se crean en el Problema II?
// Para organizar datos que van relacionados entre si, es mucho mas fácil y coherente hacerlo en objetos.