# Backend

a [Sails](http://sailsjs.org) application


## Prepare environment
Install dependencies and update the PATH
```sh
$ npm install
$ source env.sh
```

## Build & development
The application is built and served with npm
```sh
$ npm start
```

## Testing
The tests are run with npm
```sh
npm test
```

The modules used for testing are
- mocha
- supertest
- should

Since the docker composition [Backend-Controller-env](https://github.com/Packebian/Backend-Controller-env) is used to run the application in development and production, it was decided to also use it for test. Therefore, the connection to the mysql database is needed.
```sh
$ docker-compose sails npm test # run the tests using the composition
```
