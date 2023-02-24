## Weight tracker API

This repo servers purpose to serve the express REST API for weight tracker app.

## Requirements

Node version: v16.15.0

Mongo service

## File Structure

```
├── package.json                # Standard node module definiton + scripts
├── src                         # All typescript source code
│   ├── clients                 # Handle external client services (i.e db connection, external email services)
│   ├── controllers             # Business logic which interacts with databases and external clients
│   ├── handlers                # express request handler definitions
│   ├── models                  # Database schema models (typescript classes from mongoose)
│   ├── types                   # Shared type defs
│   ├── utils                   # Utility code
├── tsconfig.json               # Compiler options for typescript
```

## How to run

Install dependencies

> npm i

Run

> npm run dev
