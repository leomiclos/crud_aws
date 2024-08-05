const express = require("express");
const app = express();
const limiter = require("../crud_node/middleware/limiter");
const logger = require("../crud_node/middleware/logger");
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('../crud_node/docs/swagger');
const dataStore = require('../crud_node/data/data'); // Importar o módulo de dados

// Middleware
app.use(express.json());
app.use(logger);

// Documentação com Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Configuração do limitador de requisições
app.use(limiter);

// Rotas
const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);

// Zera o array a cada 30 minutos
setInterval(() => {
  dataStore.reset();
}, 1800000);

const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
