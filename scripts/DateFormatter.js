/*getMonthYear: function(date){
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        return month + '/' + year; //return "9/2017
    }
*/



var DateFormatter = {
    //Example: "4:20 PM", "3:00 AM" - find out what the % does in this code
    getShortTime: function(d){
        var hours = d.getHours();
        var minutes = d.getMinutes();
        var amOrPM = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        var shortTime = hours + ':' + minutes + ' ' + amOrPM;
        return shortTime;
    },
    //Example: "4:20:20 PM", "3:00:33 AM" - above plus seconds
    getLongTime: function(d){
         var hours = d.getHours();
        var minutes = d.getMinutes();
        var amOrPM = hours >= 12 ? "PM" : "AM"; 
        var seconds = d.getSeconds();  
        hours = hours % 12;
        hours = hours ? hours : 12;
        var longTime = hours + ':' + minutes + ':' + seconds + ' ' + amOrPM;
        return longTime;
    },
    //Example: "1/20/2017", "10/15/2017"
    getShortDate: function(d){
        var months = d.getMonth();
        var days = d.getDate();
        var year = d.getFullYear();
        months++;
        days++;
        var shortDate = months + '/' + days + '/' + year;
        return shortDate;
    },
    //Example: "January 20, 2017", "October 15, 2017"
    getLongDate: function(d){
        var months = d.getMonth();
        var monthNameArray = ["January",
         "Febuary",
          "March",
           "April",
            "May",
             "June",
              "July",
               "August",
                "September",
                 "October",
                  "November",
                   "December"];
        var monthName = monthNameArray[months];
        var days = d.getDate();
        var year = d.getFullYear();
        var longDate = monthName + ' ' + days + ', ' + year;
        return longDate;
    },
    //'1/20/2017 4:20 PM', '10/15/2017 3:00 AM'- am I using var me correctly? run test
    getShortDateTime: function(d){
        var me = this;
        var shortDateTime = me.getShortDate(d) + ' ' + me.getShortTime(d);
        return shortDateTime;
    },
    //Example: "January 20, 2017 4:20 PM", "October 15, 2017 3:00 AM"
    getLongDateTime: function(d) {
        var me = this;
        var longDateTime = me.getLongDate(d) + ' ' + me.getShortTime(d);
        return longDateTime;
    },
    //Example: "Friday, January 20, 2017 4:20 PM"
    getExtendedDateTime: function(d) {
        var me = this;
        var weekday = d.getDay();
        var weekdayArray = ["Sunday", 
        "Monday",
         "Tuesday",
          "Wednesday",
           "Thursday",
            "Friday",
             "Saturday"];
        var weekdayActual = weekdayArray[weekday];
        var extendedDateTime = weekdayActual + ', ' + me.getLongDateTime(d);
        return extendedDateTime;
    }
    
    };

    /*//bottom of DateFormatting.js
    var getMonthYear = DateFormatter.getMonthYear(new Date());
    console.log('Get Month Year ' + getMonthYear);
    */
    var getShortTime = DateFormatter.getShortTime(new Date());
    console.log('Get Short Time' + " " + getShortTime);

    var getLongTime = DateFormatter.getLongTime(newDate());
    console.log('Get Long Time' + "" + getLongTime);
    