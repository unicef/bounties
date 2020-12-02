const CONSTANTS = require("./constants");

const { oneMegabyte, oneDay } = CONSTANTS;

module.exports = {
  startPriceMonitor: process.env.MONITOR_PRICE || true,
  environment: process.env.NODE_ENV || "development",
  trustProxy: 1,
  jsonSpaces: 2,
  port: process.env.SERVER_PORT || 9000,
  infuraUrl: process.env.INFURA_ENDPOINT,
  alchemyUrl: process.env.ALCHEMY_ENDPOINT,
  urlencoded: {
    extended: false,
    limit: oneMegabyte,
  },
  uploadLimit: oneMegabyte,
  db: {
    url: process.env.DB_URL || "mongodb://localhost",
    database: process.env.DB_NAME || "bounties",
    mongooseCfg: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      autoIndex: true,
    },
  },
  loginTokenCacheOptions: {
    max: 10000,
    length: function (n, key) {
      return n * 2 + key.length;
    },
    dispose: function (key, n) {
      n = "";
    },
    maxAge: 2 * oneDay,
  },
};
