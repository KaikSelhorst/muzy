# Muzy

O projeto foi pensado para mostrar a equipe da clínica Muzy, os tratamentos e conseguir entrar em contato. Utilizei linguagens simples e eficientes como Html
para a estruturação, css para a estilização, e javascript para as funcionalidades. No campo de formulário utilizei o [FormSubmit](https://formsubmit.co/) para a captação desses emails. Somente esse foi o script externo utilizado em toda a aplicação.

## Desafios que enfrentei:

- Por utilizar linguagens Simples, para uma aplicação desse nível o código acaba sendo um pouco complexo, mas com a utilização de ferramentas como [gulp](https://gulpjs.com/) esses problemas foram sanados.
- Imagens com uma variação de cor não muito específica, durante o design encontrei problemas com as imagens da página Equipe que estavam com uma coloração meio estranha, mas com a ferramenta de edição de imagem do próprio [figma](https://www.figma.com/) conseguir resolver.

## Implementações futuras:

- Um back-end proprio para o envio de email.
- ~~Modificações no script de animação ao scroll.~~
- Melhorias nas imagens da página Equipe

<br>

## Instalação do Projeto

### Requisitos minimos:

- Node / Npm

<br>

```sh
git clone https://github.com/KaikSelhorst/muzy.git
```

Abra o repositorio baixado no seu Editor de codigo [Vscode](https://code.visualstudio.com/), [SublimeText](https://www.sublimetext.com/), etc...

```sh
npm install
```

<br>

## Automatização
Esta automatização esta sendo feita com [gulp](https://gulpjs.com/),ele vai automatiza o js e css!

*Os comandos basico para o funcionamento são:*

Comando para Desenvolvimento
```sh
gulp
```

Comando para produção(commit):

```sh
gulp build
```

Caso não queira utilizar o gulp, basta mudar as seguintes linhas:

*JavaScript*
```html 
<script src="./main.js"></script>

<!--Para-->

<script type='module' src="./script/script.js"></script>

```
*Css*
```html 
<link rel="stylesheet" href="/style.min.css" />

<!--Para-->

<link rel="stylesheet" href="/style/style.css" />

```

Feito isso Divirta-se.

## Desenvolvedor

<br>

<img src='https://github.com/kaikselhorst.png' width='80px' />

[KaikSelhorst](https://github.com/KaikSelhorst/)
