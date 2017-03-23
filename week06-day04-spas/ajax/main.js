
$(function () {
  console.log('page is loaded');


//Hard Way
  function ajaxTheManualWay() {
    var request = new XMLHttpRequest();

    console.log('AJAX the manual way');
    request.open('GET', 'http://api.icndb.com/jokes/random');
    request.addEventListener('load', function () {
      var json = JSON.parse(this.responseText);
      var jokeElement = document.getElementById('joke');

      // console.log('response text:', this.responseText);
      //At this point it hasn't actually made the request
      //It says when I do HTTP request this is where I got to go and run this anonymous function

      jokeElement.innerHTML = json.value.joke;
    });
    request.send();
  }

//Easy way - Most used
  function ajaxTheJQueryWay() {
    console.log('AJAX the jQuery way');

    $.get('http://api.icndb.com/jokes/random', function (data) {
      $('#joke').html(data.value.joke);
    });
  }

  // source: http://stackoverflow.com/a/5915122/155206
  function selectRandomElement (items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  var ajaxFunctions = [ajaxTheManualWay, ajaxTheJQueryWay];
  setInterval(function () {
    var randomAjaxFunction = selectRandomElement(ajaxFunctions);

    randomAjaxFunction();
  }, 5000);
});
