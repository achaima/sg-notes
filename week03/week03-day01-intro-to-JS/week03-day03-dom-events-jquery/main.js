console.log('in main.js');

//The concept here is that you are waiting for the DOM to be ready for the rest of Javascript
document.addEventListener('DOMContentLoaded', function () {

  console.log(document); //This puts the whole HTML structure in the inspect console
  console.log(document.body);

  console.log(('---using querySelectorAll'));

  var selectedListItems = document.querySelectorAll('.selected');
  console.log('selectedListItems:', selectedListItems);

  for ( var i = 0 ; i < selectedListItems.length; i++) {
    console.log('selected list item style:', selectedListItems[i].style);
    selectedListItems[i].style.color = 'red';
  }

  console.log('Create and append a new element');

  var newListItem = document.createElement('li'); //this only exists in Javascript land and so nothing appears
//1.So here we created a list item

  newListItem.innerHTML = 'in New York';
//2. Now you've created content for this element but haven't actually connected either'

//Still at this point haven't done anything to put it in the DOM. We have created and modified it.
//Theres two stages:
//create how you want it
//then insert it

// We are going to call .appendChild() on the parent <ul> element.
//That <ul> element has an ID attribute
  var listContainer = document.getElementById('item-list');
//3.Now we know the Id and where to find it and command the computer to get it

  listContainer.appendChild(newListItem);
//4. Now we have the list item we add the command to append child and put in the content we created earlier in newListItem
//This goes and appends the variable you created early on to the ID

//My Attempt adding a new list item using a class name

  newListItem.setAttribute('class','selected');



// -------EVENTS

  console.log('----DOM events');

//1. Create a reference in Javascript

  var pickMeButton = document.getElementById('pickMeBtn');
//function 1
// pickMeButton.addEventListener('click', function () {
//   alert('Picked!');
// });
//function 2
  pickMeButton.addEventListener('click', function() {
    pickMeButton.innerHTML = 'Clicked!';
  });

});
