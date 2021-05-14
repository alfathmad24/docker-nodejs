const express = require("express");

// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();

app.get("/", (req, res) => {
  res.send(`appid: ${req.get("host").replace(/\D/g, "")}`);
});

app.get("/app1", (req, res) => {
  res.send(`appid: ${req.get("host").replace(/\D/g, "")} Page: app1`);
});

app.get("/app2", (req, res) => {
  res.send(`appid: ${req.get("host").replace(/\D/g, "")} Page: app2`);
});

app.get("/admin", (req, res) => {
  res.send(`appid: ${req.get("host").replace(/\D/g, "")} Page: ADMIN`);
});

app.listen(PORT, HOST);
console.log(`Running on PORT ${PORT}`);
