$(document).ready(function() {
  console.log("Loaded");
  $('.song').append('<li>');
  renderIntroLyrics();
  setTimeout(renderVerse1Lyrics, 31500);
  setTimeout(renderChorusLyrics, 59500);
  setTimeout(renderVerse2Lyrics, 93000);
  setTimeout(renderChorusLyrics, 121500);
  setTimeout(renderCoreLyrics, 149500);
  setTimeout(renderChorusLyrics, 188000);
  setTimeout(renderVerse3Lyrics, 221000);
});


var songIntro = ['In 1972, under a scorching June Sun',
'In the French Coastal town of Marseilles',
'Two Algerian immigrants awaited the birth of their 5th child',
'Later that day, a star was born']

var songVerse1 = ['Cristiano Ronaldo',
'Wayne Rooney, Veron',
'Suarez, Van Basten',
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
'But the strongest of them all']

var songChorus = ['Zinedine Zidane',
'Zinedine Zidane',
'Superstar',
'Superstar',
'Zinedine Zidane',
'Zinedine Zidane',
'Superstar',
'Superstar'];

var songVerse2 = ['Lionel Messi',
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
'But the strongest of them all'];

var songCore = ['And he’ll burn through the dark like a fire (Puskas, Eusebio)',
'So much more than the world was dreaming of wa ya ya (Beckenbauer, Platini, Best)',
'He’ll fight (Charlton) And his light (Cruyff) will shine on and on and on (Baggio)',
'Oh, why (Diego Armando Maradona) with his will to survive (Pele)']

var songVerse3 = ['Canavarro, Karagounis, Chicharito, William Gallas',
'Sanchez, Mark Bosnic, Hulk, Alexi Lalas',
'Wilkshere, Honda, Busquets, Dickie, Simao',
'Thierry Henry, Modric, Vidal, Park Ji Sung, Donovan, Eto, Zizou',
'ZIZOU',
'Zinedine Zidane',
'Zinedine Zidane',
'He is a part of things, he is a part of things',
'Song By Vaudeville Smash - Zinedine Zidane (Feat. Les Murray)'];

// function renderLyricsAgain() {
//   var i = 0;
//   $('.song').append('<li>');
//   var intervalId = setInterval(function() {
//   		if (i === songLyrics.length) {
//   			clearInterval(intervalId);
//   		} else {
//     		$('li').text(songLyrics[i]).hide().slideDown(600);
//         $('li').addClass('line');
//     		i++;
//       }
//   }, 2500);
// };

function renderIntroLyrics() {
  var i = 0;
  // $('.song').append('<li>');
  var intervalId = setInterval(playIntro, 3500);

  function playIntro(){
  		if (i === songIntro.length) {
  			clearInterval(intervalId);
  		} else {
    		$('li').text(songIntro[i]).hide().slideDown(1700);
        $('li').addClass('line');
    		i++;
      }
  }
};

  function renderVerse1Lyrics() {
    var i = 0;
    // $('.song').append('<li>');
    var intervalId = setInterval(playVerse, 1900);

  function playVerse(){
    if (i === songVerse1.length) {
      clearInterval(intervalId);
    } else {
      $('li').text(songVerse1[i]).hide().slideDown(800);
      $('li').addClass('line');
      i++;
    }
  }
};

function renderVerse2Lyrics() {
  var i = 0;
  // $('.song').append('<li>');
  var intervalId = setInterval(playVerse, 1950);

function playVerse(){
  if (i === songVerse2.length) {
    clearInterval(intervalId);
  } else {
    $('li').text(songVerse2[i]).hide().slideDown(800);
    $('li').addClass('line');
    i++;
  }
}
};
function renderVerse3Lyrics() {
  var i = 0;
  // $('.song').append('<li>');
  var intervalId = setInterval(playVerse, 3600);

function playVerse(){
  if (i === songVerse3.length) {
    clearInterval(intervalId);
  } else {
    $('li').text(songVerse3[i]).hide().slideDown(1000);
    $('li').addClass('line');
    i++;
  }
}
};
function renderCoreLyrics() {
  var i = 0;
  // $('.song').append('<li>');
  var intervalId = setInterval(playCore, 7500);

  function playCore(){
    if (i === songCore.length) {
      clearInterval(intervalId);
    } else {
      $('li').text(songCore[i]).hide().slideDown(2000);
      $('li').addClass('line');
      i++;
    }
  }
};

function renderChorusLyrics() {
  var i = 0;
  // $('.song').append('<li>');
  var intervalId = setInterval(playChorus, 3650);

  function playChorus(){
    if (i === songChorus.length) {
      clearInterval(intervalId);
    } else {
      $('li').text(songChorus[i]).hide().slideDown(2700);
      $('li').addClass('line');
      i++;
    }
  }
};
