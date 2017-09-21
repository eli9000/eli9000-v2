FROM node:6.10.2

WORKDIR src/

COPY package.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
