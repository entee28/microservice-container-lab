FROM node:18 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY . .

FROM node:18-alpine as production

RUN apk add --no-cache libcap

WORKDIR /home/node/app

COPY --from=base /home/node/app ./

RUN setcap 'cap_net_bind_service=+ep' /usr/local/bin/node

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && chown -R appuser /app /tmp
USER appuser

ENV COSMOS_URI=$COSMOS_URI

EXPOSE 80

CMD [ "npm", "start" ]
