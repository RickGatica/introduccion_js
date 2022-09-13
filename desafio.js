/* Crea una lista con los siguientes elementos:

- Tu nombre (string)
- Tu apellido (string)
- Tu edad (number)
- ¿Eres desarrollador de aplicaciones web? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
- Tu pasatiempos favoritos (Array)
- Declara una funcion miActividadFavorita la cual retorne un string con la accion que mas te guste realizar */


let me = new Object();
me.name = "Rick";
me.lastName = "Gatica";
me.age = 29;
me.webDeveloper = true;

let birthday = new Object();
birthday.month = "November";
birthday.day = 12;
birthday.year = 1992;

let myFavoriteBook = new Object();
myFavoriteBook.tittle = "1984";
myFavoriteBook.author = "George Orwell";
myFavoriteBook.date = 1949;
myFavoriteBook.url = "https://en.wikipedia.org/wiki/Nineteen_Eighty-Four";

let hobbies = [
  "Coding",
  "Read Documentation",
  "Play Video Games",
  "Pair Programming with friends",
  "Learn new technologies",
  "Sing alone",
  "Annoy my cat",
];

function miActividadFavorita() {
  return "My favorite activity it's learn about logic behind programming";
}
