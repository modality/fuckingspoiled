var data = {
  'start' : {
    question : 'WHAT THE FUCK IS IT?',
    choices : [
      //{ text: "eggs", to: 'eggs' },
      //{ text: "onions", to: 'onions' },
      //{ text: "carrots", to: 'carrots' },
      { text: "milk", to: 'milk' }
    ]
  },
  'milk' : {
    question : 'WHEN THE FUCK DID YOU BUY IT?',
    choices : [
      { text: "this week", to: 'milk-thisweek' },
      { text: "last week", to: 'milk-lastweek' }
    ]
  },
  'milk-thisweek' : {
    question : 'GET SOME FUCKIN COOKIES, IT\'S FUCKIN FINE.',
    choices : [
      { text: 'i left it out on the counter for a few hours', to: 'milk-leftout' }
    ]
  },
  'milk-leftout' : {
    answer : 'YOU\'RE A FUCKIN GENIUS.'
  },
  'milk-lastweek' : {
    question : 'IT\'S FUCKIN SPOILED.',
    choices : [
      { text: 'it\'s organic', to: 'milk-organic' }
    ]
  },
  'milk-organic' : {
    answer : 'IT MIGHT BE OK.'
  }
}


var fucking = (function(){
  var target = '#fucking';

  var init = function() {
    bindUI();
    show('start');

  }

  var bindUI = function() {
    $('.choice').live('click', function() {
      show($(this).attr('name'));
    });

    $('.answer').live('click', reset)
  }
  
  var reset = function() {
    show('start');
  }
  
  var show = function(key) {
    var round = data[key];

    if(round) {
      if(round.question) {
        var html = [];
        for(var i=0;i<round.choices.length;i++) {
          var choice = round.choices[i];
          html.push('<input class="choice" type="button" name="'+choice.to+'" value="'+choice.text+'" />');
        }
        html = html.join('');

        $(target)
          .empty()
          .append('<h1>'+round.question+'</h1>')
          .append(html);
      } else {
        $(target)
          .empty()
          .append('<h1>'+round.answer+'</h1>')
          .append('<input class="answer" type="button" value="start over" />');
      }
    } else {
      reset();
    }
  }

  this.init = init;
  return this;
}());

$(fucking.init)