# Challenger Eplus com Vanilla-JS

### Demo: https://desafioeplus.000webhostapp.com/

#### Tecnologias utilizadas:

- HTML
- Vanilla JS
- SCSS
- YARN
- GULP
  ***
  GULP PARA:
  1º para compilar o SCSS em CSS,
  2º para utilizar o Babel para transformar o Javascript em uma versão compatível com todos browsers,
  3º para utilizar o autoprefixer, para o CSS ser compatível em todos os browsers.
  ***

### Rodando no seu ambiente:

Nesse repositório, já existem os arquivos compilados, ou seja, já está pronto para uso, é só abrir o `index.html` dentro da pasta **/src**.
Mas caso precisem compilar,
``Primeiro instalar as dependências... yarn install ou npm install``

- Compila na raiz do projeto o SCSS, que irá ficar dentro da pasta /src/scss/

```
Comando:
npx gulp scss ou somente gulp scss
```

- Compila na raiz do projeto o JS, que irá ficar dentro da pasta /src/js/dist

```
Comando:
npx gulp buildjs ou somente gulp scss buildjs
```
