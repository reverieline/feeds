const jsdom = require("jsdom");

const fetcher = require("./fetchers/alpha.js");

const vc = new jsdom.VirtualConsole();
jsdom.JSDOM.fromURL(fetcher.list_url,{
  virtualConsole: vc,
  pretendToBeVisual: true,
  runScripts: "dangerously", 
}).then(dom=>{
  global.window=dom.window;
  global.document=dom.window.document;
  console.log(fetcher.list_func());
});

