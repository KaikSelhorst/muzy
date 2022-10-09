# Muzy

O projeto foi pensado para mostrar a equipe da Clinica Muzy, os tratamentos e conseguir entrar em contato. Utilizei linguagens simples e eficientes como Html
para a estruturação, css para a estilização, e javascript para as funcionalidades. No campo de formulario utilizei o [FormSubmit](https://formsubmit.co/) para a captação
desses email. Somente esse foi o script externo utilizado em toda a aplicação.

## Desafios que enfrentei:

- Por utilizar linguagens Simples, para uma aplicação desse nivel o codigo acaba sendo um pouco complexo mas com a utilização de ferramentas como [Webpack](https://webpack.js.org/)
  e [Cleancss](https://www.npmjs.com/package/clean-css) esses problemas foram sanados.
- Imagens com uma variação de cor não muito especifica, durante o design encontrei problemas com as imagems da pagina Equipe que estavam com uma coloração meio estranha
  mas com a ferramenta de edição de imagem do proprio [figma](https://www.figma.com/) conseguir resolver.

## Implementações futuras:

- Um back-end proprio para o envio de email.
- Modificações no script de animação ao scroll.
- Melhorias nas imagens da pagina Equipe

<br>

## Instalação do Projeto


### Requisitos recomendados:

- Node / Npm
- Clean-css-cli
- LiveServer (extenção vscode)

<br>

Depois de verificar os requisitos recomendados faça:

```sh
git clone https://github.com/KaikSelhorst/muzy.git
```

Abra o repositorio baixado no seu Editor de codigo [Vscode](https://code.visualstudio.com/), [SublimeText](https://www.sublimetext.com/), etc...

### Para o Javascript

Vá no terminal e com o node / npm instalado execute:

Para desenvolvimento:

```sh
npm run dev
```

Para produção ou commit final:

```sh
npm run build
```

### Para o CSS

Como o css no final está sendo compilado utilizando `Clean-css-cli` o codigo deverá ser executado a cada mudança no css

```sh
cleancss -o ./style/style.min.css ./style/style.css
```

Caso não tenha instalado o `Clean-css-cli` execute:

```sh
npm install Clean-css-cli
```

Caso não queira fazer isso basta ir nos arquivo `.html` e modificar a linha

```html
<link rel="stylesheet" href="/style/style.min.css" />
```

Para

```html
<link rel="stylesheet" href="/style/style.css" />
```

Feito isso Divirta-se.


## Desenvolvedor

<br>

<img src='https://github.com/kaikselhorst.png' width='80px' />

[KaikSelhorst](https://github.com/KaikSelhorst/)
