#!/usr/bin/env bash

cd ..

docker build -t quickstart/ts-nodejs-express-mongoose-service -f Dockerfile .

docker-compose up -d

osascript -e 'display notification "Image built and is now running" with title "Build Complete" sound name "Glass"'