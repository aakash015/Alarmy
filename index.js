console.log("connected");

const btn  = document.getElementById("btnSubmit");

btn.addEventListener("click",playSound);

  
function playSound(e) 
{
  e.preventDefault();
    
    const time = new Date(document.getElementById("myTime").value);
    const  now = new Date()
    console.log(time);
    console.log(now);
   let total_millisec = time-now;
   
  console.log(total_millisec);
  if(total_millisec>=0)
  {
     setTimeout(function(){
        var a = new Audio('BAWA BAJTE HAIN (DOON MEIN KIDHAR) BLACK LABEL MIXTAPE ANIKET X DAKAIT X 2FISTD.mp3');
    a.play();
    a.currentTime = 13;
     },total_millisec);
  }

   
}

