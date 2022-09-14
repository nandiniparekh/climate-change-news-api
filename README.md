# climate-change-news-api
A web scrapper api that returns climate change news clippings from vaiours news wesbites.

# Instructions
1. Run index.js using node index.js

2. Go to localhost:3000 on your browser

3. Optional: Get the Chrome extension JSON Viewer Pro - https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc

4. Routes:
    /news - returns all news clippings 
    /:newspaperId - returns news clippings from specified newspaper
    
5. Newspapers available: replace newspaperId with one of these
    theguardian
    thetimes
    telegraph
    cityam
    nytimes
    bbc
    eveningstandard
    dailymail
    nyp
    timesofindia
    hindustantimes
    euronews
    mailandguardian
    
6. Output: A JSON file containing the headline, url and source.
    Sample:
       [ 
        {
            "title": " Clergy find second calling as part of law-breaking climate change protests ",
            "url": "https://www.telegraph.co.uk/news/2022/09/03/priests-among-climate-change-protesters-breaking-law/",
            "source": "telegraph"
        },
        {
            "title": "The crown and climate Britain has been one of the main contributors to global warming. We look at the new king’s environmental credentials.",
            "url": "https://www.nytimes.com/2022/09/13/climate/king-charles-climate.html",
            "source": "nytimes"
       }
      ]
