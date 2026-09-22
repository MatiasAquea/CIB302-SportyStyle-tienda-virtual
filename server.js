const express = require("express");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");

const app = express();
const PORT = 3000;

const certDir = path.join(__dirname, "certs");
const keyPath = path.join(certDir, "localhost-key.pem");
const certPath = path.join(certDir, "localhost-cert.pem");

if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  console.error("Faltan los certificados.");
  console.error("Ejecuta: npm run cert:generate");
  process.exit(1);
}

app.use(express.static(path.join(__dirname, "public")));

const httpsServer = https.createServer(
  {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  },
  app
);

httpsServer.listen(PORT, () => {
  console.log(`SportyStyle disponible en https://localhost:${PORT}`);
});