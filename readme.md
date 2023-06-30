# Microservice container lab

## Implementation

![implementation diagram](diagram.png 'Implementation Diagram')

- Client: A web client that consumes microservices
- API Gateway: Use application Layer 7 routing to route the request to the appropriate instances.
- Hello service: A microservice that says hello in 3 languages
- Quote service: A microservice that return a inspirational quote
- Each microservice has an array of objects that represents a database

## Quickstart

**Local setup of containerized microservices**

```sh
docker-compose build

docker-compose up -d
```
