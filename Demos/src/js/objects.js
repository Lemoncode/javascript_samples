var student = {
  subjects: [
    'dance',
    'puppet',
    'play'
  ],
  doHomework: function(homeWork) {
    console.log("I've done my duties!!");
  },
  name: 'Lau',
  lastName: 'Salas'
};

var showMyValues = function (obj) {
  for (var key in obj) {
    var value = obj[key];
    console.log(value);

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
      }
    }
  }
};

showMyValues(student);
