$(document).ready(function() {
  console.log("Loaded");
  renderLyricsAgain();
  // renderLyricsAgain();
});


var songLyrics = ['In 1972, under a scorching June Sun',
'In the French Coastal town of Marseilles',
'Two Algerian immigrants awaited the birth of their 5th child',
'Later that day, a star was born',
'Christiano Ronaldo',
'Wayne Rooney, Veron',
'Suaraz, Van Basten',
'Gianluigi Buffon',
'Xavi, Iniesta',
'Drogba, Hazard',
'Tevez, Schweinsteiger',
'Stephen Gerard',
'Alessandro Del Piero',
'Neymar, Forlan',
'Ozil, Nakata',
'Jean-Pierre Papin',
'Ballack, Van Persie',
'Beckham, Giggs, Scholes',
'But the strongest of them all',
'Zinedine Zidane, Zinedine Zidane',
'Superstar, superstar',
'Zinedine Zidane, Zinedine Zidane',
'Superstar, superstar',
'Lionel Messi',
'Gareth Bale, Kewell',
'Nedved, Maldini',
'Aguero, Raul',
'Casillas, Cavani',
'Benzema, Mandzukic',
'Mario Balotelli',
'Zlatan Ibrahimovic!',
'Lothar Matthaus',
'Shevchenko, Cantona',
'Ronaldinho, Ronaldo, Romario, Rivaldo, Robinho, Ramirez, KAKA',
'Falcao, Frank Ribery',
'Pirlo, Cahill, Kompany',
'But the strongest of them all',
'Zinedine Zidane, Zinedine Zidane',
'Superstar, superstar',
'Zinedine Zidane, Zinedine Zidane',
'Superstar, superstar',
'And he’ll burn through the dark like a fire (Puskas, Eusebio)',
'So much more than the world was dreaming of wa ya ya (Beckenbauer, Platini, Best)',
'He’ll fight (Charlton)',
'And his light (Cruyff)',
'will shine on and on and on (Baggio)',
'Oh, why (Diego Armando Maradona)',
'With his will to survive (Pele)',
'Zinedine Zidane, Zinedine Zidane',
'Superstar, superstar',
'Zinedine Zidane, Zinedine Zidane',
'Superstar, superstar',
'Canavarro, Karagounis, Chicharito, William Gallas',
'Sanchez, Mark Bosnic, Hulk, Alexi Lalas',
'Wilkshere, Honda, Busquets, Dickie, Simao',
'Thierry Henry, Modric, Vidal',
'Park Ji Sung, Donovan, Eto, Zizou',
'ZIZOU',
'Zinedine Zidane, Zinedine Zidane',
'He is a part of things, he is a part of things'];

function renderLyricsAgain() {
  var i = 0;
  $('.song').append('<li>');
  var intervalId = setInterval(function() {
  		if (i === songLyrics.length) {
  			clearInterval(intervalId);
  		} else {
    		$('li').text(songLyrics[i]).hide().slideDown(600);
        $('li').addClass('line');
    		i++;
      }
  }, 2500);
};
