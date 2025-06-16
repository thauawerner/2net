# 📦 2Net

Projeto web desenvolvido para **controlar e gerenciar de forma completa o estoque de equipamentos da Empresa 2Net Telecom**, e como **projeto integrador das disciplinas de Banco de Dados I, Engenharia de Software I e Programação II da Universidade Federal da Fronteira Sul (UFFS)**. Este repositório contém a estrutura completa da aplicação, incluindo documentação, front-end e scripts de banco de dados.

---

## 📂 Estrutura do Repositório

```
/
├── docs/         # Documentação geral do projeto
├── front/        # Código-fonte do front-end
├── database/     # Scripts e arquivos do banco de dados
└── README.md     # Documentação do projeto
```

---

## 📑 Descrição das Pastas

- **`docs/`**: Documentação do projeto — requisitos, diagramas, especificação de APIs, convenções de código e qualquer outro material técnico ou organizacional.

- **`front/`**: Código-fonte do front-end da aplicação. Pode conter subpastas como:
  - `src/` — componentes, serviços e lógica da aplicação.
  - `public/` — arquivos estáticos.
  - Arquivos de configuração (ex: `package.json`, `vite.config.ts`, etc).

- **`database/`**: Scripts de criação, atualização e migração do banco de dados. Também armazena:
  - Modelos de tabelas.
  - Scripts de carga de dados.
  - Views, procedures e outros artefatos.

---

## 🚀 Como Executar o Projeto

### 📦 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Banco de dados: **PostgreSQL**

---

### 🔧 Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/thauawerner/2net.git
   ```

2. Acesse a pasta `front` e instale as dependências:
   ```bash
   cd front
   npm install
   ```

3. Configure o banco de dados PostgreSQL utilizando os scripts disponíveis em `/database`.

---

## 👥 Participantes

- **Thauã Fernando Werner** — RA: *231100065*
- **João Gabriel Chaves** — RA: *2311100056*

---

