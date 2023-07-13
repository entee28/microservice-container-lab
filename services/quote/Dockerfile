FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine as production

WORKDIR /home/node/app

COPY --from=base /home/node/app ./

ENV COSMOS_URI=$COSMOS_URI

EXPOSE 6000

CMD [ "npm", "start" ]
