# Assignment 2 - Web API.

Name: Juliana Wong Mendonca  
Number: 20095922

## Features

 + Photo upload on profile - updates the photo but doesn't store it
 + Movie poster display on profile
 + Username display from context
 + Home page shows the posters using movie cards from Assignment 1
 + Updated the font all over to Montserrat
 + Added sign up and login to the site header
 + Attempted to create the top rated page - all over right but didn't work
 + Added MUI elements to the app

## API Configuration


NODE_ENV=development  
PORT=8081  
HOST=localhost  
MONGO_DB=MongoURL  
TMDB_KEY=YourTMDBKey  
SECRET=YourJWTSecret  
______________________

## API Design


- / | GET | Home page
- /movies | GET | Movies page
- /top-rated-movies | GET | Top rated movies page
- /profile | GET | Profile page


## Security and Authentication

- /login | Login page - users need to be added on Postman first

## Integrating with React App

- Movie card layout - with the coloured circles and release date
- Page grid
- Montserrat font

## Independent learning (if relevant)

- https://www.w3schools.com/howto/howto_html_file_upload_button.asp - Creating an upload photo button 

