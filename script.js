// Challenge 1

function calcAgeInDays() {
    var yearOfBirth = prompt('Please enter the year you were born:');
    var yourAgeInDays = (2021 - yearOfBirth) * 365;
    //var resultHTML = '<h1 id="ageInDays">You are ' + yourAgeInDays + ' days old!</h1>';
    //document.getElementById('flex-box-result').innerHTML = resultHTML;
    var h1 = document.createElement('h1');
    var textResult = document.createTextNode('You are ' + yourAgeInDays + ' days old!');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textResult);
    document.getElementById('flex-box-result').appendChild(h1);

 }

 function reset() {
     document.getElementById('ageInDays').remove();
 }

 //Challenge 2

 function generateCat() {
    var image = document.createElement('img');
    image.setAttribute('id', 'catimage')
    var div = document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

 }

 function resetTwo() {
     document.getElementById('catimage').remove();
 }

  // Challenge 3: rock, paper, scissors

  function rpsGame(yourChoice) {
      console.log(yourChoice);
      var humanChoice, botChoice;
      humanChoice = yourChoice.id;
      botChoice = numberToChoice(randToRpsInt());
      console.log('Computer choice: ', botChoice);
      result = decideWinner(humanChoice, botChoice);
      console.log(result);
      message = finalMessage(result);
      console.log(message);
      rpsFrontEnd(yourChoice.id, botChoice, message);
  }

  function randToRpsInt() {
      return Math.floor(Math.random() * 3);
  }

  function numberToChoice(number) {
      return ['rock', 'paper', 'scissors'][number];
  }

  function decideWinner(yourChoice, computerChoice) {
      var rpsDatabase = {
          'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
          'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
          'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
      };

      var yourScore = rpsDatabase[yourChoice][computerChoice];
      var computerScore = rpsDatabase[computerChoice][yourChoice];

      return [yourScore, computerScore];
    }

    function finalMessage([yourScore, computerScore]) {
        if (yourScore === 0) {
            return {'message': 'You Lost!', 'color': 'red'}
        } else if (yourScore === 0.5) {
            return {'message': 'You Tied!', 'color': 'yellow'}
        } else {
            return {'message': 'You Won!', 'color': 'green'}
        }
    }

    function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
        var imageDatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src,
        }

        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();

        var humanDiv = document.createElement('div');
        var botDiv = document.createElement('div');
        var messageDiv = document.createElement('div');

        humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 11);'>";
        messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px;'>" + finalMessage['message'] + "</h1>"
        botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(234, 38, 24, 1);'>";

        document.getElementById('flex-box-rps-div').appendChild(humanDiv);
        document.getElementById('flex-box-rps-div').appendChild(messageDiv);
        document.getElementById('flex-box-rps-div').appendChild(botDiv);
    }