function showResult(){
    var today =  new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    var hour = today.getHours();
    var min = today.getMinutes();
    var Clockk ;
    month = month + 1;

    if(min < 10){
        min = "0"+min;
    }

    if(hour < 10){
        hour = "0"+hour;
    }

    if(hour > 12){
       hour = TrimTime(hour);
        Clockk = "pm";
    }else{
        Clockk = "am";
    }

// document.write("Today`s Date : "+ day+"/"+month+"/"+year);
// document.write("Today`s Time : "+ hour+":"+min);
var datee  = "Current Date : "+ day+"/"+month+"/"+year;
var timee  = "Current Time : "+ hour+":"+min+"  "+Clockk;
document.getElementById("date").innerHTML = datee;
document.getElementById("time").innerHTML = timee;
}

function TrimTime(hour){
    var trim = hour;
    hour = parseInt(trim) - 12;

    return hour;
}