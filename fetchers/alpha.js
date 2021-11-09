module.exports = {
  title: "Alpha Centauri",
  list_url: "https://thealphacentauri.net/",
  list_func: () => {
    let out = [];
    
    for(let pd of document.querySelectorAll('.post-descr')){
      try{
        const a = pd.querySelector('.post-title a');
        const link = a.href;
        const title = a.title;
        var brief = "";
        for(let b of pd.querySelectorAll("p")){
          brief+=b.textContent.trim();
        }
        console.log(brief);
        
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
      let a=document.querySelector('article');
      text+=a.querySelector('#post-title').textContent.trim();
      text+=a.querySelector('#article-text').textContent.trim();
    }catch(e){console.error(e)};
    
    return text;
  },//text_func
}