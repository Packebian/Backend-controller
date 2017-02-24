# Backend-Controller

a [Sails](http://sailsjs.org) application

[![Build Status](https://travis-ci.org/Packebian/Backend-controller.svg?branch=master)](https://travis-ci.org/Packebian/Backend-controller)


## Setup the environment
Sourcing the file env.sh allows will setup environment variable so that starting the application will be possible.
It will also setup the $PATH variable so that is will be possible to use the binaries installed with npm for this project.
```sh
$ source env.sh
```


## Sails configuration

### RESTful routes
In the file `config/blueprints.js`, the following variables are used to configure the RESTFul routes
```js
actions: false, // disable action routes
rest: true, // REactivate REST routes
shortcuts: false, // the CRUD can only be done through HTTP verbs
pluralize: true // All routes are plural (/users, /tickets ...)
```

### Database configuration
The database configuration is setup in a set of environment variables.
```sh
export MONGO_HOST="mongodb"
export MONGO_PORT="27017"
export MONGO_DB="packebian"
export MONGO_USER="packebian"
export MONGO_PASS="packebian123"
```
These variables are set by sourcing the file `env.sh`.

### Sails secret
The sails secret is a variable that is namely used for sessions. It is setup in an environment variable.
```sh
export SAILS_SECRET="c9693b2d5572ffd96a79cae6a8453d57"
```
This variable is set by sourcing the file `env.sh`.


## Build & development
The application is built and served with npm
```sh
$ npm start
```


## Testing
The tests are run with npm
```sh
$ npm test
```

The npm modules used for testing are
- mocha
- supertest
- chai
- Barrel
