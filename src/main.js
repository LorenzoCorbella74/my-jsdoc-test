import "./styles.scss";

/**
 * @fileOverview
 * Questo è un esempio di descrizione che può essere 
 * usato per aggiungere delle informazioni al singolo file
 * 
 * @author
 * Lorenzo C.
 * 
 * @copyright
 * Lorenzo 2020
 * 
 * @license
 * MIT
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
};

/** @constant */
const FORD = 'Ford';

/**
 * Prova di descrizione di funzione
 *
 * @deprecated
 * @param {String} str
 * @see Person#sayNo
 * @returns {String} stringa
 */
export function testFn (str) {
    return str + personLiteral.name + '!';
}

/** 
 * Class to create a person object. See {@tutorial overview}
 * {@link https://jsdoc.app/tags-inline-link.html LinkTAG}
 * @see The <a href="https://jsdoc.app/tags-inline-link.html">Link TAG</a>.
 * @class
 * @since 10.2.0
 * @tutorial overview
 */
export class Person {

    constructor(props) {
        /** 
         * @property {string} name The person's name.
         * @default 'Unnamed'
         */
        this.name = props.name || 'Unnamed';
        /** 
         * @property {number} age The person's name.
         */
        this.age = props.age;
    }


    /**
     * descrizione di metodo
     * @returns void
     * @method
     * @fires Person.sayYes
	 * @Throws Err
     */
    sayYes () {
        alert(this.name)
    }
}

const guy = new Person({
    name: 'Lorenzo',
    age: 32
});
guy.sayName();


console.log(testFn('ciao'));