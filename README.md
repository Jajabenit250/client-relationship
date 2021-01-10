# client-relationship

## Description
As a business, we have many clients that we service but we have to deal with multiple solutions to manage our client success.
## Technologies
- Environment : [Nodejs](https://nodejs.org/)
- Package Manager : [NPM](https://www.npmjs.com)
- Compiler : [Babel](https://babeljs.io/)
- Database : [MongoDB](https://cloud.mongodb.com/)
## Requirements and Installation steps
### You need the following to be able to run the application
[Node](https://nodejs.org/en/download/) a runtime environment for JavaScript
[Postman](https://www.getpostman.com/downloads/) to test the Api endpoints
[Visual studio code](https://code.visualstudio.com/download) for editing and running the app
## Installation
#### A. Clone the project
1. From your computer, open terminal 
2. Run `git clone https://github.com/Jajabenit250/client-relationship.git` to clone the repository.
3. cd `CD client-management`
`
#### B. Setting up the environment
1. Create a file and name it `.env` in root directory
2. Find a file named `.env.example`
3. use `.env.example` as a blueprint for your `.env`
4. Provide values to all environmental variables in `.env` file.
## Run commands
Open terminal from your computer
1. Run `npm install` to install all dependencies.
5. Run `npm start` to start the app in development environment. 
## API endpoints
`- POST /auth/signup - Create New User`

`- GET /auth/activate/:autorizations - Activate Account`

`- PATCH /auth/profile- Edit Profile`

`- POST /auth/signin - Login Registered User`

`- POST /product/add - Create New Project`

`- GET /product/view/:productId - View Created Project`

`- PATCH /payment/info - Add User Payment Information`

`- POST /payment/subscribe/:projectId - Subscribe to a project or Service`

`- GET /payment/subscribe/:paymentId - View Subscribe to project or service`

## Heroku Link and Postman Collection

Heroku URL https://clientrelationship.herokuapp.com/

Import File `client-ma/Client Management API.postman_collection.json` to your Postman Collection and Tests All Functionalities With Heroku Deployed Application

# Author
 [Havugimana Benit](https://github.com/Jajabenit250)
 