import "./styles.scss";

/**
 * @fileOverview
 * Questo è un esempio di descrizione del file main.js
 * 
 * @author
 * Lorenzo
 * 
 * @example
 * var str = "abc";
 * console.log(repeat(testFn('ciao')); // ciao Lorenzo
 */



/**
 * A person object with name, age and sayName method.
 * @typedef {Object} PersonLiteral 
 * @property {string} name The person's name.
 * @property {number} age The person's age.
 * @property {Function} sayName A function that alerts the person's name.
 * Per le differenze vedere {@link Person} and [Person's name property]{@link Person#name}
 */
/**
 * @type {PersonLiteral} eventuale descrizione dell'oggetto 'personLiteral'
 */
const personLiteral = {
    name: 'Joe',
    age: 32,
    sex: 'male',
    sayName () {
        alert(this.name)
    }
}

/**
 * Prova di descrizione di funzione
 *
 * @deprecated
 * @param {String} str
 * @see Person#sayName
 * @returns {String} stringa
 */
function testFn (str) {
    return str + personLiteral.name + '!';
}


/** 
 * Class to create a person object. 
 * @class
 * @tutorial overview
 */
class Person {
    constructor(props) {
      /** 
       * @property {string} name The person's name.
       */
      this.name = props.name
      /** 
       * @property {number} age The person's name.
       */
      this.age = props.age
      /** 
       * @property {Function} sayName A method to annouce the person's name.
       * {@link https://jsdoc.app/tags-inline-link.html LinkTAG}
       * @since 10.2.0
       * @see The <a href="https://jsdoc.app/tags-inline-link.html">Link TAG</a>.
       * @returns void
       */
      this.sayName = () => alert(this.name)
    }
  }
  
  const guy = new Person({
    name: 'Lorenzo',
    age: 32
  })
  guy.sayName()



console.log(testFn('ciao'));