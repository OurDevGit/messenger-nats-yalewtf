#!/bin/sh

docker build -t underdog/faas-api-test ./functions/api-test
docker build -t underdog/apis ./server
docker build -t underdog/front-end ./client

# deploy docker images
docker stack deploy underdog --compose-file docker-compose.prod.yml --prune
