const jsdom = require("jsdom");

const fetcher = require("./fetchers/elementy.js");

const vc = new jsdom.VirtualConsole();
//vc.sendTo(console);

/*jsdom.JSDOM.fromURL(fetcher.list_url,{
  virtualConsole: vc,
  pretendToBeVisual: true,
  runScripts: "dangerously", 
}).then(dom=>{
  global.window=dom.window;
  global.document=dom.window.document;
  console.log(fetcher.list_func());
});*/

jsdom.JSDOM.fromURL("https://elementy.ru/novosti_nauki/433879/Kak_predki_cheloveka_ostalis_bez_khvosta#forum",{
  virtualConsole: vc,
  pretendToBeVisual: true,
  runScripts: "dangerously", 
}).then(dom=>{
  global.window=dom.window;
  global.document=dom.window.document;
  console.log(fetcher.text_func());
});
