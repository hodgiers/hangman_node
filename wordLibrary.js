var inquirer = require("./inquirer");

var wordList = ["sky", "pail", "pickle", "cloth", "slip", "pin", "basin", "wrist", "sense", "town", "book", "hill", "food", "event,", "nation", "soda", "apparatus", "waste", "bone"];

//originally named pickWord
function wordLibrary(){
	var randomNumber = Math.floor(Math.random()*wordList.length);
	randomNumber -= 1;
	var selectedWord = wordList[selectedWord];

	module.exports.selectedWord = selectedWord;

}

module.exports = {
	wordLibrary
};
