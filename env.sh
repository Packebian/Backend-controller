#!/bin/sh

# Update path to have access to sails
export PATH=$PATH:$(pwd)/node_modules/.bin

# Add environment variables
export SAILS_SECRET="c9693b2d5572ffd96a79cae6a8453d57"

# Mongo environment
export MONGO_HOST="mongodb"
export MONGO_PORT="27017"
export MONGO_DB="packebian"
export MONGO_USER="packebian"
export MONGO_PASS="packebian123"
