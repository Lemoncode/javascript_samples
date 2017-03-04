(function () {
   var Time = function () {
       var date = new Date();

       var getLockedTime = function () {
           return date.getTime();
       };

       return {
           getLockedTime: getLockedTime,
           getCurrentTime: function () {
               var date = new Date();
               return date.getTime();
           }
       };
   };

   var print = function (arg) {
       console.log(arg);
   };

   var time = Time();

   print(time.getCurrentTime());
   print(time.getCurrentTime());

   print(time.getLockedTime());
   setTimeout(function () {
       print(time.getLockedTime());
   }, 1000);
})();
