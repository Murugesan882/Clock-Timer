const strButton = document.querySelector('.start');
const spButton = document.querySelector('.stop');
const rtButton = document.querySelector('.reset');
let hrs=min=sec=ms=0 ,startclock;
strButton.addEventListener('click',()=>{
    strButton.classList.add('start-setup');
    spButton.classList.remove('start-setup');
    startclock=setInterval(() => {
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
        setTime();
        
    }, 10);
setTime();
    

});
spButton.addEventListener('click',()=>{
    clearInterval(startclock);
    strButton.classList.remove('start-setup');
    strButton = spButton.classList.add('start-setup');
    

});
rtButton.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    clearInterval(startclock);
    setTime();
    strButton.classList.remove('start-setup');
    spButton.classList.remove('start-setup');

});
function setTime(){
    chrs=hrs<10?"0"+hrs:hrs;
    cmin=min<10?"0"+min:min;
    csec=sec<10?"0"+sec:sec;
    cms=ms<10?"0"+ms:ms;
document.querySelector('.hrs').innerText = chrs;
document.querySelector('.min').innerText = cmin;
document.querySelector('.sec').innerText = csec;
document.querySelector('.ms').innerText = cms;



}