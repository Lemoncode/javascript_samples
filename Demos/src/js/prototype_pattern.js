var App = App || {};

(function (App) {
  App.Car = function(engine, price) {
    this.engine = engine;
    this.price = price;
  };

  App.Car.prototype = {
    start: function() {
      console.log('car started');
    },
    stop: function () {
      console.log('car stopped');
    }
  };

})(App);


(function (App) {
  var car1 = new App.Car('V12', 345353);
  var car2 = new App.Car('V8', 89489449);
  car1.start();
  car2.stop();
  var car3 = App.Car('HJ', 1000);
  console.log(car3);
})(App);
