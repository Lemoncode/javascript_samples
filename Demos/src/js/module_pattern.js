var App = App || {};

(function (App){
  App.Car = function (engine, price) {
    var started = false;

    var start = function () {
      if(!started) {
        console.log('car started engine: ' + this.engine);
      }
      started = true;
    };

    var stop = function () {
      if(started) {
        console.log('car stoped engine: ' + this.engine);
      }
      started = false;
    };

    return {
      engine: engine,
      price: price,
      start: start,
      stop: stop
    };
  };
})(App);

(function(App){
  var car1 = App.Car('V12', 3453453543);
  var car2 = App.Car('V8', 64773647);

  car1.start();
  car1.start();
  car2.stop();
  car2.start();
  
})(App);
