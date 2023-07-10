FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine as production

WORKDIR /home/node/app

COPY --from=base /home/node/app ./

ENV NODE_ENV=prod

EXPOSE 5000

CMD [ "npm", "start" ]
