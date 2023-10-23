<!-- Este é um comentário: omitir os tópidos redundantes -->
<!--  **| [Brazil](README.md) | [asdf](README_en.md) |** -->

# Fighters and Dragons

Este projeto foi criado com o objetivo de proporcionar experiência prática em Programação Orientada a Objetos (POO) e nos princípios SOLID no contexto de um jogo de interpretação de papéis (RPG).

## Ferramentas Utilizadas

- **Tecnologias Principais:**
  - Node.js
  - TypeScript

## Estrutura do Projeto

```typescript
fighters-and-dragons/
  ├── src/
  │    ├── Archetypes/
  │    │    ├── Archetype.ts
  │    │    ├── Warrior.ts
  │    │    ├── Mage.ts
  │    │    ├── Necromancer.ts
  │    │    ├── Ranger.ts
  │    │    └── index.ts
  │    ├── Battle/
  │    │    ├── Battle.ts
  │    │    ├── PVP.ts
  │    │    ├── PVE.ts
  │    │    └── index.ts
  │    ├── Fighter/
  │    │    ├── Fighter.ts
  │    │    ├── SimpleFighter.ts
  │    │    └── index.ts
  │    ├── Races/
  │    │    ├── Dwarf.ts
  │    │    ├── Elf.ts
  │    │    ├── Halfling.ts
  │    │    ├── Orc.ts
  │    │    ├── Race.ts
  │    │    └── index.ts
  │    ├── Character.ts
  │    ├── Dragon.ts
  │    ├── Energy.ts
  │    ├── Monster.ts
  │    ├── Utils.ts
  │    └── Index.ts
  ├── package.json
  └── ...
```

## Pré-Requisitos

Node versão igual ou superio a 16.14.0 LTS:

- [Node.js](https://nodejs.org/en/)

<!-- ## Features -->
## Instalação

<details>

<summary>Localmente com NodeJs</summary>

1. Clonar o Repositório

    Primeiro, copie ou clone este repositório para o seu sistema local usando o Git:

    ```bash
    git clone git@github.com:lionelsu/fighters-and-dragons.git && cd fighters-and-dragons
    ```

2. Instalar as Dependências

    Em seguida, instale as dependências do projeto usando o `npm`:

    ```bash
    npm install
    ```

3. Iniciar o Servidor

    Inicie o servidor para executar a API:

    ```bash
    npm run dev
    ```

## Habilidades desenvolvidas

Desenvolvi meu projeto utilizando `Node.js` com `TypeScript`, aplicando conceitos de `Programação Orientada a Objetos (POO)` e princípios `SOLID`. A estrutura é baseada em classes e interfaces bem definidas, facilitando a interação com o banco de dados.
