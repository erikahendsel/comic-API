const express = require("express");
const { request } = require("express");
const fetch = require("node-fetch");
require("dotenv").config();
const md5_hashing = require("./md5.js");
const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));

//Get function from another file: https://www.stanleyulili.com/node/node-modules-learn-how-to-import-and-use-functions-from-another-file/

const publickey = process.env.PUBLIC_API_KEY;
const privatekey = process.env.PRIVATE_API_KEY;
const format = "hardcover";
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = md5_hashing.MD5(stringToHash);
const baseUrl = "http://gateway.marvel.com/v1/public/comics";
const limit = 100;
const url =
  baseUrl +
  "?format=" +
  format +
  "&limit=" +
  limit +
  "&ts=" +
  ts +
  "&apikey=" +
  publickey +
  "&hash=" +
  hash;
console.log(url);
app.get("/comic", async (request, response) => {
  const api_url = `${url}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});
