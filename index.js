//----------------------------------------------------------------------------//
// Packages required
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");

const app = express();

const articles = [];

//----------------------------------------------------------------------------//
// Collection of all newspapers
const newspapers = [
  {
    name: "theguardian",
    address: "https://www.theguardian.com/environment/climate-crisis",
    base: "",
  },
  {
    name: "thetimes",
    address: "https://www.thetimes.co.uk/environment/climate-change",
    base: "",
  },
  {
    name: "telegraph",
    address: "https://www.telegraph.co.uk/climate-change/",
    base: "https://www.telegraph.co.uk",
  },
  {
    name: "cityam",
    address: "https://www.cityam.com/topic/climate-change/",
    base: "",
  },
  {
    name: "nytimes",
    address: "https://www.nytimes.com/international/section/climate",
    base: "https://www.nytimes.com",
  },
  {
    name: "bbc",
    address: "https://www.bbc.com/news/science-environment-56837908",
    base: "https://www.bbc.com",
  },
  {
    name: "eveningstandard",
    address: "https://www.standard.co.uk/topic/climate-change",
    base: "https://www.standard.co.uk",
  },
  {
    name: "sun",
    address: "https://www.thesun.co.uk/topic/climate-change-environment/",
    base: "",
  },
  {
    name: "dailymail",
    address:
      "https://www.dailymail.co.uk/news/climate_change_global_warming/index.html",
    base: "",
  },
  {
    name: "nyp",
    address: "https://nypost.com/tag/climate-change/",
    base: "",
  },
  {
    name: "timesofindia",
    address: "https://timesofindia.indiatimes.com/topic/climate-change",
    base: "",
  },
  {
    name: "hindustantimes",
    address: "https://www.hindustantimes.com/topic/climate-change/news",
    base: "https://www.hindustantimes.com",
  },
  {
    name: "euronews",
    address: "https://www.euronews.com/tag/climate-change",
    base: "https://www.euronews.com",
  },
  {
    name: "mailandguardian",
    address: "https://mg.co.za/tag/climate-change/",
    base: "",
  },
];

newspapers.forEach((newspaper) => {
  axios.get(newspaper.address).then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    $('a:contains("climate")', html).each(function () {
      const title = $(this).text();
      const url = $(this).attr("href");

      articles.push({
        title,
        url: newspaper.base + url,
        source: newspaper.name,
      });
    });
  });
});

//----------------------------------------------------------------------------//
// Routing
app.get("/", (req, res) => {
  res.json("Welcome to my Climate Change News API");
});

app.get("/news", (req, res) => {
  res.json(articles);
});

app.get("/:newspaperId", (req, res) => {
  const newspaperId = req.params.newspaperId;

  const newspaper = newspapers.filter(
    (newspaper) => newspaperId == newspaper.name
  );

  const specificArticles = articles.filter(
    (article) => article.source == newspaper[0].name
  );

  res.json(specificArticles);
});

//----------------------------------------------------------------------------//
//Setting up the server
app.listen(3000, () => console.log("server started on port 3000"));
