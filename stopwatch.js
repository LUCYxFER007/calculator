let shr=document.getElementById("shr");
let smin=document.getElementById("smin");
let ssec=document.getElementById("ssec");

let hr=0;
let min=0;
let sec=0;
let start = document.getElementById("sstart");
let timer=null;
start.addEventListener("click",()=>{
    if (timer !== null) {
        return; // Timer is already running
    }


    timer = setInterval(() => {

    sec++;

    if (sec >= 60) {
        sec = 0;
        min++;
    }

    if (min >= 60) {
        min = 0;
        hr++;
    }

   shr.innerText = String(hr).padStart(2, "0")+":";
smin.innerText = String(min).padStart(2, "0")+":";
ssec.innerText = String(sec).padStart(2, "0");

}, 1000);
})
let pause = document.getElementById("spause");
pause.addEventListener("click",()=>{
    //function
  clearInterval(timer);
    timer = null;
});
let reset= document.getElementById("sreset");
reset.addEventListener("click",()=>{
    clearInterval(timer);
    timer = null;
    sec=0;
    min=0;
    hr=0;
    shr.innerText = String(hr).padStart(2, "0")+":";
smin.innerText = String(min).padStart(2, "0")+":";
ssec.innerText = String(sec).padStart(2, "0");

})

