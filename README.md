# climate-change-news-api

A web scrapper api that returns climate change news clippings from vaiours news wesbites.

# Instructions

1. Run index.js using node index.js

2. Go to localhost:3000 on your browser

3. Optional: Get the Chrome extension JSON Viewer Pro - https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc

4. Routes: <br>
   /news - returns all news clippings <br>
   /:newspaperId - returns news clippings from specified newspaper <br>

5. Newspapers available: replace newspaperId with one of these <br>
   theguardian <br>
   thetimes <br>
   telegraph <br>
   cityam <br>
   nytimes <br>
   bbc <br>
   eveningstandard <br>
   dailymail <br>
   nyp <br>
   timesofindia <br>
   hindustantimes <br>
   euronews <br>
   mailandguardian <br>

6. Output: A JSON file containing the headline, url and source. <br>
   Sample: <br>
   [ <br>
   { <br>
   "title": " Clergy find second calling as part of law-breaking climate change protests ", <br>
   "url": "https://www.telegraph.co.uk/news/2022/09/03/priests-among-climate-change-protesters-breaking-law/", <br>
   "source": "telegraph" <br>
   }, <br>
   { <br>
   "title": "The crown and climate Britain has been one of the main contributors to global warming. We look at the new king’s environmental credentials.", <br>
   "url": "https://www.nytimes.com/2022/09/13/climate/king-charles-climate.html", <br>
   "source": "nytimes" <br>
   } <br>
   ]
