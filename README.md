# loop-weight-test

Simple weight tracker app created in React and Typescript for Loop technical assessment with a react FE connected to an express server created in typescript and connected to a mongo database.

## Features

- Ability to create and login as a user
- Token management using jwt-tokens
- Ability to create, retrieve, update and delete weight entries linked to the user logged in

## Containers

Docker containers are used to containerize and host the application. run:

> docker-compose up

3 containers will be started:

- react-app container hosted at localhost:3000
- api-server container hosted at localhost:8000
- mongodb instance

## Alternative running methods

If the use of the docker container is not sufficient or you would like an alternative way you can do the follow:

### API Server

Before you start the server ensure that you have mongodb install and your mongo service running

Start the api server by navigating to the `/server/` folder and running

- Install project dependencies: `npm install`
- Start the application: `npm run dev`

### React FE

Start the react application by navigating to the `/client/` folder and running

- Install project dependencies: `npm install`
- Start the application: `npm run start`
