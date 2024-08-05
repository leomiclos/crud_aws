# Projeto CRUD Simples com Node.js

Este é um projeto de CRUD simples para treinar a hospedagem de um servidor Node.js na AWS. Todos os endpoints serão implementados e os dados serão armazenados em memória, sendo zerados a cada 30 minutos para não sobrecarregar a aplicação.

## Endpoints Implementados

http://18.228.16.206:3000/items
Utilize essa rota para testar o funcionamento da API.

- `GET /items`: Retorna todos os itens.
- `POST /items`: Adiciona um novo item.
- `PUT /items/:id`: Atualiza um item existente.
- `DELETE /items/:id`: Remove um item.

## Tecnologias Utilizadas

- Node.js
- Express.js
- AWS ECS

## Como Executar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone <https://github.com/leomiclos/crud_aws.git>
   cd seu-repositorio

2. Instale as dependências
    npm install

3. Inicie o Servidor
    node index.js

4. Acesse a aplicação em <http://localhost:3000>
