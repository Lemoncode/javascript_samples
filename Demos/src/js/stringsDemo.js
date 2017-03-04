var App = App || {};

(function (App) {
  App.retriever = function () {
    var operationContainer = [
      {
        code: 'var str = "The quick " + "pink " + "little piggy.";',
        result: function () {
          var str = "The quick " + "pink " + "little piggy.";
          return str;
        }
      },
      {
        code: 'var str = "The quick pink little piggy.";' +
        '\n' +
        'str.toLowerCase();',
        result: function () {
          var str = "The quick pink little piggy.";
          return str.toLowerCase();
        }
      },
      {
        code: 'var str = "The quick pink little piggy.";' +
        '\n' +
        'str.toUpperCase();',
        result: function () {
          var str = "The quick pink little piggy.";
          return str.toUpperCase();
        }
      },
      {
        code: 'var str = "The quick pink little piggy.";' +
        '\n' +
        'str.charAt(2);',
        result: function () {
          var str = "The quick pink little piggy.";
          return str.charAt(2);
        }
      }
    ];

    var getOperationContainer = function () {
      return operationContainer;
    };

    var setCode = function (code) {
      var codeBlock = document.getElementById('statement');
      codeBlock.innerHTML = code;
    };

    var setResult = function (result) {
      var resultBlock = document.getElementById('result');
      resultBlock.innerHTML = result;
    };

    return {
      setCode: setCode,
      setResult: setResult,
      getOperationContainer: getOperationContainer
    }
  }();
})(App);


(function(App) {
  var button = document.getElementById('next');
  var i = 0;
  var operationContainer = App.retriever.getOperationContainer();
  button.addEventListener('click', function (event) {
    event.stopPropagation();

    printResult(operationContainer[i])

    if (i < operationContainer.length - 1) {
      i += 1;
    } else {
      i = 0;
    }

  }, false);

  var printResult = function (operation) {
    App.retriever.setCode(operation.code);
    App.retriever.setResult(operation.result());
  };

})(App);
