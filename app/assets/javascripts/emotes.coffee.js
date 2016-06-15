// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

// selectors:
//   $('#log-in-lnk') : 'log-in'
//   $('#sign-up-lnk') : 'sign-up'
//   $('#login-modal') : 'login-modal'



$(function(){
  var login = $('#log-in-lnk'), loginModal = $('#log-in-modal'), signup = $('#sign-up-lnk'), signupModal = $('#sign-up-modal');

  login.click(function(e){
    $(loginModal).modal('show');
    e.preventDefault();
  });

  signup.click(function(e){
    $(signupModal).modal('show');
    e.preventDefault();
  });

})
