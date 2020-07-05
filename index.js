const express = require("express");
const { request } = require("express");
const fetch = require("node-fetch");
const MD5 = require("md5");
require("dotenv").config();
const app = express();
app.listen(3000, () => console.log("listening at 3000"));
app.use(express.static("public"));
//Get function from another file: https://www.stanleyulili.com/node/node-modules-learn-how-to-import-and-use-functions-from-another-file/

const publickey = process.env.PUBLIC_API_KEY;
const privatekey = process.env.PRIVATE_API_KEY;
const format = "hardcover";
const orderBy = "-focDate";
const ts = new Date().getTime();
const stringToHash = ts + privatekey + publickey;
const hash = MD5(stringToHash);
const baseUrl = "https://gateway.marvel.com/v1/public/comics";
const mainLimit = 100;
const hashedFinalKey = "&ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
const main_url =
  baseUrl + "?orderBy=-focDate" + "&limit=" + mainLimit + hashedFinalKey;
// const id_url =
//   // https://gateway.marvel.com:443/v1/public/comics/26620?apikey=69a78b471e06634e6749f89614ce0888
//   baseUrl + comicID123 + "?ts=" + ts + "&apikey=" + publickey + "&hash=" + hash;
app.get("/comics/:offset", async (request, response) => {
  const requestOffset = request.params.offset;
  console.log(requestOffset);
  const api_url = `${baseUrl}?orderBy=${orderBy}&limit=${mainLimit}&offset=${requestOffset}${hashedFinalKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
});
app.get("/id/:comicid", async (request, response) => {
  const comicid = request.params.comicid;
  const api_url = `${baseUrl}/${comicid}?${hashedFinalKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
  console.log(api_url);
});
app.get("/search/:search", async (request, response) => {
  const search = request.params.search;
  console.log(search);
  const api_url = `${baseUrl}?titleStartsWith=${search}&limit=${mainLimit}&${hashedFinalKey}`;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  response.json(json);
  console.log(api_url);
});
