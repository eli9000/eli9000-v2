FROM node:latest

LABEL name="eli9000-v2"
LABEL version="2.0.0"
LABEL maintainer="Eli Johnson <eli9000@gmail.com>"

# Create app directory
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV=production

ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json package-lock.json ./

RUN npm install


# COPY ./build ./server ./
COPY . .

# ADD build ./
# ADD server ./

EXPOSE 9000

CMD [ "node", "server/index.js" ]