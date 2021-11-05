//Here we write the logic behind the Timer Applciation
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
                document.getElementById('audio-timer').play();
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

//Here we write the logic behind our To Do  Application
function AddToDo(){
    

    var text=document.getElementById('input-text');

    if(text.value.length>0) {

        header_text=document.createElement("P");
        var txtNode = document.createTextNode(text.value);
        ul_item=document.getElementsByTagName('UL')[0];
        li_item=document.createElement('LI');

        header_text.appendChild(txtNode);
        li_item.appendChild(header_text);
        ul_item.insertBefore(li_item,ul_item.childNodes[0]);

        var close = document.getElementsByClassName("close");
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li_item.appendChild(span);

        for (i = 0; i < close.length; i++) { // A list item should disappear if the close button is clicked
            close[i].onclick = function() {
            var div = this.parentElement;
            div.parentNode.removeChild(div);
            }
        }
        
        text.value="";
    }
}

//Here we write the logic behind our Chat Application 
doubts=[];

function AddDoubt(){
  
}
