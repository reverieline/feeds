module.exports = {
  list_url: "https://elementy.ru/",
  list_func: () => {
    return document.querySelector(".title").innerHTML;
  },
}