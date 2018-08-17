# Blog CMS

## Description
Blog site, with simple CMS as independent application and REST API express server.
## Table of Contents

* [Instructions](#instructions)
* [Dependencies](#dependencies)

## Usage
```
preserved images names:
avatar.jpg for admin avatar (image in comment)
icon.png for browser tab image
logo.jpg for blog logo
```

## Demo
soon on heroku

## Dependencies
To run dev or production version you need browser with enabled JavaScript.

## Build setup
Client was developed using:
* CRA
* React
* ES6
* SASS (original syntax)
* HTML5

Admin was developed using:
* CRA
* React
* ES6
* Bootstrap 4
* SASS (original syntax)
* HTML5

Server was developed using:
* Gulp
* Node
* Express
* Mongoose
* MongoDB
```bash
# To install dev-dependencies, just go to the root folder and run
npm i

# To build production version run
npm run build

# To run dev version run
client: npm run client
server: npm run server
admin: cd admin && npm start
```
