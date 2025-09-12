# Projeto Mini Loja

<div align="left">
  <img src="https://img.shields.io/badge/Status-Em_Desenvolvimento-orange" alt="Status">
  <img src="https://img.shields.io/badge/NodeJS-v20.19.4-yellow" alt="Java">
  <img src="https://img.shields.io/badge/React-v19.1.1-blue" alt="React">
</div>

## **Curso Mais Prati - Exercício 7 - Mini Loja - Desafio CSS**

## **Pré-requisitos**

- [`NodeJS`](#modo-de-instalação)
- [`React`](#instale-as-dependências)

### Exercício CSS MODULES

Exemplo de Tela a construir:

- Navbar (fixa): logo, toggle de tema (claro/escuro com persistência) e badge do carrinho.

- Grid de produtos (cards) responsivo: ≤480px: 1 col · 481–768px: 2 cols · 769–1024px: 3 cols · ≥1025px: 4 cols.

- Card de produto: imagem 1:1 com espaço reservado, título 2 linhas com ellipsis, preço, rating (★), tag (“Novo”/“Promo”), botão “Adicionar” com variantes solid/outline/ghost.

Estados/Interações obrigatórios:

- Hover (elevação/sombra), focus visível, disabled, loading com skeleton (simule atraso).

- Dark mode aplicado a cores/sombras/bordas.

Acessibilidade:

- Navegação por teclado, `aria-*` onde fizer sentido, contraste ≥ 4.5:1.

Animações:

- Transições de 150–250ms (usar transform/opacity).

Dados:

- Exibir 6 produtos (id, título, preço, rating, tag, imagem placeholder). Imagens com lazy loading.

Entregáveis:

- Quatro pastas: `01-css-global/`, `02-css-modules/`, `03-tailwind/`, `04-styled-components/`.
- Cada pasta com os componentes (`Navbar`, `ProductCard`, `Button`, `Skeleton`) e um README curto.

Restrições:

- Em cada versão, use apenas a técnica indicada (global, modules, utilitários, CSS-in-JS com `ThemeProvider` e props).

Critérios de aceite:

- Breakpoints exatamente como descritos.
- Dark mode com persistência.
- Focus ring visível.
- Skeleton sem layout shift.
- Variantes do botão consistentes nos dois temas.
- Organização clara de pastas e uso de tokens (cores, espaçamentos, raio, sombras).

## **MODO DE INSTALAÇÃO**

### Instale o `Node.js` na sua máquina.

 1. Você pode baixar o `Node.js` no [link](https://nodejs.org/en/download/) e instalar na sua máquina.

 2. Ou você pode utilizar o `nvm` para isso.

**Baixe e instale o `nvm`**

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

**Reinicie o `shell`**

```sh
\. "$HOME/.nvm/nvm.sh"
```

**Baixe e instale `Node.js`**

```sh
nvm install 22
```

**Verifique a versão do `Node.js`**

```sh
node -v # Should print "v22.15.0".
nvm current # Should print "v22.15.0".
```

**Verifique a versão do `npm`**

```sh
npm -v
```

<br />

### **Baixe o repositório com os exercícios**

```sh
# Clona o repositório para sua máquina

https://github.com/jetchaolin/arch-linux-starter-pack.git # Https

git clone git@github.com:jetchaolin/Portifolio.git # Ssh

# Navegue até a pasta do exercício
cd arch-linux-starter-pack/02-css-modules/
```

## **Instale as dependências**

```sh
npm i # Ou npm install
```

## Rodando a aplicação


```sh
#  Rode o comando abaixo no diretório do exercício
npm run dev
```
Acesse o APP na url `http://localhost:5173/`
