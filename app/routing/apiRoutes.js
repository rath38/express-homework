var friendsData = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

app.post("/api/friends", function(req, res) {

 var userInput = req.body;

var userAnswer = userInput.scores;

console.log(userAnswer);

var compareArray = [];

var friendCompare = [];

function getSum(total, num) {
    return total + num; }

console.log(friendsData.length);

for (var i = 0; i < friendsData.length; i++) {
	console.log(friendsData[i].name);
	compareArray = [];
	for (var j = 0; j < userAnswer.length; j++) {
		
		compareValue = Math.abs(parseInt(userAnswer[j])-parseInt(friendsData[i].scores[j]));

		console.log(compareValue);

		compareArray.push(compareValue);

	};
	
	console.log(compareArray);

	//totalCompareValue = compareArray.reduce(getSum);

	friendCompare.push(compareArray.reduce(getSum));


};

console.log(friendCompare);

//var minChoice = Math.min(friendCompare);

var minChoice = friendCompare.reduce(function(a,b) { return Math.min(a,b);});

 console.log(minChoice);

var matchIndex = friendCompare.indexOf(minChoice);

console.log(matchIndex);

var matchResult = {
	"name": friendsData[matchIndex].name ,
	"photo": friendsData[matchIndex].photo
}

res.json(matchResult);

friendsData.push(req.body);



});

};