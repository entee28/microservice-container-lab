FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN corepack enable && \
    corepack prepare yarn@stable --activate && \
    yarn

COPY . .

FROM base as production

EXPOSE 4000

CMD [ "yarn", "start" ]
