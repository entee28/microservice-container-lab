FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine as production

WORKDIR /home/node/app

COPY --from=base /home/node/app ./

EXPOSE 5173

CMD [ "npm", "run" ,"dev", "--host" ]
