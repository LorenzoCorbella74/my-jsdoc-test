# jsdoc-example

Per documentare il codice javascript è possibile usare [jsdoc](https://github.com/jsdoc/jsdoc) con il template [Minami](https://github.com/nijikokun/minami) che generano un sito web di documntazione del progetto di partenza. Per come specificare i tipi disponibili vedere il seguente [postr](https://medium.com/@trukrs/type-safe-javascript-with-jsdoc-7a2a63209b76) mentre per i tipi di tag vedere il [post](https://dzone.com/articles/introduction-jsdoc).
OLtre a processare tutti i file. js jsDoc processa anche i file .md (considerati come "tutorial") all'interno della cartella predisposta permettendo di avere una gerarchia di file configurabile.
Tramite il [plugin](https://www.npmjs.com/package/jsdoc-to-markdown) è possibile generare file .md invece di pagine html.

## Uso

```sh
# Installare le dipendenze
> npm install

# Server di sviluppo (ES6 e SASS)
> npm start

# Generazione documentazione
> npm run doc

```

In VSC usare l'estenzione [Document this](https://github.com/joelday/vscode-docthis) che tramite lo shortcut `Ctrl+Alt+D` and again `Ctrl+Alt+D` è possibile creare i commenti nel formato di jsDoc oppure si può scrivere prima della dichiarazione /** e VSC completerà automaticamente. Aggiungere nelle configurazioni di VSC anche la seguente stringa per avere il controllo sui tipi:
```json
"javascript.implicitProjectConfig.checkJs": true
```
