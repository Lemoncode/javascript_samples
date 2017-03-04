(function () {
  var showMyArgs = function () {
    if(arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
      }
    } else {
      console.log('No arguments provided');
    }
  };
  showMyArgs();
  showMyArgs('pepe', 34, { description: 'Jaim' }, [2, 'a', 89.09]);
})();
