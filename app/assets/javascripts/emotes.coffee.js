// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// selectors:
//   $('#log-in-lnk') : 'log-in'
//   $('#sign-up-lnk') : 'sign-up'
//   $('#login-modal') : 'login-modal'



$(function(){
  // console.log("Ready!");
  var login = $('#log-in-lnk'), modal = $('#log-in-modal');
  console.log(login);
  console.log(modal);
  login.click(function(e){
    console.log("clicked");
    $(modal).modal('show');
    e.preventDefault();

  });
})();
