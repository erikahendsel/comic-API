# comic-API
Comics are fetched from Marvel API. Link: https://developer.marvel.com/

# SETTING UP THE LOCAL PROJECT
Follow these steps to set up a working environment:

Open a terminal in the project folder and do the following:

In the command-line write: 
1) npm install
2) 
To open the project in a local server write: 
- node index.js
OR
- nodemon index.js 
The project will run on localhost:3000  

Note! I suggest running on nodemon since it can see the changes made in index.js. Node command will work just as fine but you might have to reset the server every time changes are made.

# GETTING THE KEYS FROM MARVEL
Get a public and private key from the marvel website. Link: https://developer.marvel.com/

- Once you have the keys rename .env-sample file to .env
- Add your keys and save the file.