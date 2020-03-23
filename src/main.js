import "./styles.scss";



/**
 * A person object with a name and age.
 * @typedef {Object<string, any>} Person
 * @property {string} name The name of the person.
 * @property {number} age The age of the person.
 * @property {('male' | 'female' )} sex  - esempio di enumeration
 */
/**
 * @type {Person} eventuale descrizione dell'oggetto 'person'
 */
const person = {
    name: 'Joe',
    age: 32,
    sex: 'male'
}

/**
 * Prova di descrizione di funzione
 *
 * @param {String} str
 * @returns {String} stringa
 */
function testFn (str) {
    return str + person.name + '!';
}

/**
 * Prova di descrizione di classe
 *
 * @class ProvaClass
 */
class ProvaClass {
    /**
     * Descrizione di costruttore
     *
     * @memberof ProvaClass
     */
    constructon () {

    }
}



console.log(testFn('ciao'));