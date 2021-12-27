# Auth App

Auth App is a NodeJS+TypeScript sample app to implement an api with register and authentication funcionality.

## Pre Requisites

1. Node v16+  
2. Yarn
3. Docker and Docker Compose

## Installation

Clone the repo

```bash
git clone git@github.com:mateusgpereira/auth-app.git
```

Install the required libraries:
```bash
cd auth-app
yarn
```

Setup the environment variables
```bash
cp .env.example .env
```

*Fill the required variables inside this file*

## Run

Bring up the database

```bash
docker-compose up -d
```

Run the application in dev mode:
```bash
yarn dev
```

## License
[MIT](https://choosealicense.com/licenses/mit/)