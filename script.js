var running=false;
var stopped=false;

function setup(){
    if(running==false){
        running=true;
        var time_input=document.getElementById("timeInput").value;
        var time=time_input*60;
        function timeIt(){
            minutes=parseInt(time/60);
            seconds=time%60;
            if(minutes<10){
                minutes="0"+minutes;
            }
            if(seconds<10){
                seconds="0"+seconds
            }
            document.getElementById("time").innerHTML=minutes+" : "+seconds;
            
            if(time==0){
                document.getElementById("time").innerHTML="Times Up!";
                clearInterval(timer);
                running=false;
            }
            else if (stopped==true){
                clearInterval(timer);
                document.getElementById('time').innerHTML="00:00";
                stopped=false;
                running=false;
            }
            time--;    
        }
    var timer=setInterval(timeIt,1000);
    }
    
}
function stop(){
    stopped=true;
}