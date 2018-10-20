# Restaurant Reviews- Udacity Front End Nanodegree Project 5
---
#### _ARIA changes, responsive to multiple screen sizes, employs service worker_

## Project Overview:

To view this project please fork or clone it from github, then run the project using the following: 
  From inside the new directory, launch a local client server using Python from your terminal: 
    Python 2: python -m SimpleHTTPServer 8000 
    Python 3: python3 -m http.server 8000
  Visit the site in your browser at http://localhost:8000

Next, open the mws-restaurant-stage-1-master file and then the index.html file in you browser. To see the service worker code please navigate from the mws-restaurant-stage-1-master file to the js file and open the main.js file. At the bottom are a couple of lines of new service worker code that reference the sw.js file. Please open the sw.js file to see the service worker code. 

The project uses Mapbox, and added to the index.html and restaraunt_info.html pages are a series of <meta> tags to make it responsive in any viewport. 

To view the responsive changes please open the css folder and from there open the styles.css file. You'll see the changes based on screen size as you scroll in your text editor. There are also changes the map container (especially on the individual restaraunt pages) so that it doesn't overlap with the text boxes or cut them off), using flex-box for stacking the restaraunts into two columns when the screen is wide enough, adjusting the width of the images to make sure they work in all screen sizes, adding padding and adjusting map container to make it dynamic, etc. 

ARIA changes include adding tabindex's to make the page navigable in the index.html file, changing the orange font to red to create a greater contrast in the styles.css file, giving and "alt" property to the images for visually impaired users, etc. 


