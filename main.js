var wordChoice = chooseword()//commonWords[Math.floor(Math.random() * 100)] //pick random word

function chooseword() {
	let first = commonWords[Math.floor(Math.random() * 100)]
	if(first.length >= 3) {
		return first
	} else {
		return chooseword()
	}
}

console.log(wordChoice)

var guessesleft = 8        //sets guesses left
var trackguesses = []		//holds letters already guessed
var correctguesses = 0		//amount of correct guesses
var wordArr = wordChoice.split("")  //array of letters from selected word
var feedback = ""

var underscores = []   //makes underscores appear before guesses
wordArr.forEach(function() {
	underscores.push("_ ")
})


$("#turnsleft").html(guessesleft)
$("#lettersguessed").html(trackguesses)
$("#word").html(underscores)
$("#feedback").html(feedback)


//take users letter guess and compare to word & changes underscore to correctly guessed letters
function guess(alpha) {

	if (guessesleft != 0 ) {

		wordArr.forEach(function(el, index) {
			if(alpha === el) {
				underscores[index] = alpha + " "
				correctguesses++
			} else {
			}
		})

		trackguesses.push(alpha)
		guessesleft--
		


		if (correctguesses === underscores.length) {
			feedback = "You win!"
		}

		} else {
			feedback = "You are out of guesses!"
		}
		$("#turnsleft").html(guessesleft)
		$("#lettersguessed").html(trackguesses)
		$("#word").html(underscores)
		$("#feedback").html(feedback)
}











