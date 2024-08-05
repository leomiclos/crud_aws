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



## TUTORIAL AWS 

1. Crie uma conta AWS (Será necessário um cartão de crédito, porém o serviço básico da AWS é gratuito)

2. Busque por EC2 na barra de pesquisa

3. Na barra lateral procure por instancias e crie uma nova instancia

4. Nomeie sua instancia e selecione a opção Ubuntu

5. Crie sua par de chave e guarde em segurança. Não perca.

6. Ative as opções para permitir tráfego HTTP e HTTPS

7. Finalize a criação da instancia

8. Volte na listagem de instancias, e procure por ipv4. Esse será o ip público de requisições externas.

9. Acesse o servidor linux conectando através da própria AWS

10. Ao abrir o console, rode os comandos:

sudo get-apt upgrade
sudo get-apt update
sudo apt-get install -y nodejs
sudo apt install npm
git clone https://github.com/leomiclos/crud_aws.git
cd crud_aws
npm install
node index.js


utilize o ip público junto dos endpoints para fazer as requisições.
