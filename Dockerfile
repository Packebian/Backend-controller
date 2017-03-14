# Build a docker container containing the sails framework
FROM node:latest
MAINTAINER Rémi GATTAZ <remi.gattaz@gmail.com>

# Add the application in the image
ADD . /srv/sails

# Define working directory.
WORKDIR /srv/sails

# Install all dependencies
RUN npm prune && npm install --quiet

# Define mountable directories.
VOLUME ["/srv/sails"]

# Expose sails default port
EXPOSE 1337

# Envrionment
ENV SAILS_SECRET="c9693b2d5572ffd96a79cae6a8453d57" \
    MONGO_HOST="mongodb" \
    MONGO_PORT="27017" \
    MONGO_DB="packebian" \
    MONGO_USER="packebian" \
    MONGO_PASS="packebian123" \
    AUTH0_SECRET="secret" \
    AUTH0_ALGO="HS256" \
    AUTH0_ENDPOINT="https://packebian.eu.auth0.com" \
    JWT_SECRET="secret" \
    JWT_LIFE="3600" \
    JWT_ALGO="HS256" \
    JWT_ISSUER="packebian.com" \
    JWT_AUDIENCE="packebian.com"

# Start application
CMD NODE_ENV=production npm start
