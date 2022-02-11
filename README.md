# Welcome to AquaBnB!

## An AirBnB clone centered on living underwater!
### React, Redux, Express, Sequelize, Node.js, and PostgreSQL were all used in the creation of this application.

* [Database Schema](https://github.com/jchau-623/AquaBnB/wiki/Users)
* [Frontend Routes](https://github.com/jchau-623/AquaBnB/wiki/Frontend-Routes)
* [Feature List](https://github.com/jchau-623/AquaBnB/wiki/MVP)

[Live Link](https://oct-aquabnb.herokuapp.com/)

#### To run application:
- Clone this repository.
- Run `npm install` to install dependencies.
- Run `npm start` in the "backend" directory.
- Run `npm start` in the "frontend" directory.
- If this doesn't automatically open a browser window, navigate to "http://localhost:3000".
### Database setup:
- Create a .env file (there is an example in the root of the project)
- In PostgreSQL, create a user with CREATEDB priviledges.
- Running your db commands now will create a database, migrate, and then seed all tables.
### To setup the database with Sequelize:
-  npx dotenv sequelize db:create
-  npx dotenv sequelize db:migrate
-  npx dotenv sequelize db:seed:all
### Thank you!
- This is a work in progress, more updates to come!
- Have fun and enjoy!
