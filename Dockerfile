# TODO CHANGE ME
# build using :             docker build -t quickstart/ts-nodejs-express-mongoose-service -f Dockerfile .
# run using :               docker run -d -v src:/usr/src/src quickstart/ts-nodejs-express-mongoose-service

FROM node:8.1.4-alpine

RUN npm install -g \
    gulp \
    pm2

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY package.json /usr/src/

RUN npm install

COPY . /usr/src

RUN gulp

RUN rm -r src docker

WORKDIR /usr/src/dist

EXPOSE 4950
EXPOSE 5656

CMD ["pm2-docker", "process.yml"]