# Bounties Explorer
Bounties Explorer is a UNICEF maintained fork of Bounties.network.

## Installation

```sh
$ npm install
$ cd client
$ npm install
```

## Requirements

To save the data that is not stored on Ethereum, Bounties requires a running mongodb service. AWS S3 is used to store/serve files.
The following Environmental variables are required 

```
NODE_ENV=development
DB_NAME=bounties
DB_URL=mongodb://localhost:27017
SERVER_PORT=9000
AWS_ACCESS_KEY=
AWS_SECRET_KEY=
AWS_BUCKET_NAME=

INFURA_ENDPOINT=
ALCHEMY_ENDPOINT=
```

App configuration is located in   `/config/index.js`

## Startup

```sh
$ node index.js
```

```sh
$ cd client
$ npm run start
18:26:28.433Z  INFO Bounties App: Starting...
18:26:28.434Z  INFO Bounties App: Initializing
18:26:28.435Z  INFO MongoDB: Starting...
18:26:28.435Z  INFO MongoDB: Initializing:
18:26:28.447Z  INFO Bounties App: Initialized
18:26:28.449Z  INFO Bounties App: started in production.
18:26:28.449Z  INFO Bounties App: listening on http://localhost:9000
18:26:28.462Z  INFO MongoDB: Connected: mongodb://localhost:27017/bounties
18:26:28.463Z  INFO MongoDB: Initialized
```

## Contributions
Please Fork this repo, pull down & set your fork as origin with this repository as upstream. To make Pull Requests, push your change branch to your repo and open a PR here. [See more](https://github.com/unicef/juniper-portfolio/tree/develop/contributing)



