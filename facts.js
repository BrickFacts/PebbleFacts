var UI = require('ui');
var ajax = require('ajax');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Brick Facts',
  subtitle:'Fetching...'
});

// Display the Card
card.show();

// Construct URL
var URL = 'http://balmy-channel-92009.appspot.com/api';

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched fact");

    // Extract data
    var fact = data.fact;

    card.title('Brick Fact:');
    card.subtitle('');
    card.body(fact);

  },
  function(error) {
    // Failure!
    console.log('Failed fetching fact: ' + error);
  }
);

card.on('click', function(e) {
  ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log("Successfully fetched fact");

    // Extract data
    var fact = data.fact;

    card.title('Brick Fact:');
    card.subtitle('');
    card.body(fact);

  },
  function(error) {
    // Failure!
    console.log('Failed fetching fact: ' + error);
  }
);

});
