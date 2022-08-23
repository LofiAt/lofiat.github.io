function getTime() {
    var CurrentTime = new Date()
    var hour = CurrentTime.getHours()
    var minute = CurrentTime.getMinutes()
  
    if(minute < 10){
      minute = "0" + minute
    }

    if (hour <= 12){
      var ampm = "AM";
    }

    if (hour >= 12) {
      var ampm = "PM";
    }

    if(hour > 12) {
      hour = (hour-12);
    }
    
    if(hour === 0) {
      hour = 12;
    }

    if(hour < 10) {
      hour = "0" + hour;
    }
  
    var GetCurrentTime = hour + ":" + minute + " " + ampm;
    
    document.getElementById("currentTime").innerHTML = GetCurrentTime;
    setTimeout(getTime,100)
}