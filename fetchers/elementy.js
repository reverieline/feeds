module.exports = {
  title: "Elementy",
  list_url: "https://elementy.ru/novosti_nauki/",
  list_func: () => {
    let out = [];
    
    for(let a of document.querySelectorAll('a[href^="/novosti_nauki/"]')){
      try{
        const link = a.href;
        const brief = a.querySelector(".brief").textContent;
        const title = a.querySelector(".title").textContent;
        out.push({
          link: link,
          title: title,
          brief: brief,
        });
      }catch(e){};
    }
    
    return out;
  },//list_func
  text_func: () => {
    let text="";
    
    const ra=(selector)=>{
      for(let  e of document.querySelectorAll(selector))
        e.remove();
    }

    try{
      text=document.querySelector(".itemhead").textContent;
      text+="\r\n";
      
      let b=document.querySelector('.body');

      ra("div.chead");
      ra("script");
      ra("div.crblock");
      ra("div.mb");
      ra("div.cl");
      ra("div.other_block");
      ra(".fmctrl");

      text+=b.textContent.trim();
    }catch(e){console.error(e)};
    
    return text;
  },//text_func
}