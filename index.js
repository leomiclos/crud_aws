const express = require("express");
const app = express();
app.use(express.json());
const rateLimit = require("express-rate-limit");
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// Definição das opções do Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CRUD API',
      version: '1.0.0',
    },
  },
  apis: ['./index.js'], // Caminho para os arquivos da API
};

// Geração da documentação Swagger
const specs = swaggerJsdoc(options);

// Emitir histórico de requisição no console
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Documentação com Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Configuração do limitador de requisições
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 10, // Limite de 10 requisições por IP a cada 5 minutos
  message: "Muitas requisições feitas a partir deste IP, por favor tente novamente após 15 minutos.",
});

// Aplicar o limitador a todas as requisições
app.use(limiter);

// Inicia um array para armazenar os dados
let data = [];

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the item
 *         name:
 *           type: string
 *           description: The name of the item
 *       example:
 *         id: 1
 *         name: Item 1
 */

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: The items managing API
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Returns the list of all the items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: The list of the items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
app.get("/items", (req, res) => {
  res.json(data);
});

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */
app.post("/items", (req, res) => {
  const item = req.body;
  data.push(item);
  res.status(201).json(item);
});

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update the item by the id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: The item was not found
 *       500:
 *         description: Some error happened
 */
app.put("/items/:id", (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  data = data.map((item) => (item.id === id ? updatedItem : item));
  res.json(updatedItem);
});

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Remove the item by id
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The item id
 *     responses:
 *       204:
 *         description: The item was deleted
 *       404:
 *         description: The item was not found
 */
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  data = data.filter((item) => item.id !== id);
  res.status(204).send();
});

// Zera o array a cada 30 minutos
setInterval(() => {
  data = [];
}, 1800000);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
