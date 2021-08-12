const fs = require("fs");
const path = require('path');

const fetchers_dir = './fetchers/';

const fetchers = fs.readdirSync(fetchers_dir);
let out=[];
for(const f of fetchers){
    if(path.extname(f)==='.js'){
        const fetcher = require(fetchers_dir+f);
        out.push(fetcher);
    }
}

const json = JSON.stringify(out, (k,v) => typeof v === "function" ? "(" + v + ")()" : v);
    fs.writeFileSync("./feeds.json",json);       