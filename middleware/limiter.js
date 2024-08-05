const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutos
  max: 10, // Limite de 10 requisições por IP a cada 5 minutos
  message: "Muitas requisições feitas a partir deste IP, por favor tente novamente após 15 minutos.",
});

module.exports = limiter;
