const fs = require("fs");

const fetcher = require("./fetchers/elementy.js");

const json = JSON.stringify(fetcher, (k,v) => typeof v === "function" ? "(" + v + ")()" : v);
fs.writeFileSync("./feeds.json",json);