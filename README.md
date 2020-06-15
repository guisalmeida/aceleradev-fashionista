# Projeto: Fashionista E-commerce
<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"/>
</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/e94159a9-8416-4740-902b-eac7257beca1/deploy-status)](https://app.netlify.com/sites/fashionista-shop/deploys)
<br>
## [Demo do projeto](https://fashionista-shop.netlify.app/)

## Principais linguagens, tecnologias e ferramentas utilizadas

-   HTML
-   CSS (utilização de BEM CSS para construção de estilos)
-   Javascript
-   Node
-   React (principal biblioteca para construção do site - inclusive uso de Hooks)
-   Redux (para gerenciamento de estados)
-   React Router (para aplicar múltiplas rotas)
-   React Debounce Input (para aplicar efeito debounce no input da busca em tempo real)
-   Responsividade e adaptação de aplicação web para front

<br>

## Cenário

Segundo o levantamento, da Webshoppers (Ebit / Nielsen), os e-commerces brasileiros faturaram cerca de R\$ 53,2 bilhões em 2018. O segmento “Moda e Acessórios” representa 5,6% do faturamento no varejo online, ocupando a segunda posição entre as categorias de produtos com mais pedidos, perdendo apenas para o segmento de eletroeletrônicos.

Oferecer a melhor experiência aos usuários que interagem com os produtos no desktop, e principalmente em dispositivos móveis, é fundamental para se manter vivo e competitivo nesse segmento.

<br>

## Objetivo

Como um profissional front-end, você será responsável por desenvolver as principais funcionalidades de um e-commerce de moda feminina, o Fashionista, garantindo a melhor experiência possível para os usuários interagirem com os produtos.

<br>

## Regras

-   [x] Deve implementar as funcionalidades apresentadas nos wireframes / layouts.

-   [x] Deve ser mobile first, possuindo uma experiência satisfatória tanto em mobile quanto em desktop.

-   [x] Deve consumir a API do catálogo de produtos.

-   [x] O estado global da aplicação deverá ser gerenciado com Redux

-   [x] Deve ser um SPA (Single Page Application).

-   [x] Todos os produtos da API devem ser exibidos.

-   [x] Utilize BEM CSS para escrever os estilos.

-   [x] Deve-se fazer deploy do projeto, servindo-o no Netlify.

-   [x] Não utilize frameworks CSS como Bootstrap, Foundation e afins.

### Requisitos obrigatórios

-   Para cada item do catálogo de produtos as seguintes informações devem estar na página:

    -   [x] Imagem
    -   [x] Nome
    -   [x] Preço
    -   [x] Status “Em promoção”
    -   [x] Preço promocional (se disponível)
    -   [x] Tamanhos disponíveis
    -   [x] Selo “Promoção”

-   [x] Deve ser possível adicionar itens por tamanho no carrinho de compras.

-   [x] Deve ser possível visualizar os itens adicionados no carrinho de compras, exibindo imagem, nome, preço e quantidade.

-   [x] Deve ser possível remover itens do carrinho de compras.

### Requisitos opcionais

-   [x] O carrinho de compras deve persistir entre reloads de página.

-   [x] Alguns produtos não tem todos os tamanhos disponíveis, mostre apenas os tamanhos disponíveis em estoque.

-   [x] Implemente a funcionalidade de busca em tempo real.

<br>

## Layouts

Os layouts abaixo servem de referência visual das funcionalidades, sintam-se livres para segui-las ou implementá-las com base em outras referências, desde que atenda às regras e aos requisitos obrigatórios.
<br><br>

### Layouts: Home (catálogo)

<img width='580' src='https://user-images.githubusercontent.com/45580434/79029201-c67bb500-7b69-11ea-9396-a85edae52eaa.png'>

<br>

### Layouts: Página do produto

<img  width='580' src='https://user-images.githubusercontent.com/45580434/79029203-caa7d280-7b69-11ea-8f1d-a0586ab9c56f.png'>

<br>

### Layouts: Indicador de produtos no ícone do carrinho

<img  width='580' src='https://user-images.githubusercontent.com/45580434/79029206-cda2c300-7b69-11ea-914b-60f4b790ebf4.png'>

<br>

### Layouts: Carrinho de compras aberto

<img width='580' src='https://user-images.githubusercontent.com/45580434/79029208-cf6c8680-7b69-11ea-8073-4b1105df9c9f.png'>

<br>

### Layouts: Busca em tempo real

<img  width='580' src='https://user-images.githubusercontent.com/45580434/79029211-d1cee080-7b69-11ea-91a8-684f78c21bef.png'>

<br>
<br>

## Como rodar a aplicação

No terminal, clone o projeto:

```
git clone git@github.com:GuiSAlmeida/aceleradev-fashionista.git
```

Entre na pasta do projeto:

```
cd aceleradev-fashionista
```

Instale as dependências:

```
npm install
```

Execute a aplicação:

```
npm start
```

<br>

## Autor

**Guilherme Almeida**: _Desenvolvedor web front-end_
-   [Site](guisalmeida.com)
-   [Linkedin](https://www.linkedin.com/in/guisalmeida/)
-   [Github](https://github.com/guisalmeida)
-   [Email](guisalmeida.dev@gmail.com)

<br>

## Licença

The [MIT License]() (MIT)