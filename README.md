# jsdoc-example

Per documentare il codice javascript è possibile usare [jsdoc](https://github.com/jsdoc/jsdoc) con il template [Minami](https://github.com/nijikokun/minami)

## Uso

```sh
# Installare le dipendenze
> npm install

# Server di sviluppo (ES6 e SASS)
> npm start

# Generazione documentazione
> npm run doc
```

In VSC usare l'estenzione [Document this](https://github.com/joelday/vscode-docthis) tramite lo shortcut `Ctrl+Alt+D` and again `Ctrl+Alt+D` è possibile creare i commenti nel formato di jsDoc oppure si può scrivere prima della dichiarazione /** e VSC completerà automaticamente. Aggiungere nelle configurazioni di VSC anche la seguente stringa per avere il controllo sui tipi:
```json
"javascript.implicitProjectConfig.checkJs": true
```
