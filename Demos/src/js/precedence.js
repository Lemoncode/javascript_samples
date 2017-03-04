var g = "I'm on global";

var func = function () {
  var local = "I'm in local";
  var g = "I'm in local as well'";
  console.log(local);
  console.log(g);
};

console.log(g);
func();
