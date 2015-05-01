  portfolioApp.controller("PortfolioListController", function($scope, FIREBASE_URL, $firebaseArray, $firebaseObject){

    // var portfolios = [    {name: 'vessel1309', title: 'Call of Booty', date: '2013-09-01', description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', imageurl: 'images/drunkenPirate_thumb3.png' },

    // {name: 'innocents1404', title: 'The Sack of the Innocents', date: '2014-04-15', description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', imageurl: 'images/drunkenPirate_thumb2.png' },

    // {name: 'firstmate1210', title: 'Pipe and First Mate', date: '2012-10-01', description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', imageurl: 'images/drunkenPirate_thumb1.png' }
    // ];


    //points to the particular firebase app
    //e.g setting the mongodb
    var ref = new Firebase(FIREBASE_URL)
    //different "document" e.g. mongo
    var postRef = ref.child('portfolios');

    $scope.portfolios = $firebaseArray(postRef);

    console.log($scope.portfolios)
    console.log(postRef.key());
    
    postRef.on('value', function(snapshot){
      console.log(snapshot.val());
    }, function(errorObject){
      console.log(err)
    })


//AOyREerJIT8iQwL6JX9cWz


    $scope.addPortfolio = function( new_portfolio ){
      // postRef.child(new_portfolio['name']).push(new_portfolio);
      postRef.push({
        name: new_portfolio.name,
        date: Firebase.ServerValue.TIMESTAMP,
        description: new_portfolio.description,
        //date: new_portfolio.date,
        imageurl: imageUpped,
        title: new_portfolio.title  
      })

      $scope.addPortfolio = {};
    }

    var imageUpped;

    $scope.pickImg = function fileUpload( new_img ){
      filepicker.setKey("AOyREerJIT8iQwL6JX9cWz");

      filepicker.pick(
        {
          mimetypes: ['image/*', 'text/plain'],
          container: 'window',
          services:['COMPUTER'],
        },
        function(Blob){
          imageUpped = Blob.url;
          console.log(imageUpped);
        },
        function(FPError){
          console.log(FPError.toString());
        }
      );
    }

    // postRef.set({'vessel1309' : {name: 'vessel1309', title: 'Call of Booty', date: '2013-09-01', description: 'Arrrgh mateys! This be the finest vessel sailing these seas that yer eyes ever laid sight on. Arrrgh.', imageurl: 'images/drunkenPirate_thumb3.png' },

    // 'innocents1404' : {name: 'innocents1404', title: 'The Sack of the Innocents', date: '2014-04-15', description: 'This be a detail of the sacking of the innocents where I played an important role as business analyst and in implementation.', imageurl: 'images/drunkenPirate_thumb2.png' },

    // 'firstmate1210': {name: 'firstmate1210', title: 'Pipe and First Mate', date: '2012-10-01', description: 'After a hard day of lootin\' and shootin\' I like to relax with my best mates and tally up the days booty.', imageurl: 'images/drunkenPirate_thumb1.png' }})
    
    // portfolios.forEach(function(x){
    //   postRef.child(x['name']).set(x)
    // })

    // $scope.addPortfolio = function( new_portfolio ) {
    //   $scope.portfolios.push( new_portfolio );
    //   $scope.add_portfolio = {};
    // };

  });
