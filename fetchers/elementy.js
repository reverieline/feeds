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
    
    try{
      let b=document.querySelector('.body');
      text+=b.textContent.trim();
    }catch(e){console.error(e)};
    
    return text;
  },//text_func
}