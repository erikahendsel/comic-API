# comic-API
Comics are fetched from Marvel API. Link: https://developer.marvel.com/

# SETTING UP THE LOCAL PROJECT
Follow these steps to setup working enviroment:

Open terminal in the project folder and do the following:

In command line write: 
1) npm install
2) 
To open the project in localhost write: 
- node index.js
OR
- nodemon index.js 
Project will run on localhost:3000  

Note! I suggest running on nodemon since it can see the changes made in index.js. Node command will work just as fine but you might have to reset the server everytime changes are made.

# GETTING A KEYS FROM MARVEL
Get a public and private key from marvel website. Link: https://developer.marvel.com/

- Once you have a the keys create an .env file in the project folder (so outside of the public folder). 
- Copy and paste the following code into the .env file. Replace marvel_public_key_goes_here and marvel_private_key_goes_here with your keys.

PUBLIC_API_KEY=marvel_public_key_goes_here
PRIVATE_API_KEY=marvel_private_key_goes_here