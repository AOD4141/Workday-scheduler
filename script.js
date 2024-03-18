//Define the variable for today's date along with the format
var today = moment().format('dddd, MMMM D, YYYY ');

var now = moment().format('H A');

// current day

$("#currentDay").text(today);


// /* planforWorkday entries for one hour of the workday */
 var planforWorkday = [
    { time: "9 AM", event: "" },
  { time: "10 AM", event: "" },
       { time: "11 AM", event: "" },
   { time: "12 PM", event: "" },
    { time: "1 PM", event: "" },
   { time: "2 PM", event: "" },
     { time: "3 PM", event: "" },
    { time: "4 PM", event: "" },
    { time: "5 PM", event: "" },
	   { time: "6 PM", event: "" },
      ];
