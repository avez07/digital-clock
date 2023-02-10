function display(){
    var d = new Date();
const weeks = ["SUNDAY" , "MONDAY" , "TUSDAY" , "WENESDAY" , "THURSDAY" , "FRIDAY" , "SATURDAY"]
const month = ["Jan" , "Feb" , "Mar" , "Apr" , "May" , "Jun" , "July" , "Aug" , "SepJ" , "Oct" , "Nov" , "Dec" , ]
var hrs = d.getHours();
var mins = d.getMinutes();
var sec = d.getSeconds();
var day = weeks[d.getDay()];
var date = d.getDate();
var months = month[d.getMonth()];
var year = d.getFullYear();

var hrotation = 30*hrs + mins/2;
var mrotation = 6*mins;
var srotation = 6*sec;

document.getElementById("hours").style.transform = `rotate(${hrotation}deg)`;
document.getElementById("minuts").style.transform = `rotate(${mrotation}deg)`;
document.getElementById("seconds").style.transform = `rotate(${srotation}deg)`;





var session = document.getElementById("session")




 if(hrs > 12){
    hrs =  hrs - 12;
    session.innerHTML = "PM"
}
 

 if(sec < 10){
    sec = "0" + sec;
}
 if(mins < 10){
    mins = "0" + mins;
}
 

document.getElementById("hour").innerHTML = hrs;
document.getElementById("min").innerHTML = mins;
document.getElementById("sec").innerHTML = sec;
document.getElementById("weeks").innerHTML = day;
document.getElementById("date").innerHTML = date;
document.getElementById("month").innerHTML = months;
document.getElementById("year").innerHTML = year;
console.log(session)



}
setInterval(display ,10);