# recipe-node-capstone

The purpose of this app is to create an recipe book that you can have with you wherever you go.

# MVP workflow
Intro screen.
--> Intro, explains app.
----> User login or create user.
------> Continue button, brings user to their library.
Home Screen.
--> User's recipe library.
----> Searchbar, search recipe by keywords or by specific recipe.
------> User selects the recipe of their choosing.
-------->Recipe is added to recipe library and saved.
---------->Search for another recipe.
------------>Return to users library.
Screen displays information about selected recipe in library.
--> User is given ingredients for recipe.
----> User can modify ingredient list.
------> Modification is added to log, with date and what ingredient was modified.
--------> Button redirects to orignal recipe url, with exact directions for recipe.
----------> Textbox for manual input of directions(optional).
------------> User can delete recipe from recipe library.
Create Screen.
--> Form, user can create own recipe to add to library.
----> Title input, user creates title for recipe.
------> Photo upload, user uploads photo for recipe.
--------> Ingredients list, user lists ingredients for recipe.
----------> Directions textbox, user lists directions for recipe.
------------>Save button, saves new recipe to library.

# User Stories
As a user I want to
As a user I want to
As a user I want to
As a user I want to
As a user I want to
As a user I want to

# Screenshots


# Working Prototype
Find a working prototype with Node at

# Functionality
When the user brings up the landing page it explains the pupose of the app.
The user then creates a profile with their email(logs in if already created), or continues without saving.
The user can search for recipes by a keywords or key pharases.
The user can choose a recipe of intrest, and upload it to their personal library.
The user can modify the original recipe however they choose.
The user can view the orignal recipe url to get the directions.
The user can manually input directions into textbox to save for future use.
The user can delete a recipe from their library.

# Technical

Front End
* HTML5
* CSS3
* JavaScript
* jQuery

Back End
* Node.js with Heroku implementation
* Express.js
* MongoDB on mLab
* Mongoose
* Mocha and Chai
* Edamame API

# Responsive
The app is responsive and optimized for both desktop and mobile viewing and use.

# API Documentation
API endpoints for the back end include:

POST to '' for creating a new user
POST to '' to sign in an existing user
POST to '' for creating a new recipe
PUT to '' to update a saved recipe
GET to '' to access list of recipes from search
GET to '' to access all of a user's saved recipes
GET to '' to access a single saved recipe
DELETE to '' to delete a single saved recipe

# Development Roadmap
Planned additional features and improvements will allow users to:

Automatic direction upload:
--> Currently can't upload directions to saved recipe automatically.

Social Media Presence:
--> Would like for users to be able to share to social media the changes they've made to recipes, recipes they created themself, or just a recipe they really liked from a search.

Nutrtion Guide:
-->Would like to include all nutritional information for those who choose to view it.

Allergy Search:
--> I would like to have a allergy option implemented, in order to reach more users, and to help those with allergies still be able to find great recipes.
