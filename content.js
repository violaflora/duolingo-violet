/* This runs after a web page loads*/

/*Code will reload after lessons*/
const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    
    document.querySelectorAll("._3zucw")[0].remove(); /*toolbar ad*/
    document.querySelectorAll(".Ekspr")[0].remove(); /*top sidebar ad*/
    document.querySelectorAll("._1T8FO")[0].remove(); /*shop ad*/
    document.querySelectorAll("._1eTnJ")[0].remove(); /*review icon*/
    
    document.querySelectorAll("._22cC8")[0].src = "https://cdn.discordapp.com/attachments/936701108099907594/1051712588930621530/70a4be81077a8037698067f583816ff9.png"; /*logo replacement*/
    
    doSomething(mutation.target);
    
  });
});
observer.observe(document.body, { subtree: true, childList: true });
