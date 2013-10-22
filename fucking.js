var data = {
  'start' : {
    question : 'WHAT THE FUCK IS IT?',
    choices : [
      //{ text: "onions", to: 'onions' },
      //{ text: "carrots", to: 'carrots' },
      { text: "milk", to: 'milk' },
      { text: "eggs", to: 'eggs' },
      { text: "cherry tomatoes", to: 'cherry-tomatoes' },
      { text: "honey", to: 'honey' }
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
    question : 'GET SOME FUCKING COOKIES, IT\'S FUCKING FINE.',
    choices : [
      { text: 'i left it out on the counter for a few hours', to: 'milk-leftout' }
    ]
  },
  'milk-leftout' : {
    answer : 'YOU\'RE A FUCKING GENIUS.'
  },
  'milk-lastweek' : {
    question : 'IT\'S FUCKING SPOILED.',
    choices : [
      { text: 'it\'s organic', to: 'milk-organic' }
    ]
  },
  'milk-organic' : {
    answer : 'IT MIGHT BE OK.'
  },
  'eggs' : {
    question : 'WHERE YOU BEEN KEEPING \'EM?',
    choices : [
      { text: "on the counter", to: 'eggs-counter' },
      { text: "in the fridge dude", to: 'eggs-fridge' }
    ]
  },
  'eggs-counter' : {
    answer : 'YOU FUCKING EUROPEAN OR SOMETHING? GET THAT SHIT OUT OF HERE.'
  },
  'eggs-fridge' : {
    question : 'DROP ONE IN A GLASS OF WATER. WHAT THE FUCK\'S IT DOING?',
    choices : [
      { text: "it's standing up! whoa", to: "eggs-float" },
      { text: "it's laying on its side", to: "eggs-sink" }
    ]
  },
  'eggs-float' : {
    answer : "THROW THAT SHIT OUT. IT'S FUCKING SPOILED."
  },
  'eggs-sink' : {
    answer : "THAT'S EGGS BENNY MATERIAL. FUCKING POACH THAT SHIT UP."
  },
  'honey' : {
    question : 'HONEY NEVER GOES BAD. NEXT QUESTION.',
    choices : [
      { text: "it's got crystals", to: 'honey-crystals' }
    ]
  },
  'honey-crystals' : {
    question : "SO NUKE THAT SHIT FOR 15 SECONDS ALREADY. NEXT FUCKING QUESTION",
    choices : [
      { text: "i don't own a microwave", to: "honey-microwave" }
    ]
  },
  'honey-microwave' : {
    answer : "I DON'T FUCKING HAVE TIME FOR THIS."
  },
  'cherry-tomatoes' : {
    question : 'HOW THEY LOOKING?',
    choices : [
      { text: "plump. dat lycopene.", to: "cherryt-plump" },
      { text: "wrinkly", to: "cherryt-wrinkly" }
    ]
  },
  'cherryt-plump' : {
    answer : "ALL ABOARD THE MUHFUCKIN TRAIN TO GRUFFLETOWN."
  },
  'cherryt-wrinkly' : {
    question: 'YOU MAKING A FUCKING SALAD OR SOMETHING?',
    choices: [
      { text: "yeah", to: "cherryt-salad" },
      { text: "nah", to: "cherryt-sauce" }
    ]
  },
  'cherryt-salad' : {
    answer : "NOT WITH THOSE FUCKING TOMATOES YOU AREN'T."
  },
  'cherryt-sauce' : {
    question : 'FUCKING SAUCES AND OMELETS. HOW WRINKLED WE TALKING?',
    choices: [
      { text: "david bowie", to: "cherryt-bowie" },
      { text: "keith richards", to: "cherryt-richards" }
    ]
  },
  'cherryt-bowie' : {
    answer: "THIS IS 'FUCKING SPOILED' TO MAJOR TOM. THOSE 'MATERS MAKE THE GRADE. FUCKING PUT THEM IN A SAUCE AND SERVE AWAY."
  },
  'cherryt-richards' : {
    answer: "YOU CAN'T ALWAYS GET WHAT YOU WANT. FUCKING GET RID OF THOSE THEY'RE FUCKING NARSTY."
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
