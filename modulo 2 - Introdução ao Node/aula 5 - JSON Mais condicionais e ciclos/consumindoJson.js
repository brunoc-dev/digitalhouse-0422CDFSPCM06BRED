const fs = require('fs');

// Convertendo JavaScript em JSON
const catalogo = [
  {
    codigo: 2,
    titulo: 'Donnie Darko',
    duracao: 2,
    atores: ['Jake Gyllenhaal', 'Drew Berrymore'],
    anoDeLancamento: 2001,
    emCartaz: false
  },
  {
    codigo: 4,
    titulo: 'Encanto',
    duracao: 1.50,
    atores: ['Stephanie Beatriz', 'Maluma', 'Rhenzy Feliz'],
    anoDeLancamento: 2021,
    emCartaz: true
  }
];

console.log(JSON.stringify(catalogo));

// Importar e converter JSON para JavaScript
const catalogoImportado = fs.readFileSync('./exercicio_pg/database/catalogo.json', 'utf-8');

// Convertendo JSON string para javascript
const jsonConvertido = JSON.parse(catalogoImportado);

console.log(jsonConvertido);
