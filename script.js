const log = document.getElementById('res-1');
const state = document.getElementById('res-2');
const startbtn = document.getElementById('on');
const stopbtn = document.getElementById('off');

startbtn.addEventListener("click",()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);
    startbtn.disabled = true;
    stopbtn.disabled = false;
})

stopbtn.addEventListener("click",()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    startbtn.disabled = false;
    stopbtn.disabled = true;
    log.textContent="";
    state.textContent="";
})

function handledown(e){
    log.textContent = `KEY: ${e.key}`;
    state.textContent = "Key Is Pressed Down";
}

function handleup(e){
    log.textContent = `KEY: ${e.key}`;
    state.textContent = "Key Is Pressed Up";
}