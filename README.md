# Point of Sale API


<p align="center">
  <img src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
</p>

## Table of Contents

* [About](#About)
* [Prerequisites](#Prerequisites)
* [Installation](#Installation)
  * [Clone](#Clone)
  * [Create Environment Variable](#create-environment-variable)
  * [Start Development Server](#Start-Development-Server)
* [Folders Structure](#Folders-Structure)
* [Related Project](#Related-Project)

## About
POS (Point of Sale) API is a REST API made for [pos-app](https://github.com/fblazt/pos-app) Front-end project.

## Prerequisites

* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/downloads/)
* [Redis](https://redis.io/)

## Installation

### Clone

```
git clone https://github.com/fblazt/pos-api.git
cd pos-api
npm install 
```

### Create Environment Variable

```
$ touch .env
$ nano .env
```

```
PORT=YOUR_SERVER_PORT

DB_HOST=YOUR_DATABASE_HOST
DB_USER=YOUR_DATABASE_USER
DB_PASSWORD=YOUR_DATABASE_PASSWORD
DB_NAME=YOUR_DATABASE_NAME

SECRET_KEY=YOUR_TOKEN_SECRET_KEY

EMAIL=YOUR_ACTIVATION_ACCOUNT_EMAIL
PASSWORD=YOUR_ACTIVATION_ACCOUNT_PASSWORD

REDIS_PORT=YOUR_REDIS_PORT || 6379

```

### Start Development Server

Start the server:
```
npm start
```
Then, check every HTTP method / action from Postman.

## Folders Structure
```
\---src
|    \---config
|    |   +---config.js            
|    \---controllers
|    |   +---menu.js
|    |   +---category.js
|    \---helpers
|    |   +---helpers.js
|    \---model
|    |   +---menu.js
|    |   +---category.js
|    \---routers
|    |   +---menu.js
|    |   +---category.js
|    |   +---index.js
\---uploads
+---app.js
+---package-lock.json
+---package.json
```

## Related Project
* [`pos-app`](https://github.com/fblazt/pos-app)

---
Copyright © 2020 [Firman](https://github.com/fblazt/)
