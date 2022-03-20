// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (10000 * 60 * 60 * 24));
// //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("timerCountdown").innerHTML = days + ":" + hours + ":"
//   + minutes + ":" + seconds + "";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timerCountdown").innerHTML = "EXPIRED";
//   }
// }, 1000);


var timer;
var date = $('.counter').attr('data-date');
var t = date.split(/[- :]/);
var d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
var compareDate = new Date(d);
compareDate.setDate(compareDate.getDate());
timer = setInterval(function () {
    timeBetweenDates(compareDate);
}, 1000);
function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();
    if (difference <= 0) {
        clearInterval(timer);
    } else {
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $(".days").text(days);
        $(".hours").text(hours);
        $(".minutes").text(minutes);
        $(".seconds").text(seconds);
    }
}