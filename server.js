const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());