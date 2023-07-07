FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN corepack enable && \
    corepack prepare yarn@stable --activate && \
    yarn

COPY . .

FROM base as production

EXPOSE 5173

CMD [ "yarn", "dev --host" ]