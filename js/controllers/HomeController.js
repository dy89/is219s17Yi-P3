app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/
	$scope.movies = [
    { 
      title:	'The Shawshank Redemption', 
      iscore:	9.3,
      rating:	'R',
      runtime:	142,
      released:	new Date('1994', '09', '14'),
      country:	'USA',
      posters:	['img/shawshank.jpg','img/shawshank2.jpg','img/shawshank3.jpg'],
      imdb:		'http://www.imdb.com/title/tt0111161',
      website:	'https://www.facebook.com/ShawshankRedemptionFilm',
      likes:	1021,
      dislikes:	122,
      posterindex: 0
	},
    { 
      title:	'The Godfather', 
      iscore:	9.2,
      rating:	'R',
      runtime:	175,
      released:	new Date('1972', '02', '24'),
      country:	'USA',
      posters:	['img/godfather.jpg','img/godfather_2.jpg','img/godfather_3.jpg'],
      imdb:		'[http://www.imdb.com/title/tt0068646',
      website:	'https://www.facebook.com/thegodfather',
      likes:	928,
      dislikes:	109,
      posterindex: 0
	},
    { 
      title:	'The Godfather: Part II', 
      iscore:	9.0,
      rating:	'R',
      runtime:	202,
      released:	new Date('1974', '11', '20'),
      country:	'USA',
      posters:	['img/godfather2.jpg','img/godfather2_2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0071562',
      website:	'https://www.facebook.com/thegodfather',
      likes:	855,
      dislikes:	99,
      posterindex: 0
	},
    { 
      title:	'The Dark Knight', 
      iscore:	8.9,
      rating:	'PG-13',
      runtime:	152,
      released:	new Date('2008', '06', '18'),
      country:	'USA',
      posters:	['img/darkknight.jpg','img/darkknight2.jpg'],
      imdb:		'http://www.imdb.com/title/tt0468569',
      website:	'http://www.42entertainment.com/work/whysoserious',
      likes:	828,
      dislikes:	127,
      posterindex: 0
	},
    { 
      title:	'Schindler\'s List', 
      iscore:	8.9,
      rating:	'R',
      runtime:	195,
      released:	new Date('1993', '10', '30'),
      country:	'USA',
      posters:	['img/schindlerslist.jpg'],
      imdb:		'http://www.imdb.com/title/tt0108052',
      website:	'https://www.uphe.com/schindlers-list',
      likes:	812,
      dislikes:	101,
      posterindex: 0
	},
    { 
      title:      'Inception', 
      iscore:     8.8,
      rating:     'PG-13',
      runtime:    148,
      released:   new Date('2010', '07', '16'),
      country:    'USA',
      posters:    ['img/inception1_1.jpg','img/inception1_2.jpg'],
      imdb:       'http://www.imdb.com/title/tt1375666',
      website:    'https://www.facebook.com/inception',
      likes:      632,
      dislikes:   95,
      posterindex: 0
      },
    { 
      title:      'Mad Max: Fury Road', 
      iscore:     8.1,
      rating:     'R',
      runtime:    120,
      released:   new Date('2015', '04', '15'),
      country:    'USA',
      posters:    ['img/madmax_1.jpg','img/madmax_2.jpg'],
      imdb:       'http://www.imdb.com/title/tt1392190',
      website:    'https://www.facebook.com/MadMaxMovie',
      likes:      876,
      dislikes:   93,
      posterindex: 0
      },
    { 
      title:      'The Lord of the Rings: The Fellowship of the Ring', 
      iscore:     8.8,
      rating:     'PG-13',
      runtime:    178,
      released:   new Date('2001', '11', '19'),
      country:    'USA',
      posters:    ['img/lotr_1.jpg','img/lotr_2.jpg'],
      imdb:       'http://www.imdb.com/title/tt0120737',
      website:    'https://www.facebook.com/lordoftheringstrilogy/',
      likes:      1000,
      dislikes:   64,
      posterindex: 0
      }
  ];

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	$scope.title = "IMDB + David's Top 8 Movies";
      $scope.owner = "David";
      $scope.github = "http://www.github.com/dy89/is219s17Yi-P3";
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
	$scope.like = function(index){
            ++$scope.movies[index].likes;
      };	
	$scope.dislike = function(index){
            ++$scope.movies[index].dislikes;
      };
	$scope.posterClick = function(index){
            current = $scope.movies[index];
            if(current.posterindex == current.posters.length - 1){
                  current.posterindex = 0;
            }
            else{
                  ++current.posterindex;
            } 
      };
      $scope.timeText = function(minutes){
            return (minutes -(minutes % 60))/60 + "h " + (minutes % 60) + "m";
      };
	
	
}]);
