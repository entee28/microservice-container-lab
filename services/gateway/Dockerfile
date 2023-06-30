FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN corepack enable

RUN corepack prepare yarn@stable --activate

RUN yarn

COPY . .

FROM base as production

RUN yarn start
