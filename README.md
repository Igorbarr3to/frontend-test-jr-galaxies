# 🪐 Galaxies Frontend Challenge

Este projeto é a minha solução para o Desafio de Frontend Júnior da Galaxies.

**✨ Live Demo:** [https://galaxies-challenge-frontend-jr.vercel.app/](https://galaxies-challenge-frontend-jr.vercel.app/)

---

## 🎯 Objetivos do Desafio

* Mostrar uma lista de galáxias (nome + número de estrelas).
* Implementar busca por nome.
* Exibir detalhes da galáxia selecionada ao lado da lista.
* Construir um layout simples, responsivo e agradável com Material UI.

## ✅ Funcionalidades Implementadas

* **Listagem de Galáxias:** Exibição clara dos dados carregados a partir de um JSON local.
* **Busca por Nome:** Filtragem em tempo real e *case-insensitive* da lista de galáxias.
* **Visualização de Detalhes:** Apresentação detalhada da galáxia selecionada, incluindo imagem e descrição.
* **Layout Responsivo:** Experiência otimizada para Desktop e Mobile.
* **Tema Customizado:** UI com um tema escuro e paleta de cores inspirada no espaço para uma experiência imersiva.
* **UX Fluida:**
    * **Loading Skeletons:** Esqueletos de carregamento para as imagens.
    * **Feedback Visual:** Estados de `hover` e `selected` claros na lista.
    * **Estados Vazios:** Mensagens amigáveis quando nenhuma galáxia é selecionada.
* **Fundo Animado:** Efeito de estrelas em movimento criado com CSS puro para uma imersão sem impacto na performance.

---

## 🛠️ Tecnologias Utilizadas

* **React com Vite:** Ambiente de desenvolvimento moderno e rápido.
* **TypeScript:** Para um código mais seguro, legível e escalável.
* **Material-UI (MUI):** Biblioteca de componentes para uma UI consistente, agradável e responsiva.
* **Hooks do React:**
    * `useState`: Para gerenciamento do estado local.
    * `useEffect`: Para o carregamento inicial dos dados.
    * `useMemo`: Para otimização de performance na filtragem da lista de galáxias.

---

## 🚀 Como Rodar o Projeto Localmente

Para executar este projeto em seu ambiente de desenvolvimento, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Igorbarr3to/frontend-test-jr-galaxies
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd seu-repositorio
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador.

*Este projeto utiliza um arquivo JSON local para os dados, portanto não é necessário configurar variáveis de ambiente.*

---
