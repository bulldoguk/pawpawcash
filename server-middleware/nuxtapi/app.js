const express = require("express");
const fileUpload = require("express-fileupload");

const app = express();

app.use(express.json());

app.use(
  fileUpload({
    debug: false,
    preserveExtension: true,
  })
);

console.log("app ready");

module.exports = app;
