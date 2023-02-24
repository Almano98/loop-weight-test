## Weight tracker

This repo servers purpose to serve the react FE for weight tracker app.

## Requirements

Node version: v16.15.0

## File Structure

```
├── package.json                # Standard node module definiton + scripts
├── src                         # All typescript source code
│   ├── api                     # Axios API instance that defines api methods and handles api connection
│   ├── app                     # Main application entry point
│   ├── components              # Generic and page specific component library
│   ├── pages                   # Page components to be served
├── Dockerfile                  # Docker container configuration fie
```

## How to run

Install dependencies

> npm i

Run

> npm run start

## Docker Container

To create docker container run:

> docker build -t "react-app" .
