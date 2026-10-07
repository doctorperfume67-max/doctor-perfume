const MIN_LOADER_TIME=1850;
const started=performance.now();

function reveal(){
  const elapsed=performance.now()-started;
  const wait=Math.max(0,MIN_LOADER_TIME-elapsed);
  setTimeout(()=>{
    document.body.classList.add("loaded");
    setTimeout(()=>document.body.classList.add("ready"),850);
  },wait);
}

if(document.readyState==="complete") reveal();
else window.addEventListener("load",reveal,{once:true});

document.querySelectorAll('.social[href="#"]').forEach(link=>{
  link.addEventListener("click",event=>event.preventDefault());
});
