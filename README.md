# My Money App

Aplicacao full stack para controle de ciclos de pagamento, com frontend em React + Redux e backend em Node.js + Express + MongoDB.

## Visao Geral

O projeto permite:

- listar, criar, editar e remover ciclos de pagamento
- exibir um dashboard com cards
- consultar dados por ciclo ou em formato agregado

## Stack

- React
- Redux
- React Router
- Axios
- Webpack
- AdminLTE
- Node.js
- Express
- MongoDB
- Mongoose
- node-restful

## Estrutura

- `backend/` - API em Node.js com Express, Mongoose e Node-RESTful
- `frontend/` - SPA em React com Redux e Webpack

## Como Rodar

### Backend

O backend roda na porta `3003` e usa o banco `mongodb://localhost/mymoney`.

```bash
cd backend
npm install
npm run dev
```

### Frontend

O frontend roda com Webpack Dev Server na porta `8080`.

```bash
cd frontend
npm install
npm run dev
```

## Rotas da API

Base URL:

```bash
http://localhost:3003/api
```

Principais rotas:

- `GET /billingCycles` - lista todos os ciclos
- `GET /billingCycles/:id` - busca um ciclo por id
- `POST /billingCycles` - cria um ciclo
- `PUT /billingCycles/:id` - atualiza um ciclo
- `DELETE /billingCycles/:id` - remove um ciclo
- `GET /billingCycles/count` - retorna a quantidade de ciclos
- `GET /billingCycles/summary` - retorna um resumo agregado

## Dashboard

O dashboard consome a API e exibe os dados na tela principal.

No estado atual, ele pode ser usado para:

- mostrar cards por ciclo de pagamento
- exibir o nome do ciclo acima dos cards
- separar os valores de cada ciclo sem somar tudo em um unico total

## Banco de Dados

O backend conecta em:

```bash
mongodb://localhost/mymoney
```

Colecao principal:

- `billingcycles`

## Screenshot

Espaco reservado para uma imagem da tela principal do dashboard.

## Observacoes

- Arquivos gerados pelo build do frontend nao precisam ser versionados.
- O projeto usa uma estrutura classica de frontend e backend separados.

## Autor

Projeto em desenvolvimento.
