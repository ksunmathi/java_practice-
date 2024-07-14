// A question and answer for a quiz app

var questionAndAnswer = {
	question: "What is the capital of France?",
	answer1: "Bordeaux",
	answer2: "F",
	answer3: "Paris",
	answer4: "Brussels",
	correctAnswer: "Paris",
	marksForQuestion: 2
};

var question = questionAndAnswer.question;
var answers = [
  questionAndAnswer.answer1,
  questionAndAnswer.answer2,
  questionAndAnswer.answer3,
  questionAndAnswer.answer4
];

console.log(question);
answers.forEach((answer, index) => {
  console.log(`[${index + 1}] ${answer}`);
});



/* Further Adventures
 *
 * 1) Use console.log to present the question
 *    and answer options in a nicely formatted way.
 *
 */